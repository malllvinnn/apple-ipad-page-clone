import React from "react";
import HovernavLayout from "../../Layouts/HovernavLayout";
import EachUtils from "../../../utils/EachUtils";
import { LIST_NAVHOVER_IPAD } from "../../../constants/dataHeader";

const HoveriPad = () => {
  return (
    <HovernavLayout>
      <EachUtils
        of={LIST_NAVHOVER_IPAD}
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
                      [7, 8].includes(index) ? "text-xs" : null
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
    </HovernavLayout>
  );
};

export default HoveriPad;
