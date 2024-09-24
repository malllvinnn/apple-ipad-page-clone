import React from "react";
import EachUtils from "../../../utils/EachUtils";
import { CONTENT_3 } from "../../../constants/dataContent";
import ContentLayout from "../../Layouts/ContentLayout";
import HeaderContent from "../../Layouts/HeaderContent";
import TitleContent from "../TitleContent";
import { GrFormNext } from "react-icons/gr";

const Accessories = () => {
  return (
    <EachUtils
      of={CONTENT_3}
      render={(item, index) => (
        <ContentLayout index={index} bg={"bg-content"} mt="mt-0" pb={"pb-5"}>
          <HeaderContent>
            <TitleContent tsz={"text-[56px]"}>{item.title}</TitleContent>
          </HeaderContent>
          <div className="max-w-full px-[90px] grid grid-cols-2 gap-5">
            {item.cards.map((card, index) => (
              <div
                key={index}
                className={`${
                  index === 1 ? "flex-col-reverse" : "flex-col"
                } bg-white flex justify-between rounded-3xl`}
                data-aos="fade-up"
                data-aos-delay={`${index * 200}`}
              >
                <div className="p-8">
                  <div
                    className={`${
                      index === 1 ? "pb-6" : "pt-6"
                    } flex flex-col items-center`}
                  >
                    <h3 className="text-[28px] font-semibold mb-3">
                      {card.card_title}
                    </h3>
                    <p className="text-[17px] mb-3">{card.description}</p>
                    <a
                      href={card.link_more}
                      className="flex items-center text-[17px] text-blue-700 hover:brightness-150"
                    >
                      <span>Selengkapnya</span>
                      <GrFormNext />
                    </a>
                  </div>
                </div>
                <picture className="px-8 overflow-hidden object-cover">
                  <img src={card.img_url} alt={card.card_title} />
                </picture>
              </div>
            ))}
          </div>
        </ContentLayout>
      )}
    />
  );
};

export default Accessories;
