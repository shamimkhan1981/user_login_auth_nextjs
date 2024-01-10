"use client";

import { SessionProvider } from "next-auth/react";

const AuthProvidor = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvidor;
