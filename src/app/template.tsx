"use client";

import { SessionProvider } from "next-auth/react";
import GridComponent from "./components/grid";
import NavBar from "./components/navBar";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
      <GridComponent />
    </>
  );
}
