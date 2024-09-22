import React from "react";
import { LIST_NAVHOVER_DUKUNGAN } from "../../../../constants/dataHeader";
import EachUtils from "../../../../utils/EachUtils";

const Dukungan = () => {
  return (
    <EachUtils
      of={LIST_NAVHOVER_DUKUNGAN}
      render={(item, index) => (
        <ul
          key={index}
          className={`${[0, 1].includes(index) ? "w-1/3" : "w-full"}`}
        >
          <li className="pt-12 font-medium">
            <h3 className="text-xs opacity-70">{item.title}</h3>
            <div
              className={`flex flex-col mt-4 ${
                index === 0 ? "text-2xl" : "text-sm"
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

export default Dukungan;
