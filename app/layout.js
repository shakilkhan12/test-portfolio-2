"use client";
import Provider from "@/components/Provider";
import "./globals.css";
import Three from "@/components/Three";

export default function RootLayout({ children }) {
  return (
    // <ServerThemeProvider>
    <html lang="en">
      <body className="">
        <div className="h-screen fixed inset-0 -z-10">
          {" "}
          <Three />
        </div>

        <Provider>
          <div className="z-[999999]">{children}</div>
        </Provider>
      </body>
    </html>
    // </ServerThemeProvider>
  );
}
