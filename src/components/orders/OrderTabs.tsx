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
        className={`text-xl font-black cursor-pointer px-0 py-2.5 ${
          activeTab === "current" ? "text-[#FFBF3D]" : "text-[#DDDDDD]"
        }`}
      >
        Current Order
      </button>
      <button
        onClick={() => onTabChange("past")}
        className={`text-xl font-black cursor-pointer px-0 py-2.5 ${
          activeTab === "past" ? "text-[#FFBF3D]" : "text-[#DDDDDD]"
        }`}
      >
        Past Orders
      </button>
    </div>
  );
};
