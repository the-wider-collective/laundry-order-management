import React, { useState } from "react";
import { OrderHeader } from "@/components/orders/OrderHeader";
import { OrderTabs } from "@/components/orders/OrderTabs";
import { OrderTimeline } from "@/components/orders/OrderTimeline";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"current" | "past">("current");

  return (
    <div className="max-w-[393px] min-h-screen bg-white mx-auto my-0">
      <header className="flex justify-between items-center relative p-5">
        <button className="w-10 h-10 flex items-center justify-center cursor-pointer">
          <i className="ti ti-chevron-left" />
        </button>
        <h1 className="font-black text-base text-center">MY ORDERS</h1>
        <button className="w-10 h-10 flex items-center justify-center cursor-pointer">
          <i className="ti ti-menu-2" />
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
            className="w-full text-center text-[#FFBF3D] cursor-pointer mt-10 p-5"
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
