import { Children, ReactNode, useState } from "react";
import { Button } from "./Button";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";

type LargeSidebarSectionProps = {
  children: ReactNode;
  title?: string;
  visibleItemCount?: number;
};

const LargeSidebarSection = ({
  children,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY,
}: LargeSidebarSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const childrenArray = Children.toArray(children).flat();

  const showExpandButton = childrenArray.length > visibleItemCount;

  const visibaleChildren = isExpanded ? childrenArray : childrenArray.slice(0, visibleItemCount);
  const ButtonIcon = isExpanded ? BsChevronUp : BsChevronDown;
  return (
    <div>
      {title && <div className='ml-4 mt-2 text-lg mb-1'>{title}</div>}
      {visibaleChildren}
      {showExpandButton && (
        <Button
          onClick={() => setIsExpanded((prev) => !prev)}
          variant={"ghost"}
          className='w-full hidden lg:flex items-center rounded-lg gap-4 p-3'>
          <ButtonIcon />
          <div>{isExpanded ? "Show Less" : "Show More"}</div>
        </Button>
      )}
    </div>
  );
};

export default LargeSidebarSection;
