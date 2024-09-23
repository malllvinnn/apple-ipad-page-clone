import React, { useState } from "react";
import EachUtils from "../../../utils/EachUtils";
import { CONTENT_4 } from "../../../constants/dataContent";
import ContentLayout from "../../Layouts/ContentLayout";
import HeaderContent from "../../Layouts/HeaderContent";
import TitleContent from "../TitleContent";

const Partner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <EachUtils
      of={CONTENT_4}
      render={(item, index) => (
        <ContentLayout index={index}>
          <HeaderContent>
            <TitleContent tsz={"text-[56px]"}>{item.title}</TitleContent>
          </HeaderContent>
          <div className="flex bg-content max-w-[1260px] h-[830px] mx-auto rounded-3xl">
            <div
              className="py-[120px] px-[90px] w-2/5"
              data-aos="fade-up"
              data-aos-delay={`200`}
            >
              {item.accordion.map((acc, index) => (
                <div key={index}>
                  <div className="collapse collapse-arrow">
                    <input
                      type="radio"
                      name="my-accordion-2"
                      checked={activeIndex === index}
                      onChange={() => setActiveIndex(index)}
                    />
                    <div className="collapse-title text-[28px] font-medium px-0">
                      {acc.sub_title}
                    </div>
                    <div className="collapse-content px-0">
                      <p className="text-[17px] leading-7">{acc.description}</p>
                    </div>
                  </div>
                  <hr className="bg-slate-300/50 h-[1px]" />
                </div>
              ))}
            </div>
            <div
              className="w-3/5 relative overflow-hidden flex items-center h-auto"
              data-aos="fade-up"
              data-aos-delay={`400`}
            >
              <div className="w-[1090px] h-[769px] absolute">
                <picture>
                  <img
                    src={item.accordion[activeIndex].img_url}
                    alt={item.accordion[activeIndex].sub_title}
                    className="object-cover h-auto w-auto"
                  />
                </picture>
              </div>
            </div>
          </div>
        </ContentLayout>
      )}
    />
  );
};

export default Partner;
