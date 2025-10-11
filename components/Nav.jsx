import Link from "next/link";
import { usePathname } from "next/navigation";

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "Home", path: "/", Icon: HiHome },
  { name: "About us", path: "/about", Icon: HiUser },
  { name: "What we do", path: "/services", Icon: HiRectangleGroup },
  { name: "Other Applications", path: "/work", Icon: HiViewColumns },
  {
    name: "Testimonials",
    path: "/testimonials",
    Icon: HiChatBubbleBottomCenterText,
  },
  {
    name: "Contact us",
    path: "/contact",
    Icon: HiEnvelope,
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-center justify-start gap-y-4 fixed bottom-0 lg:mt-5 mt-[5.5rem] lg:right-[2%] lg:translate-x-0 right-[50%] translate-x-[50%] z-50 top-[1rem] sm:w-[65%] w-[80%] lg:max-w-[50%] xl:max-w-[40%] h-fit">
      <div className="flex w-full md:flex-row items-center justify-between gap-y-10 px-8 h-[40px] py-8 bg-white/10 backdrop-blur-sm text-3xl md:text-xl rounded-full">
        {navData.map((link, i) => (
          <Link
            className={`${
              link.path === pathname && "text-accent"
            } relative flex items-center group hover:text-accent transition-all duration-300`}
            href={link.path}
            key={i}
          >
            {/* tolltip */}
            <div
              role="tooltip"
              className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 hidden lg:group-hover:flex"
            >
              <div className="bg-white flex text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>

                {/* triangle (arrow pointing up) */}
                <div
                  className="absolute top-3 left-1/2 transform -translate-x-1/2 -translate-y-[6px] 
                 border-solid border-b-white border-b-8 border-l-transparent border-r-transparent"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* icon */}
            <div className="flex flex-col items-center justify-center ">
              <link.Icon aria-hidden size={22} />
              <p className="text-[10px] hidden sm:block">{link.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
