import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center gap-2 relative z-30">
      <Link
        href="/"
        className="hover:underline text-[#c2881b] dark:text-[#d4a63a] cursor-pointer relative z-40 back-button"
        style={{ viewTransitionName: 'back-button' }}
      >
        ← Back
      </Link>
    </h2>
  );
};

export default Header;
