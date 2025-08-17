// import type { NextApiRequest, NextApiResponse } from "next";
// import { getAuth } from "firebase-admin/auth";
// import { serialize } from "cookie";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const idToken = req.body.token;
//   if (!idToken) {
//     return res.status(400).json({ error: "Missing token" });
//   }
//   const expiresIn = 60 * 60 * 24 * 5; // in seconds 5 days

//   let sessionCookie: string;
//   try {
//     sessionCookie = await getAuth().createSessionCookie(idToken, { expiresIn });
//   } catch (error) {
//     return res.status(401).json({ error: "Invalid token" });
//   }

//   const cookieHeader = serialize("firebaseToken", sessionCookie, {
//     httpOnly: true,
//     secure: false,
//     path: "/",
//     maxAge: expiresIn,
//     sameSite: "lax", // whats this
//   });

//   res.setHeader("Set-Cookie", cookieHeader);
//   return res.status(200).json({ status: "success" });
// }
