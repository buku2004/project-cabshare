"use client";

import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
import { auth } from "../constants/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import LoginButton from "./LoginButton";
import UserDropdown from "./UserDropdown";

export default function UserStatus() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  // const pathname = usePathname();

  // const protectedRoutes = ["/post-ride", "/find-ride"];

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-amber-600 border-t-gray-800"></div>
      </div>
    );
  }

  // if (protectedRoutes.includes(pathname) && !user) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <SignInModal />
  //     </div>
  //   );
  // }

  // Normal case
  if (!user) return <LoginButton />;

  return (
    <div className="flex items-center gap-3">
      <UserDropdown
        name={user.displayName ?? "User"}
        photoURL={user.photoURL ?? "/avatar.jpg"}
      />
    </div>
  );
}
