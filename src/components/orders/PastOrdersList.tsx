
import React from "react";

interface PastOrder {
  status: "Delivered" | "Cancelled";
  serviceName: string;
  date: string;
}

const pastOrders: PastOrder[] = [
  {
    status: "Delivered",
    serviceName: "Standard laundry",
    date: "Feb 01 2025",
  },
  {
    status: "Delivered",
    serviceName: "Basic laundry",
    date: "Feb 01 2025",
  },
  {
    status: "Cancelled",
    serviceName: "Premium laundry",
    date: "Feb 01 2025",
  },
  {
    status: "Delivered",
    serviceName: "Special laundry",
    date: "Feb 01 2025",
  },
  {
    status: "Delivered",
    serviceName: "Premium laundry",
    date: "Feb 01 2025",
  },
  {
    status: "Delivered",
    serviceName: "Basic laundry",
    date: "Feb 01 2025",
  },
];

export const PastOrdersList: React.FC = () => {
  return (
    <div className="flex flex-col">
      {pastOrders.map((order, index) => (
        <div
          key={index}
          className="py-5 border-b border-[#F5F5F5] flex flex-col"
        >
          <div className="flex justify-between items-center mb-1">
            <span
              className={`text-sm ${
                order.status === "Delivered"
                  ? "text-[#6FCACF]"
                  : "text-[#FF6B6B]"
              }`}
            >
              {order.status}
            </span>
            <span className="text-sm text-[#999999]">{order.date}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-base font-semibold text-[#333333]">
              {order.serviceName}
            </span>
            <button className="text-[#FFC107] text-sm">Order details</button>
          </div>
        </div>
      ))}
      <button className="text-[#FFC107] py-8">Help</button>
    </div>
  );
};
