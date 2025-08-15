"use client";
import { useState, useEffect } from "react";
import { auth } from "../constants/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import ShowAllListings from "./ShowAllListings";
import SignInModal from "../auth/SignInModal";

export default function Page() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!user) return <SignInModal onClose={() => {}} />;
  
  return <ShowAllListings />;
}