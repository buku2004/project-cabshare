"use client";
import React, { useState, useEffect } from "react";
import { auth, googleProvider } from "../constants/firebase";
import { signInWithPopup, User } from "firebase/auth";
import { useRouter } from "next/navigation";

const SignUpPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser: User | null) => {
      setUser(authUser);
      if (authUser) {
        // Redirect to home if already authenticated
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleGoogleLogin = async (): Promise<void> => {
    // Prevent multiple simultaneous requests
    if (isLoading) {
      console.log("Authentication already in progress...");
      return;
    }

    let timeoutId: NodeJS.Timeout | null = null;

    try {
      setIsLoading(true);
      
      // Set a shorter timeout to reset loading state
      timeoutId = setTimeout(() => {
        console.log("Authentication timeout, resetting loading state");
        setIsLoading(false);
      }, 10000); // 10 seconds timeout
      
      // Configure Google provider with additional options
      googleProvider.setCustomParameters({
        prompt: 'select_account'
      });

      const result = await signInWithPopup(auth, googleProvider);
      
      // Clear timeout on success
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      
      const user = result.user;
      console.log("User Info:", user);
      setUser(user);
      router.push("/");
    } catch (error: unknown) {
      // Clear timeout on any error
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      
      // Handle specific error types
      const firebaseError = error as { code?: string; message?: string };
      
      // Log less verbose messages for user-initiated actions
      if (firebaseError.code === 'auth/cancelled-popup-request') {
        console.log("Authentication cancelled");
      } else if (firebaseError.code === 'auth/popup-closed-by-user') {
        console.log("Authentication popup closed");
      } else if (firebaseError.code === 'auth/popup-blocked') {
        console.log("Popup was blocked by browser");
        alert("Please allow popups for this site to sign in with Google");
      } else {
        console.error("Authentication error:", firebaseError.code || 'unknown error');
        alert("Authentication failed. Please try again.");
      }
    } finally {
      // Ensure timeout is cleared and loading state is reset
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      // Immediate reset
      setIsLoading(false);
    }
  };

  if (user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Already Signed In
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              You are already authenticated. Redirecting to home...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-24">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up for CabShare
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Join the community and start sharing rides
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? (
              <div className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing in...
              </div>
            ) : (
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </div>
            )}
          </button>
          
          <div className="text-center">
            <p className="text-sm text-gray-600">
              By signing up, you agree to our terms and conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
