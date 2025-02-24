import React from "react";
import { TimelineItem } from "./TimelineItem";

const timelineData = [
  {
    icon: "shirt",
    title: "Pickup confirmed",
    subtitle: "Payment via credit card.",
    date: "Sat, Feb 8",
    isCompleted: true,
  },
  {
    icon: "truck",
    title: "Picked up",
    subtitle: "Package picked from designated address.",
    date: "Sat, Feb 8",
    isCompleted: true,
  },
  {
    icon: "washing-machine",
    title: "Laundering",
    subtitle: "Your clothes are currently being washed and ironed.",
    date: "Sat, Feb 8",
    isCompleted: true,
  },
  {
    icon: "package",
    title: "Ready for delivery",
    subtitle: "Your package is being handed over to the delivery agent.",
    date: "Sat, Feb 8",
    isCompleted: true,
  },
  {
    icon: "check",
    title: "Delivered!",
    subtitle: "Your package has been delivered to your address!",
    date: "Sat, Feb 8",
    isCompleted: true,
  },
];

export const OrderTimeline: React.FC = () => {
  return (
    <div className="relative mt-10">
      {timelineData.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  );
};
