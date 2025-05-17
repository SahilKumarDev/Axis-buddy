import { ThemeProvider } from "@/components/theme-provider";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

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
  title: "Axis Buddy",
  description:
    "Axis Buddy offers exceptional banner designs, stunning posters, professional website creation, video editing, UI/UX design, and app development services. Your one-stop solution for impactful visual content and digital innovation.",
  authors: [
    {
      name: "Sahil Kumar dev",
      url: "https://www.linkedin.com/in/sahil-kumar-dev/",
    },
  ],
  keywords: [
    "Axis Buddy",
    "banner design",
    "poster design",
    "website creation",
    "video editing",
    "UI/UX design",
    "app development",
    "graphic design",
    "digital marketing",
    "branding",
    "social media design",
    "content creation",
    "creative agency",
    "visual content",
    "digital innovation",
    "web development",
    "mobile app development",
    "video production",
    "user interface design",
    "user experience design",
    "advertising",
    "marketing",
    "business branding",
    "online presence",
    "creative solutions",
    "design services",
    "digital solutions",
    "Portfolio Maker",
  ],
  creator: "Sahil Kumar dev",
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
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.PUBLIC_GOOGLE_ADS_CLIENT_ID}`}
          crossOrigin="anonymous"
        ></Script>
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
