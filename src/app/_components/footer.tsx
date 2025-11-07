import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer suppressHydrationWarning className="footer-blended relative w-full">
      <div className="container mx-auto px-5">
        <div className="py-16 flex flex-col lg:flex-row items-center">
          <h3
            className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2"
            suppressHydrationWarning
          >
            Join the Builders of the Eternal
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-6 lg:pl-4 lg:w-1/2">
            <div
              className="mx-3 bg-gray-600 dark:bg-[#40362b] border border-gray-600 dark:border-[#40362b] text-gray-200 dark:text-[#f5e9d6] font-bold py-3 px-12 lg:px-8 mb-6 lg:mb-0 opacity-70 cursor-not-allowed"
              suppressHydrationWarning
            >
              Development in Progress
            </div>
            <a
              href="https://discord.gg/2m2qch3m"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-[#c2881b] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#c2881b] transition-colors duration-200 hover:bg-[#c2881b] hover:text-[#1f1a14] dark:border-[#d4a63a] dark:text-[#f5e9d6] dark:hover:bg-[#d4a63a] dark:hover:text-[#1f1a14]"
              suppressHydrationWarning
            >
              Join Our Discord
            </a>
          </div>
        </div>
        <div className="border-t border-gray-300 dark:border-[#40362b] pt-8 pb-8">
          <div className="flex flex-col items-center text-center">
            <p
              className="text-lg text-gray-600 dark:text-[#c9b896] mb-2"
              suppressHydrationWarning
            >
              Have questions or feedback?
            </p>
            <a
              href="mailto:contact@tutankhamungame.com"
              className="text-[#c2881b] dark:text-[#c2881b] font-semibold hover:underline transition-all duration-200"
              suppressHydrationWarning
            >
              contact@tutankhamungame.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
