import ReactPlayer from "react-player";
import EachUtils from "../../../utils/EachUtils";
import ContentLayout from "../../Layouts/ContentLayout";

import { useState } from "react";
import { FaRegCirclePause, FaRegCirclePlay } from "react-icons/fa6";
import { WELLCOME } from "../../../constants/dataContent";
import HeaderContent from "../../Layouts/HeaderContent";
import TitleContent from "../TitleContent";

const Hero = () => {
  const [btnPlay, setBtnPlay] = useState(true);

  return (
    <EachUtils
      of={WELLCOME}
      render={(item, index) => (
        <ContentLayout index={index}>
          <HeaderContent>
            <TitleContent tsz={"text-[80px]"}>{item.title}</TitleContent>
            <h3
              className="flex items-end text-[28px] pb-2 font-semibold"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {item.sub_title}
            </h3>
          </HeaderContent>
          <div
            className="max-w-[1260px] mx-auto relative overflow-hidden rounded-[40px]"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <ReactPlayer
              url={item.video_url}
              muted={true}
              playing={btnPlay}
              loop={true}
              width={"1260px"}
              height={"80%"}
            />
            <div className="absolute bottom-8 right-12">
              <button
                className=" text-slate-400 rounded-full cursor-pointer"
                onClick={() => setBtnPlay(!btnPlay)}
              >
                {btnPlay ? (
                  <FaRegCirclePause size={45} />
                ) : (
                  <FaRegCirclePlay size={45} />
                )}
              </button>
            </div>
          </div>
        </ContentLayout>
      )}
    />
  );
};

export default Hero;
