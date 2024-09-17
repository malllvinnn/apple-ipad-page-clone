import React from "react";
import {
  AUTHOR,
  FOOTER_LIST,
  FOOTNOTE_LIST,
  PRIVASI,
} from "../../../constants/dataFooter";
import { FaApple } from "react-icons/fa6";
import { GrFormNext } from "react-icons/gr";
import EachUtils from "../../../utils/EachUtils";

const Footer = () => {
  return (
    <footer className="pt-4 bg-content">
      <div className="w-[980px] mx-auto px-[22px]">
        <ul className="flex flex-col gap-2 opacity-70 relative left-3 pr-3">
          {FOOTNOTE_LIST.map((item, index) => (
            <li key={index} className="list-decimal text-xs text-justify">
              <span className="mr-2">{item}</span>
              {[1].includes(index) && (
                <a
                  href="#"
                  className="underline underline-offset-2 text-black/100"
                >
                  apple.com/id/ipad/cellular
                </a>
              )}
            </li>
          ))}
        </ul>
        <div className="text-xs opacity-70 flex flex-col gap-2 mt-2">
          <p>
            Aplikasi tersedia di App Store. Ketersediaan judul dapat berubah
            sewaktu-waktu.
          </p>
          <p>&quot;Lunch&quot; ciptaan Malvin Ndo</p>
        </div>
        <div className="divider h-[1px] bg-black/10"></div>
        <nav>
          <div className="flex items-center">
            <FaApple size={15} className="opacity-80" />
            <GrFormNext size={20} className="opacity-50" />
            <span className="text-xs opacity-70">iPad</span>
          </div>
        </nav>
        <nav>
          <div className="grid grid-cols-4 text-xs">
            <EachUtils
              of={FOOTER_LIST}
              render={(item, index) => (
                <div key={index} className="h-auto">
                  <h3 className="font-medium mt-4">{item.title}</h3>
                  <ul className="mt-2 flex flex-col gap-2">
                    {item.list.map((li, index) => (
                      <li key={index}>
                        <a href={li.link_url} className="opacity-70">
                          {li.sub_title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            />
          </div>
          <div className="pt-9 text-xs">
            <a href="#" className="text-blue-700 underline underline-offset-1">
              Temukan retailer
            </a>{" "}
            <span className="opacity-70">di dekat Anda.</span>
          </div>
        </nav>
        <div className="divider h-[1px] bg-black/10"></div>
        <div className="flex text-xs justify-between opacity-70 pb-4">
          <EachUtils
            of={AUTHOR}
            render={(item, index) => (
              <div key={index}>
                <span>{item.description}</span> <span>{item.author_name}</span>
              </div>
            )}
          />

          <ul className="flex">
            <EachUtils
              of={PRIVASI}
              render={(item, index) => (
                <li key={index}>
                  <a href={item.link_url}>{item.res}</a>
                  {[0, 1, 2].includes(index) && <span className="mx-2">|</span>}
                </li>
              )}
            />
          </ul>

          <span>Bahasa Indonesia</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
