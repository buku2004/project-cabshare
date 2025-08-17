"use client";

import { auth, googleProvider } from "../constants/firebase";
import { signInWithPopup, signInWithRedirect } from "firebase/auth";
import { motion } from "motion/react";

// googleProvider.setCustomParameters(
//   {
//     prompt: "select_account"
//   }
// );

export default function LoginButton() {
  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      // const idToken = await result.user.getIdToken();

      // document.cookie = `authToken=${idToken}; path=/; max-age=3600; secure; samesite=strict`;

      console.log("Signed in via popup:", result.user);
    } catch (popupError) {
      console.warn("Popup sign-in failed, falling back to redirect:", popupError);

      try {
        await signInWithRedirect(auth, googleProvider);
      } catch (redirectError) {
        console.error("Redirect sign-in failed:", redirectError);
      }
    }
  };

  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
      <button
        onClick={signIn}
        className="rounded-2xl px-4 py-2 shadow-md font-medium border bg-amber-600 hover:bg-amber-700 text-white"
      >
        Sign In
      </button>
    </motion.div>
  );
}
