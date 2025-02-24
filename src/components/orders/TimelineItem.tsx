
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
      <div className="relative">
        <div
          className={`w-12 h-12 text-white flex items-center justify-center z-[1] ${
            isCompleted ? "bg-[#6FCACF]" : "bg-[#DDDDDD]"
          } mr-5 rounded-full border-4 border-white`}
        >
          <i className={`ti ti-${icon}`} />
        </div>
        {/* Vertical line connecting timeline items */}
        <div className="absolute left-1/2 top-12 bottom-[-40px] w-0.5 bg-[#E5E5E5] -translate-x-1/2" />
      </div>
      <div className="flex-1">
        <div className="font-semibold text-[#333333] mb-[5px]">{title}</div>
        <div className="text-[#999999] text-sm">{subtitle}</div>
      </div>
      <div className="text-[#999999] text-sm min-w-20 text-right max-sm:text-xs max-sm:min-w-[70px]">
        {date}
      </div>
    </div>
  );
};
