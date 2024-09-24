import React from "react";

const HovernavLayout = ({ children }) => {
  return (
    <div className="bg-white/50 backdrop-blur-md absolute left-0 h-0 overflow-hidden group-hover:h-screen z-50 w-full transition-all duration-500">
      <div className="bg-navbar h-2/3">
        <div className="flex w-[1040px] mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default HovernavLayout;
