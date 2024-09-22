import React from "react";
import EachUtils from "../../../../utils/EachUtils";
import { LIST_NAVHOVER_TV } from "../../../../constants/dataHeader";

const TV = () => {
  return (
    <EachUtils
      of={LIST_NAVHOVER_TV}
      render={(item, index) => (
        <ul
          key={index}
          className={`${[0].includes(index) ? "w-3/5 mr-4" : "w-full"}`}
        >
          <li className="pt-12 font-medium">
            <h3 className="text-xs opacity-70">{item.title}</h3>
            <div
              className={`flex flex-col mt-4 ${
                index === Array.length - 0 ? "text-sm" : "text-2xl"
              }`}
            >
              {item.data_list.map((data, index) => (
                <a key={index} href={data.link_url} className={`mb-2`}>
                  {data.sub_title}
                </a>
              ))}
            </div>
          </li>
        </ul>
      )}
    />
  );
};

export default TV;
