import { ThemeProvider } from "@/components/theme-provider";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Space_Grotesk } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import "./globals.css";

const font = Space_Grotesk({ subsets: ["latin"] });

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

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
      <body className={`${font.className} antialiased`}>
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
