import React from "react";
import ContentLayout from "../../Layouts/ContentLayout";
import HeaderContent from "../../Layouts/HeaderContent";
import TitleContent from "../TitleContent";
import EachUtils from "../../../utils/EachUtils";
import { CONTENT_5 } from "../../../constants/dataContent";

const More = () => {
  return (
    <EachUtils
      of={CONTENT_5}
      render={(item, index) => (
        <ContentLayout
          index={index}
          bg={"bg-gradient-to-b from-[#F5F5F7] to-white"}
          py={"py-[150px]"}
        >
          <HeaderContent>
            <TitleContent tsz={"text-[48px]"}>{item.title}</TitleContent>
          </HeaderContent>
          <div className="max-w-[1260px] mx-auto flex">
            <div className="w-[333px] mr-[88px]">
              <h3 className="text-xs opacity-70 mb-5">Jelajahi iPad</h3>
              <ul className="flex flex-col gap-4">
                {item.explore.map((exp, index) => (
                  <li key={index}>
                    <a
                      href={exp.link_url}
                      className={`${
                        [7, 8].includes(index) ? "text-sm" : "text-[28px]"
                      } font-medium hover:brightness-200`}
                    >
                      {exp.sub_title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs opacity-70 mb-[14px]">
                Lainnya dari iPad
              </h3>
              <ul className="flex flex-col gap-2">
                {item.mores.map((more, index) => (
                  <li key={index}>
                    <a
                      href={more.link_url}
                      className="text-sm font-medium hover:brightness-200"
                    >
                      {more.sub_title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ContentLayout>
      )}
    />
  );
};

export default More;
