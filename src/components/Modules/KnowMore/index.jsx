import React, { useRef, useState } from "react";
import EachUtils from "../../../utils/EachUtils";
import ContentLayout from "../../Layouts/ContentLayout";
import HeaderContent from "../../Layouts/HeaderContent";
import TitleContent from "../TitleContent";

import "swiper/css";
import "swiper/css/pagination";

import { CONTENT_1 } from "../../../constants/dataContent";
import { SwiperSlide, Swiper } from "swiper/react";
import { HiMiniPlusSmall } from "react-icons/hi2";
import { GrFormClose, GrFormNext, GrFormPrevious } from "react-icons/gr";

const KnowMore = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [selectModal, setSelectModal] = useState(null);

  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    setActiveSlide(swiperRef.current.swiper.activeIndex);
  };

  const handleOpenModal = (modalData) => {
    setSelectModal(modalData);
    document.getElementById("my_modal_4").showModal();
  };

  const handleCloseModal = () => {
    setSelectModal(null);
    document.getElementById("my_modal_4").close();
  };

  return (
    <EachUtils
      of={CONTENT_1}
      render={(item, index) => (
        <ContentLayout index={index}>
          <HeaderContent>
            <TitleContent tsz={"text-[56px]"}>{item.title}</TitleContent>
          </HeaderContent>
          <div className="max-w-full h-[680px] relative">
            <Swiper
              ref={swiperRef}
              slidesPerView={4}
              spaceBetween={30}
              initialSlide={1}
              centeredSlides={true}
              allowTouchMove={false}
              onSlideChange={handleSlideChange}
              className="mySwiper"
            >
              {item.cards.map((card, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="relative overflow-hidden rounded-3xl"
                    data-aos="fade-up"
                    data-aos-delay={`${index * 100}`}
                  >
                    <img
                      src={card.image_url}
                      alt={card.title_card_sh}
                      className="relative z-10 object-cover h-full w-full"
                    />
                    <div className="absolute z-20 top-0 left-0 text-white py-6 px-8">
                      <h3 className="text-base font-semibold mb-2">
                        {card.category}
                      </h3>
                      <h2 className="text-3xl font-semibold whitespace-pre-line">
                        {card.title_card}
                      </h2>
                    </div>
                    <div className="absolute bottom-4 right-4 flex items-center justify-center z-20">
                      <button
                        onClick={() => handleOpenModal(card)}
                        className="bg-[#333336] rounded-full cursor-pointer text-white"
                      >
                        <HiMiniPlusSmall size={40} />
                      </button>
                      <dialog
                        id="my_modal_4"
                        className="modal  backdrop-blur-lg pt-10"
                      >
                        {selectModal && (
                          <div className="modal-box w-11/12 max-w-7xl max-h-full px-24 py-16 bg-white">
                            <div>
                              <h3 className="text-lg font-semibold">
                                {selectModal.category}
                              </h3>
                              <h1 className="text-6xl font-semibold mt-4">
                                {selectModal.title_card_sh}
                              </h1>
                            </div>
                            {selectModal.modal_card.map((item, index) => (
                              <div
                                key={index}
                                className="mb-6 bg-content mt-16 rounded-3xl"
                              >
                                <div className="px-24 pt-16">
                                  <p className="text-[28px] leading-9 font-semibold text-justify">
                                    <span className="mr-2">
                                      {item.modal_card_title}
                                    </span>
                                    <span className="text-[#6e6e73]">
                                      {item.description}
                                    </span>
                                  </p>
                                </div>

                                <img
                                  src={item.img_modal_url}
                                  alt={item.modal_card_title}
                                  className="flex rounded-b-3xl mt-8"
                                />
                              </div>
                            ))}
                            <div className="absolute right-6 top-4">
                              <form method="dialog">
                                <button
                                  onClick={handleCloseModal}
                                  className="bg-[#1d1d1f] text-[#eaeaea] rounded-full hover:brightness-125"
                                >
                                  <GrFormClose size={40} />
                                </button>
                              </form>
                            </div>
                          </div>
                        )}
                      </dialog>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex justify-end pt-8 px-24 gap-6">
            <button
              onClick={() => swiperRef.current.swiper.slidePrev()}
              disabled={activeSlide === 1}
              className={`bg-[#E9E9EB] rounded-full ${
                activeSlide === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <GrFormPrevious size={35} />
            </button>
            <button
              onClick={() => swiperRef.current.swiper.slideNext()}
              disabled={activeSlide >= 4}
              className={`bg-[#E9E9EB] rounded-full ${
                activeSlide >= 4 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <GrFormNext size={35} />
            </button>
          </div>
        </ContentLayout>
      )}
    />
  );
};

export default KnowMore;
