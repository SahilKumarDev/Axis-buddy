import { ThemeProvider } from "@/components/theme-provider";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const spaceBold = localFont({
  src: "./fonts/SpaceGrotesk-Bold.ttf",
  variable: "--font-space-bold",
  weight: "700",
});

const spaceRegular = localFont({
  src: "./fonts/SpaceGrotesk-Regular.ttf",
  variable: "--font-space-regular",
  weight: "400",
});

const spaceLight = localFont({
  src: "./fonts/SpaceGrotesk-Light.ttf",
  variable: "--font-space-light",
  weight: "300",
});

const spaceSemiBold = localFont({
  src: "./fonts/SpaceGrotesk-SemiBold.ttf",
  variable: "--font-space-semibold",
  weight: "600",
});

const spaceMedium = localFont({
  src: "./fonts/SpaceGrotesk-Medium.ttf",
  variable: "--font-space-medium",
  weight: "500",
});

export const metadata: Metadata = {
  title: "Home | Doc Creation",
  description: "Banner, poster, and website creation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` 
          ${spaceBold.className}
          ${spaceLight.className} 
          ${spaceMedium.className} 
          ${spaceRegular.className} 
          ${spaceSemiBold.className} 
          antialiased
        `}
      >
        <div
          className="
            overflow-clip inset-0 -z-10 h-full w-full bg-transparent bg-[size:14px_24px]
            bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] 
          "
        >
          <ThemeProvider
            enableSystem
            attribute="class"
            defaultTheme="default"
            disableTransitionOnChange
          >
            <MaxWidthWrapper>
              <Header />
              {children}
              <Footer />
            </MaxWidthWrapper>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
