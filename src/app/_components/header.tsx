const Header = () => {
  return (
    <div className="relative z-[99999999] flex items-center justify-start gap-2 pt-4 mt-2 sm:mt-4 md:mt-12">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight flex items-center gap-2">
        <a
          href="/"
          className="hover:underline text-[#c2881b] dark:text-[#d4a63a] cursor-pointer back-button px-4 py-2 rounded-md transition-colors"
          style={{ viewTransitionName: "back-button" }}
        >
          ← Back
        </a>
      </h2>
    </div>
  );
};

export default Header;
