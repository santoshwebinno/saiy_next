import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saiy",
  description: "saiy app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased font-custom-sf`}
      >
        {children}
      </body>
    </html>
  );
}
