import React from "react";
//import "./styles/global.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        {children}
    </html>
  );
}
