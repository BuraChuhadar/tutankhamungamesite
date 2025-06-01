import Footer from "@/app/_components/footer";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./_components/theme-context";
import { ThemeSwitcher } from "./_components/theme-switcher";
import Script from "next/script";
import "./globals.css";

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
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `try{let t=localStorage.getItem('theme')||'system',d=t==='dark'||(t==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);document.documentElement.setAttribute('data-mode',t)}catch(e){}`,
          }}
        />
      </head>
      <body
        className="relative flex size-full min-h-screen flex-col bg-[#f9f6f2] dark:bg-[#1f1a14] text-[#2d1c00] dark:text-[#f5e9d6] group/design-root overflow-x-hidden"
        style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
      >
        <ThemeProvider>
          <ThemeSwitcher />
          <div className="layout-container flex h-full grow flex-col">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-[#40362b] bg-white/80 dark:bg-[#1f1a14]/80 backdrop-blur-sm px-10 py-3">
              <div className="flex items-center gap-4">
                <div className="size-4">
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
                  Tutankhamun: Builders of the Eternal
                </h2>
              </div>
            </header>
            <div className="px-40 flex flex-1 justify-center py-5">
              <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
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
