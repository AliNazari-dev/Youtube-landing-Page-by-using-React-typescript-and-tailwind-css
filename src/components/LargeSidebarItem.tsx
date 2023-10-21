import { twMerge } from "tailwind-merge";
import { buttonStyles } from "./Button";
import { ElementType } from "react";

type LargeSidebarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
  isActive?: boolean;
};

function LargeSidebarItem({ Icon, title, url, isActive = false }: LargeSidebarItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `w-full flex items-center rounded-lg gap-4 p-3 ${
          isActive ? "font-bold bg-neutral-100 hover:bg-secondary" : undefined
        }`
      )}>
      <Icon className='w-5 h-5' />
      <div className='text-sm font-normal whitespace-nowrap overflow-hidden text-ellipsis'>
        {title}
      </div>
    </a>
  );
}

export default LargeSidebarItem;
