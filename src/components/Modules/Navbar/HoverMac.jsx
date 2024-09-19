import React from "react";
import EachUtils from "../../../utils/EachUtils";
import { LIST_NAVHOVER_MAC } from "../../../constants/dataHeader";

const HoverMac = () => {
  return (
    <div className="bg-white/50 backdrop-blur-md absolute left-0 h-0 overflow-hidden group-hover:h-screen z-50 w-full transition-all duration-500">
      <div className="bg-navbar h-2/3">
        <div className="flex w-[1040px] mx-auto">
          <EachUtils
            of={LIST_NAVHOVER_MAC}
            render={(item, index) => (
              <ul
                key={index}
                className={`${[0].includes(index) ? "w-3/5 mr-4" : "w-full"}`}
              >
                <li className="pt-12 font-medium">
                  <h3 className="text-xs opacity-70">{item.title}</h3>
                  <div
                    className={`flex flex-col mt-4 ${
                      index === Array.length - 0 ? "text-xs" : "text-2xl"
                    }`}
                  >
                    {item.data_list.map((data, index) => (
                      <a
                        key={index}
                        href={data.link_url}
                        className={`mb-2 ${
                          [8, 9].includes(index) ? "text-xs" : null
                        }`}
                      >
                        {data.sub_title}
                      </a>
                    ))}
                  </div>
                </li>
              </ul>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default HoverMac;
