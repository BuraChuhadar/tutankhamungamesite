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
            <a
              href="https://store.steampowered.com/app/4009620/Tutankhamun__Builders_of_the_Eternal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#171a21] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#2a475e]"
            >
              <span>Wishlist on</span>
              <img
                src="/assets/images/steam.png"
                alt="Steam"
                className="h-6 w-auto"
              />
            </a>
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
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
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

            <div className="flex flex-col items-center lg:items-end justify-center gap-3">
              <span className="text-sm font-medium text-gray-500 dark:text-[#8a7e68] uppercase tracking-wider">
                Developed by
              </span>
              <img
                src="/assets/images/TreeByteSoftware.png"
                alt="TreeByte Software"
                className="h-32 w-auto opacity-90 transition-opacity hover:opacity-100"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
