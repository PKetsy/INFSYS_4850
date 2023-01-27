import React from "react";
import "./AboutInfo.css";

const AboutInfo = () => {
  return (
    <div className="section">
      <div className="container-grid-container">
        <div className="about-info-content">
          <h2 className="heading-secondary">
            A few words <span>about us!</span>
          </h2>
          <h4>Let us introduce ourselves</h4>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
            atque voluptas, repellat impedit exercitationem similique deleniti
            earum hic rerum placeat molestiae sint. Optio, minima voluptatum
            nemo ratione temporibus numquam aliquid.
          </p>
          <blockquote>Testing Testing Testing</blockquote>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            dolore ratione nemo. Alias, ipsam amet, porro beatae magni incidunt
            nostrum, quam illo dignissimos modi deleniti sit rem molestias sint
            temporibus?
          </p>
        </div>

        <div className="about-info-content">
          <h2 className="heading-secondary">
            Always the <span>best quality</span>
          </h2>
          <h4>We hope to see you soon!</h4>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
            atque voluptas, repellat impedit exercitationem similique deleniti
            earum hic rerum placeat molestiae sint. Optio, minima voluptatum
            nemo ratione temporibus numquam aliquid.
          </p>
          <blockquote>Testing Testing Testing</blockquote>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            dolore ratione nemo. Alias, ipsam amet, porro beatae magni incidunt
            nostrum, quam illo dignissimos modi deleniti sit rem molestias sint
            temporibus?
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
