import React from "react";

import MenuImage from "../../components/MenuImage/MenuImage";
import bgImage from "../../assets/MenuBg.jpg";
import DeliveryInfo from "./DeliveryInfo/DeliveryInfo";

const Delivery = () => {
  return (
    <div>
      {" "}
      <MenuImage
        bgImage={bgImage}
        heading={["We", <span> DELIVER</span>]}
        text="Service is available Mon - Fri, 7am - 5pm."
      />
      <DeliveryInfo />
    </div>
  );
};

export default Delivery;
