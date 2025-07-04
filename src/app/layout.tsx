import Footer from "@/app/_components/footer";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Space_Grotesk, Noto_Sans } from "next/font/google";
import { ThemeProvider } from "./_components/theme-context";
import { ClientThemeSwitcher } from "./_components/client-theme-switcher";
import { ClientDecorativeElements } from "./_components/client-decorative-elements";
import { PageTransitionProvider } from "./_components/page-transition-provider";
import { ViewTransitionsStatus } from "./_components/view-transitions-status";
import { ScrollRestoration } from "./_components/scroll-restoration";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});
const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `Tutankhamun: Builders of the Eternal`,
  description: `Embark on an epic journey to construct and manage your own ancient Egyptian city. Lead your people, harness the power of the Nile, and create a thriving civilization.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontVariables = `${spaceGrotesk.variable} ${notoSans.variable}`;

  return (
    <html lang="en" suppressHydrationWarning className={fontVariables}>
      <head>
        <title>Tutankhamun: Builders of the Eternal</title>
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#c2881b"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#c2881b" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta
          name="theme-color"
          content="#c2881b"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#1f1a14"
          media="(prefers-color-scheme: dark)"
        />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={`relative flex size-full min-h-screen flex-col bg-[#f9f6f2] dark:bg-[#1f1a14] text-[#2d1c00] dark:text-[#f5e9d6] group/design-root overflow-x-hidden ${spaceGrotesk.className}`}
        suppressHydrationWarning
      >
        {" "}
        <ThemeProvider>
          <PageTransitionProvider>
            <ScrollRestoration />
            <ClientDecorativeElements />
            <ClientThemeSwitcher />{" "}
            <div
              className="layout-container flex h-full grow flex-col relative z-10"
              suppressHydrationWarning
            >
              <div
                className="absolutebg-gradient-to-b from-[#fffbe8]/30 to-transparent dark:from-[#c2881b]/10 dark:to-transparent"
                suppressHydrationWarning
              ></div>{" "}              <div
                className="relative flex items-center justify-center pb-4 main-title-container pt-12 sm:pt-16 md:pt-12"
                suppressHydrationWarning
              >
                {" "}
                <img
                  src="/assets/images/main-title.png"
                  alt="Tutankhamun: Builders of the Eternal"
                  className="h-128 md:h-128 lg:h-128 xl:h-128 2xl:h-128 w-auto logo-shadow main-title-static translate-y-8 md:translate-y-8 lg:translate-y-8 xl:translate-y-8 2xl:translate-y-8 "
                  style={{ viewTransitionName: "none" }}
                  suppressHydrationWarning
                />
              </div>
              <div
                className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center"
                suppressHydrationWarning
              >
                <div
                  className="layout-content-container flex flex-col max-w-[1200px] flex-1"
                  suppressHydrationWarning
                >
                  {children}
                </div>
              </div>{" "}
            </div>{" "}
          </PageTransitionProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
