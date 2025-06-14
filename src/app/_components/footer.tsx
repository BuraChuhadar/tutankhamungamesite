import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#1f1a14] border-t border-[#40362b]" suppressHydrationWarning>
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2" suppressHydrationWarning>
            Join the Builders of the Eternal
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <div className="mx-3 bg-[#40362b] border border-[#40362b] text-[#f5e9d6] font-bold py-3 px-12 lg:px-8 mb-6 lg:mb-0 opacity-70 cursor-not-allowed" suppressHydrationWarning>
              Development in Progress
            </div>
            <span className="mx-3 font-medium coming-soon" suppressHydrationWarning>Coming Soon</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
