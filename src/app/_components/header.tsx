import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight pt-4 mt-2 sm:mt-4 md:mt-12 flex items-center gap-2 relative z-[99999999]">      <Link
        href="/"
        className="hover:underline text-[#c2881b] dark:text-[#d4a63a] cursor-pointer relative z-[99999999] back-button px-4 py-2 rounded-md transition-colors"
        style={{ viewTransitionName: "back-button" }}
      >
        ← Back
      </Link>
    </h2>
  );
};

export default Header;
