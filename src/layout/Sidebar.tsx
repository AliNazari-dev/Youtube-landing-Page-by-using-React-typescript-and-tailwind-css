import { AiOutlineHome as Home } from "react-icons/ai";
import {
  MdOutlineSubscriptions as Subscriptions,
  MdOutlineVideoLibrary as Library,
  MdOutlineAppShortcut as Short,
} from "react-icons/md";
import SmallSidebarItem from "../components/SmallSidebarItem";

const Sidebar = () => {
  return (
    <aside
      className='sticky
   top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden'>
      <SmallSidebarItem Icon={Home} url='/' title='Home' />
      <SmallSidebarItem Icon={Short} url='/' title='Short' />
      <SmallSidebarItem Icon={Subscriptions} url='/' title='Subscriptions' />
      <SmallSidebarItem Icon={Library} url='/' title='Library' />
    </aside>
  );
};

export default Sidebar;
