"use client";
import Provider from "@/components/Provider";
import "./globals.css";
import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Three from "@/components/Three";

export default function RootLayout({ children }) {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);
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
