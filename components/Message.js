import React from "react";
import { RiMessengerLine } from "react-icons/ri";
import MessengerCustomerChat from "react-messenger-customer-chat/lib/MessengerCustomerChat";

const Message = () => {
  return (
    <div className="text-blue-600 mr-auto">
      <RiMessengerLine className="text-4xl" />
      <MessengerCustomerChat pageId="107352495406019" appId="473652691266145" />
    </div>
  );
};

export default Message;
