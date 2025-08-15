"use client";
import LoginButton from "./LoginButton";
import { motion } from "motion/react";
import Link from "next/link";

export default function SignInModal({ onClose }: { onClose: () => void }) {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleBackdropClick}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white p-6 rounded-xl shadow-xl max-w-md mx-4"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Sign in required</h2>
          <Link href="/" className="text-gray-400 hover:text-gray-600 text-2xl leading-none">
          x
          </Link>
        </div>
        
        <p className="text-gray-600 mb-6">
          Please sign in to access this feature and start sharing rides with fellow NITR students.
        </p>
        
        <div className="flex justify-center">
          <LoginButton />
        </div>
      </motion.div>
    </div>
  );
}