import { AiOutlineHome as Home } from "react-icons/ai";
import {
  MdOutlineSubscriptions as Subscriptions,
  MdOutlineVideoLibrary as Library,
  MdOutlineAppShortcut as Short,
  MdOutlineWatchLater,
  MdOutlinePlaylistPlay,
} from "react-icons/md";
import SmallSidebarItem from "../components/SmallSidebarItem";
import LargeSidebarSection from "../components/LargeSidebarSection";
import LargeSidebarItem from "../components/LargeSidebarItem";
import { LuLibrary } from "react-icons/lu";
import { RiHistoryFill } from "react-icons/ri";
import { GoVideo } from "react-icons/go";
import { playlists, subscriptions } from "../data/sidebar";

const Sidebar = () => {
  return (
    <>
      <aside
        className='sticky
      top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden'>
        <SmallSidebarItem Icon={Home} url='/' title='Home' />
        <SmallSidebarItem Icon={Short} url='/' title='Short' />
        <SmallSidebarItem Icon={Subscriptions} url='/' title='Subscriptions' />
        <SmallSidebarItem Icon={Library} url='/' title='Library' />
      </aside>
      <aside className='w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 gap-2 flex flex-col'>
        <LargeSidebarSection>
          <LargeSidebarItem isActive IconOrImgUrl={Home} title='Home' url='/' />
          <LargeSidebarItem isActive IconOrImgUrl={Subscriptions} title='Subscriptions' url='/' />
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection visibleItemCount={5}>
          <LargeSidebarItem isActive IconOrImgUrl={LuLibrary} title='Library' url='/' />
          <LargeSidebarItem isActive IconOrImgUrl={RiHistoryFill} title='History' url='/' />
          <LargeSidebarItem isActive IconOrImgUrl={GoVideo} title='Your Video' url='/' />
          <LargeSidebarItem
            isActive
            IconOrImgUrl={MdOutlineWatchLater}
            title='Watch Later'
            url='/'
          />
          {playlists.map((playlist) => (
            <LargeSidebarItem
              key={playlist.id}
              isActive
              IconOrImgUrl={MdOutlinePlaylistPlay}
              title={playlist.name}
              url={`/playlist?list=${playlist.id}`}
            />
          ))}
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection title='Subscriptions'>
          {subscriptions.map((subscription) => (
            <LargeSidebarItem
              url={`/@${subscription.id}`}
              key={subscription.id}
              IconOrImgUrl={subscription.imgUrl}
              title={subscription.channelName}
            />
          ))}
        </LargeSidebarSection>
        <hr />
      </aside>
    </>
  );
};

export default Sidebar;
