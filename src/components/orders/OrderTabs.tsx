
import React from "react";

interface OrderTabsProps {
  activeTab: "current" | "past";
  onTabChange: (tab: "current" | "past") => void;
}

export const OrderTabs: React.FC<OrderTabsProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="flex gap-5 mb-5 px-5 py-0 max-sm:px-[15px] max-sm:py-0">
      <button
        onClick={() => onTabChange("current")}
        className={`text-xl cursor-pointer px-0 py-2.5 ${
          activeTab === "current" ? "text-[#FFC107] font-bold" : "text-[#CCCCCC] font-normal"
        }`}
      >
        Current Order
      </button>
      <button
        onClick={() => onTabChange("past")}
        className={`text-xl cursor-pointer px-0 py-2.5 ${
          activeTab === "past" ? "text-[#FFC107] font-bold" : "text-[#CCCCCC] font-normal"
        }`}
      >
        Past Orders
      </button>
    </div>
  );
};
