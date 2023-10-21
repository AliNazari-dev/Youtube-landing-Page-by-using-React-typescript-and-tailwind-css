import logo from "../assets/Logo.png";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { Button } from "../components/Button";
import { BiVideoPlus } from "react-icons/bi";
import { BsBell, BsFillMicFill as Mic, BsSearch as Search } from "react-icons/bs";
import { FaArrowLeftLong as BackIcon } from "react-icons/fa6";
import { useState } from "react";
import { useSidebarContext } from "../context/SidebarContext";

const PageHeader = () => {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  return (
    <div className='gap-10 flex lg:gap-20 justify-between pt-2 mb-6 mx-4'>
      {/* Left side section */}
      <PageHeaderFirstSection hidden={showFullWidthSearch} />
      <form
        className={`flex-grow gap-4 justify-center ${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        }`}>
        {showFullWidthSearch && (
          <Button
            type='button'
            size={"icon"}
            variant={"ghost"}
            className='flex flex-shrink-0'
            onClick={() => setShowFullWidthSearch(false)}>
            <BackIcon />
          </Button>
        )}
        <div className='flex flex-grow justify-center max-w-[600px]'>
          <input
            type='search'
            placeholder='Search'
            className='rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none'
          />
          <Button className='py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0'>
            <Search />
          </Button>
        </div>
        <Button type='button' size={"icon"} variant={"default"} className='flex flex-shrink-0'>
          <Mic />
        </Button>
      </form>
      <div className={`flex-shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden" : "flex"}`}>
        <Button
          size={"icon"}
          variant={"ghost"}
          className='md:hidden'
          onClick={() => setShowFullWidthSearch(true)}>
          <Search />
        </Button>
        <Button size={"icon"} variant={"ghost"} className='md:hidden'>
          <Mic />
        </Button>
        <Button size={"icon"} variant={"ghost"} className=''>
          <BiVideoPlus />
        </Button>
        <Button size={"icon"} variant={"ghost"} className=''>
          <BsBell />
        </Button>
        <Button size={"icon"} variant={"ghost"} className=''>
          <AiOutlineUser />
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;

type PageHeaderFirstSectionProps = {
  hidden?: boolean;
};

export function PageHeaderFirstSection({ hidden = false }: PageHeaderFirstSectionProps) {
  const { toggle } = useSidebarContext();
  return (
    <div className={`flex gap-4 items-center flex-shrink-0 ${hidden ? "hidden" : "flex"}`}>
      <Button variant={"ghost"} size={"icon"} onClick={toggle}>
        <AiOutlineMenu />
      </Button>
      <a href=''>
        <img src={logo} alt='logo' className='h-6 ' />
      </a>
    </div>
  );
}
