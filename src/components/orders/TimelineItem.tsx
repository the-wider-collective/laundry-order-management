import React from "react";

interface TimelineItemProps {
  icon: string;
  title: string;
  subtitle: string;
  date: string;
  isCompleted: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  icon,
  title,
  subtitle,
  date,
  isCompleted,
}) => {
  return (
    <div className="flex relative mb-10">
      <div
        className={`w-10 h-10 text-white flex items-center justify-center z-[1] ${
          isCompleted ? "bg-[#76C5C9]" : "bg-[#DDDDDD]"
        } mr-5 rounded-[50%] max-sm:w-[30px] max-sm:h-[30px] max-sm:mr-[15px]`}
      >
        <i className={`ti ti-${icon}`} />
      </div>
      <div className="flex-1">
        <div className="font-bold mb-[5px]">{title}</div>
        <div className="text-[#666] text-sm">{subtitle}</div>
      </div>
      <div className="text-[#666] text-sm min-w-20 text-right max-sm:text-xs max-sm:min-w-[70px]">
        {date}
      </div>
    </div>
  );
};
