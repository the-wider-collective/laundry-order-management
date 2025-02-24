
import React from "react";

interface OrderHeaderProps {
  orderId: string;
  orderStatus: string;
  orderDate: string;
  orderPrice: string;
}

export const OrderHeader: React.FC<OrderHeaderProps> = ({
  orderId,
  orderStatus,
  orderDate,
  orderPrice,
}) => {
  return (
    <div className="mb-[30px]">
      <h1 className="text-[#333333] text-2xl font-bold mb-2.5">{orderStatus}</h1>
      <div className="flex justify-between text-[#666] mb-[5px]">
        <div>Order ID: {orderId}</div>
        <div className="font-semibold">{orderPrice}</div>
      </div>
      <div className="text-[#666]">{orderDate}</div>
    </div>
  );
};
