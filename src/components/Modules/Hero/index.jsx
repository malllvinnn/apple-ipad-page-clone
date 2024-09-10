import ReactPlayer from "react-player";
import EachUtils from "../../../utils/EachUtils";

import { useState } from "react";
import { FaRegCirclePause, FaRegCirclePlay } from "react-icons/fa6";
import { WELLCOME } from "../../../constants/dataContent";

const Hero = () => {
  const [btnPlay, setBtnPlay] = useState(true);

  return (
    <EachUtils
      of={WELLCOME}
      render={(item, index) => (
        <section key={index} className="pt-[90px]">
          <div className="flex justify-between max-w-[1260px] h-[84px] mx-auto mb-20">
            <h1 className="text-[80px] font-bold flex items-center">
              {item.title}
            </h1>
            <h3 className="flex items-end text-[28px] pb-2 font-semibold">
              {item.sub_title}
            </h3>
          </div>
          <div className="max-w-[1260px] mx-auto relative overflow-hidden rounded-[40px]">
            <ReactPlayer
              url={item.video_url}
              muted={true}
              playing={btnPlay}
              loop={true}
              width={"1260px"}
              height={"100%"}
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
        </section>
      )}
    />
  );
};

export default Hero;
