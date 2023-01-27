import React from "react";
import "./ContactForm.css";

import ContactImage from "../../../assets/ContactForm.jpg";

const ContactForm = () => {
  return (
    <div className="section">
      <div className="container grid-container contact-content">
        <div>
          <h1 className="heading-secondary">
            Get in <span>touch</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            ducimus magnam excepturi blanditiis qui laborum illum tenetur
            repudiandae rerum quaerat at impedit quo eius odit quasi accusamus
            officia eligendi consequuntur.
          </p>

          <img src={ContactImage} alt="get in touch" />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, non
            aut est iure corporis sed quis voluptate, nulla debitis aliquam ea
            inventore, quo dolores harum labore accusamus quod temporibus!
            Voluptatum!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos a
            voluptatum atque voluptatem. Laudantium dolorum nemo suscipit id
            ipsa nulla ipsum quam debitis magni delectus dolores veniam, natus
            vero magnam!
          </p>
          <br />
        </div>

        <div>
          <h1 className="heading-secondary">
            Message us<span> Anytime</span>
          </h1>
          <p>*We will reply back as soon as we can!</p>
          <form>
            <div className="form-field name-email">
              <div>
                <label>Name</label>
                <input type="text" name="name" />
              </div>

              <div>
                <label>Email</label>
                <input type="email" name="email" />
              </div>
            </div>

            <div className="form-field">
              <div>
                <label>Subject</label>
                <input type="text" name="subject" />
              </div>
            </div>

            <div className="form-field">
              <div>
                <label>Message</label>
                <textarea type="text" name="message" />
              </div>
            </div>
          </form>

          <button className="contact-button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
