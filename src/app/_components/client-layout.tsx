"use client";

import { Providers } from "./providers";
import { ThemeSwitcher } from "./theme-switcher";
import Footer from "./footer";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <div className="relative flex size-full min-h-screen flex-col bg-white text-gray-900 group/design-root overflow-x-hidden dark:bg-neutral-900 dark:text-gray-100">
        <div className="layout-container flex h-full grow flex-col">
          <ThemeSwitcher />
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 bg-white px-10 py-3 dark:border-gray-700 dark:bg-neutral-900">
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
            <div className="flex flex-1 justify-end gap-8">
              <div className="flex items-center gap-9">
                <a className="text-gray-700 text-sm font-medium leading-normal hover:text-blue-600 transition-colors dark:text-gray-100 dark:hover:text-yellow-300">
                  Overview
                </a>
                <a className="text-gray-700 text-sm font-medium leading-normal hover:text-blue-600 transition-colors dark:text-gray-100 dark:hover:text-yellow-300">
                  Features
                </a>
                <a className="text-gray-700 text-sm font-medium leading-normal hover:text-blue-600 transition-colors dark:text-gray-100 dark:hover:text-yellow-300">
                  Community
                </a>
                <a className="text-gray-700 text-sm font-medium leading-normal hover:text-blue-600 transition-colors dark:text-gray-100 dark:hover:text-yellow-300">
                  Support
                </a>
              </div>
            </div>
          </header>
          <main className="flex-1">{children}</main>
        </div>
        <Footer />
      </div>
    </Providers>
  );
}
