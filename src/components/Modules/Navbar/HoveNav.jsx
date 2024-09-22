import React from "react";

import HovernavLayout from "../../Layouts/HovernavLayout";
import Mac from "./Hover/Mac";
import IPad from "./Hover/IPad";
import IPhone from "./Hover/IPhone";
import Watch from "./Hover/Watch";
import AirPods from "./Hover/AirPods";
import TV from "./Hover/TV";
import Hiburan from "./Hover/Huburan";
import Dukungan from "./Hover/Dukungan";
import Membeli from "./Hover/Membeli";

const HoveNav = ({ index }) => {
  return (
    <HovernavLayout>
      {[0].includes(index) && <Mac />}
      {[1].includes(index) && <IPad />}
      {[2].includes(index) && <IPhone />}
      {[3].includes(index) && <Watch />}
      {[4].includes(index) && <AirPods />}
      {[5].includes(index) && <TV />}
      {[6].includes(index) && <Hiburan />}
      {[7].includes(index) && <Dukungan />}
      {[8].includes(index) && <Membeli />}
    </HovernavLayout>
  );
};

export default HoveNav;
