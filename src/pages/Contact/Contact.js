import React from "react";

import MenuImage from "../../components/MenuImage/MenuImage";
import bgImage from "../../assets/ContactUs.jpg";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <div>
      <MenuImage
        bgImage={bgImage}
        heading={["Contact", <span> Us </span>]}
        text="We look forward to hearing from you!"
      />
      <ContactForm />
    </div>
  );
};

export default Contact;
