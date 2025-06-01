import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center gap-2">
      <Link
        href="/"
        className="hover:underline text-yellow-700 dark:text-yellow-300"
      >
        ← Back
      </Link>
    </h2>
  );
};

export default Header;
