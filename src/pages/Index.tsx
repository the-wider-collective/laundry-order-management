
import React, { useState } from "react";
import { OrderHeader } from "@/components/orders/OrderHeader";
import { OrderTabs } from "@/components/orders/OrderTabs";
import { OrderTimeline } from "@/components/orders/OrderTimeline";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"current" | "past">("current");

  return (
    <div className="max-w-[393px] min-h-screen bg-white mx-auto my-0">
      <header className="flex justify-between items-center relative p-5 border-b border-[#F5F5F5]">
        <button className="w-10 h-10 flex items-center justify-center cursor-pointer text-[#6FCACF]">
          <i className="ti ti-chevron-left text-2xl" />
        </button>
        <h1 className="text-base text-center text-[#333333]">MY ORDERS</h1>
        <button className="w-10 h-10 flex items-center justify-center cursor-pointer text-[#6FCACF]">
          <i className="ti ti-menu-2 text-2xl" />
        </button>
      </header>

      <main>
        <OrderTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="px-5 py-0 max-sm:px-[15px] max-sm:py-0">
          <OrderHeader
            orderId="123456"
            orderStatus="Order placed!"
            orderDate="Sat, Feb 8"
            orderPrice="$7.00"
          />

          <OrderTimeline />

          <button
            className="w-full text-center text-[#FFC107] cursor-pointer mt-10 p-5 font-semibold"
            onClick={() => console.log("Cancel order")}
          >
            Cancel Order
          </button>
        </div>
      </main>
    </div>
  );
};

export default Index;
