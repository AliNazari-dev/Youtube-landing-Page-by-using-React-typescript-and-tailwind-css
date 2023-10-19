import { ElementType } from "react";
import { buttonStyles } from "./Button";
import { twMerge } from "tailwind-merge";

type SmallSidebarItemProps = {
  url: string;
  title: string;
  Icon: ElementType;
};

const SmallSidebarItem = ({ url, title, Icon }: SmallSidebarItemProps) => {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        "py-4 flex flex-col items-center rounded-lg"
      )}>
      <Icon className='w-6 h-6' />
      <div className='text-sm'>{title}</div>
    </a>
  );
};

export default SmallSidebarItem;
