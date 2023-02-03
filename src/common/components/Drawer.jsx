import React from "react";
import Drawer_ATD from "antd/lib/drawer";
import { XMarkIcon } from "@heroicons/react/24/solid";

export const Drawer = ({ title = "", isOpen, onClose, children }) => {
  return (
    <Drawer_ATD
      title={title}
      placement="right"
      onClose={onClose}
      open={isOpen}
      className="!bg-[#121212]"
      closeIcon={<XMarkIcon className="w-6 h-6 text-white" />}
    >
      {children}
    </Drawer_ATD>
  );
};
