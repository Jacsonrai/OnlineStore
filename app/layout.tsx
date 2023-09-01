import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/app/components/common/header/navbar";
import { Inter, Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["400", "100", "300", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "online store",
  description: "This is a one of best selling online store in Nepal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
