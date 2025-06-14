import Footer from "@/app/_components/footer";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./_components/theme-context";
import { ThemeSwitcher } from "./_components/theme-switcher";
import { DecorativeElements } from "./_components/decorative-elements";
import Script from "next/script";
import "./globals.css";
import styles from "./_components/decorative-elements.module.css";

const inter = Inter({ subsets: ["latin"] });

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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?display=swap&family=Noto+Sans:wght@400;500;700;900&family=Space+Grotesk:wght@400;500;700"
        />
        <title>Tutankhamun: Builders of the Eternal</title>
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
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
        <link rel="manifest" href="/favicon/site.webmanifest" />{" "}
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#c2881b"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />{" "}
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
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `try{let t=localStorage.getItem('theme')||'system',d=t==='dark'||(t==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);document.documentElement.setAttribute('data-mode',d?'dark':'light')}catch(e){}`,
          }}
        />
      </head>
      <body
        className="relative flex size-full min-h-screen flex-col bg-[#f9f6f2] dark:bg-[#1f1a14] text-[#2d1c00] dark:text-[#f5e9d6] group/design-root overflow-x-hidden"
        style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
      >
        <ThemeProvider>
          <DecorativeElements />
          <ThemeSwitcher />
          <div
            className={`layout-container flex h-full grow flex-col relative z-10`}
          >
            {" "}
            <div className="absolute inset-0 bg-gradient-to-b from-[#fffbe8]/30 to-transparent dark:from-[#c2881b]/10 dark:to-transparent"></div>{" "}
            <div className="relative z-30 flex items-center justify-center py-4">
              <img
                src="/assets/images/main-title.png"
                alt="Tutankhamun: Builders of the Eternal"
                className="h-72 md:h-96 lg:h-128 xl:h-144 2xl:h-160 w-auto transform translate-y-12 logo-shadow"
              />
            </div>
            <div className="px-40 flex flex-1 justify-center py-5">
              <div className="layout-content-container flex flex-col max-w-[1000px] flex-1">
                {children}
              </div>
            </div>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
