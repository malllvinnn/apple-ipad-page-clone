import React, { useRef, useState } from "react";
import EachUtils from "../../../utils/EachUtils";
import ContentLayout from "../../Layouts/ContentLayout";
import HeaderContent from "../../Layouts/HeaderContent";
import TitleContent from "../TitleContent";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { SwiperSlide, Swiper } from "swiper/react";
import { Grid } from "swiper/modules";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { CONTENT_2 } from "../../../constants/dataContent";

const Explore = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    setActiveSlide(swiperRef.current.swiper.activeIndex);
  };

  return (
    <EachUtils
      of={CONTENT_2}
      render={(item, index) => (
        <ContentLayout index={index} bg={"bg-content"} py={"py-[150px]"}>
          <HeaderContent>
            <TitleContent tsz={"text-[56px]"}>{item.title}</TitleContent>
            <div
              className="flex items-end pb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a
                href="#"
                className="flex items-center justify-center text-blue-700 hover:brightness-150"
              >
                <span className="text-[17px]">Bandingkan semua mode</span>
                <GrFormNext size={18} />
              </a>
            </div>
          </HeaderContent>
          <div className="">
            <Swiper
              ref={swiperRef}
              onSlideChange={handleSlideChange}
              slidesPerView={3.8}
              centeredSlides={true}
              initialSlide={1}
              allowTouchMove={false}
              grid={{
                rows: 1,
              }}
              spaceBetween={0}
              modules={[Grid]}
              className="mySwiper"
            >
              {item.device_types.map((device, index) => (
                <SwiperSlide key={index} className="relative -left-6">
                  <div
                    className="text-center"
                    data-aos="fade-up"
                    data-aos-delay={`${index * 100}`}
                  >
                    <div className="flex flex-col gap-8">
                      <div className="flex justify-center items-center">
                        <img
                          src={device.image_url}
                          alt={device.type}
                          className="h-[307px]"
                        />
                      </div>
                      <div className="flex justify-center items-center gap-1">
                        {device.colors.map((color, index) => (
                          <div
                            key={index}
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: color }}
                          ></div>
                        ))}
                      </div>
                      <div className="flex items-center justify-center">
                        <h3 className="text-[28px] font-bold">{device.type}</h3>
                      </div>
                    </div>
                    <div className="h-20 px-4">
                      <p className="text-[17px] mt-4">{device.description}</p>
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-8">
                      <a
                        href={device.link_more}
                        className="bg-blue-600 text-white px-4 py-2 flex justify-center items-center rounded-3xl hover:brightness-150"
                      >
                        Selengkapnya
                      </a>
                      <a
                        href={device.link_buy}
                        className="text-blue-600 px-4 py-2 flex justify-center items-center rounded-3xl hover:brightness-150"
                      >
                        <span>Beli</span>
                        <GrFormNext />
                      </a>
                    </div>
                    <hr className="h-[2px] my-16 bg-slate-300 w-full" />
                    {device.features.map((feature, index) => (
                      <div key={index}>
                        <div>
                          <h3 className="text-[28px] font-semibold">
                            {feature.tile}
                          </h3>
                          <div className="mt-4 h-28">
                            {feature.description.map((desc, index) => (
                              <p key={index} className="mt-2 text-xs px-24">
                                {desc}
                              </p>
                            ))}
                            {feature.alert_plus && (
                              <p className="px-8 text-xs mt-2 leading-4 opacity-50">
                                {feature.alert_message}
                              </p>
                            )}
                          </div>
                          <div className="flex flex-col justify-center items-center mt-8 text-xs">
                            <picture>
                              <img
                                src={feature.icon_chip_url}
                                alt={feature.chip}
                                className="h-[56px]"
                              />
                            </picture>
                            <h3 className="mt-3">{feature.chip}</h3>
                          </div>
                          <div className="flex flex-col justify-center items-center mt-8 text-xs">
                            <picture>
                              <img
                                src={feature.icon_camera_url}
                                alt={"camera"}
                                className="h-[56px]"
                              />
                            </picture>
                            {feature.camera.map((cam, index) => (
                              <h3 key={index} className="mt-3">
                                {cam}
                              </h3>
                            ))}
                          </div>
                          <div className="flex flex-col justify-center items-center mt-8 text-xs">
                            <picture>
                              <img
                                src={feature.icon_front_camera_url}
                                alt={"front camera"}
                                className="h-[56px]"
                              />
                            </picture>
                            <div className="h-16">
                              {feature.front_camera.map((fcam, index) => (
                                <h3 key={index} className="mt-3">
                                  {fcam}
                                </h3>
                              ))}
                            </div>
                          </div>
                          <div className="flex flex-col justify-center items-center mt-8 text-xs">
                            <picture>
                              <img
                                src={feature.icon_pencil_url}
                                alt={"pencil"}
                                className="h-[56px]"
                              />
                            </picture>
                            <div>
                              {feature.pencil.map((pen, index) => (
                                <h3 key={index} className="mt-3">
                                  {pen}
                                </h3>
                              ))}
                            </div>
                          </div>
                          <div className="flex flex-col justify-center items-center mt-8 text-xs">
                            <picture>
                              <img
                                src={feature.icon_keyboard_url}
                                alt={"keyboard"}
                                className="h-[56px]"
                              />
                            </picture>
                            <div>
                              <h3 className="mt-3">{feature.keyboard}</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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
              disabled={activeSlide >= 2}
              className={`bg-[#E9E9EB] rounded-full ${
                activeSlide >= 2 ? "opacity-50 cursor-not-allowed" : ""
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

export default Explore;
