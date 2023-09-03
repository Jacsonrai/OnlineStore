"use client";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/app/components/common/header/navbar";
import { Inter, Roboto } from "next/font/google";
import AppBar from "@/app/components/common/header/appbar";
import { QueryClient, QueryClientProvider } from "react-query";
import store from "./store/store";
import { Provider } from "react-redux";
import Drawer from "@/app/components/shared/drawer";
import "react-loading-skeleton/dist/skeleton.css";
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
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body className={`${roboto.className} relative`}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <Navbar />
            {children}
            <div className="fixed z-20 bottom-0 md:hidden">
              <AppBar />
            </div>
            <Drawer />
          </QueryClientProvider>
        </Provider>
      </body>
    </html>
  );
}
