import React from "react";
import EachUtils from "../../../utils/EachUtils";
import HoverNav from "./HoveNav";

import { FaApple } from "react-icons/fa6";
import { LIST_NAVBAR, LIST_PRODUCT } from "../../../constants/dataHeader";
import { GoSearch } from "react-icons/go";

const Navbar = () => {
  return (
    <header className="bg-navbar w-full flex flex-col justify-center items-center">
      <nav className="px-[228px] w-full flex justify-between items-center h-11 ">
        <div className="w-11 h-full">
          <a
            href="#"
            className="w-full h-full flex justify-center items-center "
          >
            <FaApple size={16} />
          </a>
        </div>
        <ul className="flex w-full h-full items-center justify-evenly">
          <EachUtils
            of={LIST_NAVBAR}
            render={(item, index) => (
              <li key={index} className="h-full group">
                <a
                  href={item.url}
                  className="text-xs px-2 flex items-center h-full"
                >
                  {item.link}
                </a>
                <HoverNav index={index} />
              </li>
            )}
          />
        </ul>
        <div className="w-11 h-full">
          <a
            href="#"
            className="w-full h-full flex justify-center items-center"
          >
            <GoSearch size={16} />
          </a>
        </div>
      </nav>
      <nav className="pt-4 w-full" data-aos="fade-left" data-aos-duration="500">
        <ul className="flex w-full h-full justify-center gap-12 pb-12">
          <EachUtils
            of={LIST_PRODUCT}
            render={(item, index) => (
              <li key={index} className="flex items-start">
                <a
                  href={item.url}
                  className="flex flex-col justify-center items-center gap-1 p-2 hover:brightness-200"
                >
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="h-[52px]"
                  />
                  <div className="flex flex-col relative">
                    <span className="text-xs">{item.title}</span>
                    {item.beta_test && (
                      <span className="text-[10px] text-red-700 font-semibold text-center absolute -bottom-[40%] translate-y-1/2 left-1/2 -translate-x-1/2">
                        Pratinjau
                      </span>
                    )}
                  </div>
                </a>
              </li>
            )}
          />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
