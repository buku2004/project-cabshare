import firebase_admin
from firebase_admin import credentials, firestore
import pandas as pd
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import string
from nltk.sentiment import SentimentIntensityAnalyzer

nltk.download('punkt')
nltk.download('stopwords')
nltk.download('vader_lexicon')
cred = credentials.Certificate(r"C:\Users\subhr\cabshare-nitr\firebase.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

feedbacks = []
docs = db.collection('feedbacks').stream()
for doc in docs:
    data = doc.to_dict()
    if 'message' in data:  
        feedbacks.append(data['message'])

df = pd.DataFrame(feedbacks, columns=['feedback'])

def preprocess_text(text):
    tokens = word_tokenize(text.lower())
    tokens = [word for word in tokens if word not in stopwords.words('english') and word not in string.punctuation]
    return " ".join(tokens)

df['cleaned_feedback'] = df['feedback'].apply(preprocess_text)

sia = SentimentIntensityAnalyzer()
df['sentiment_score'] = df['cleaned_feedback'].apply(lambda x: sia.polarity_scores(x)['compound'])
df['sentiment'] = df['sentiment_score'].apply(
    lambda x: 'positive' if x > 0.05 else ('negative' if x < -0.05 else 'neutral')
)

sentiment_counts = df['sentiment'].value_counts().to_dict()
db.collection('sentiment_summary').document('stats').set(sentiment_counts)
positive_feedbacks = df[df['sentiment'] == 'positive']['feedback'].tolist()
negative_feedbacks = df[df['sentiment'] == 'negative']['feedback'].tolist()
neutral_feedbacks = df[df['sentiment'] == 'neutral']['feedback'].tolist()
print("Positive Feedbacks:")
print(positive_feedbacks)
print("\nNegative Feedbacks:")
print(negative_feedbacks)
print("\nNeutral Feedbacks:")
print(neutral_feedbacks)
print("Sentiment Analysis Completed and Uploaded to Firestore!")