import React from "react";
import "../contact/contact-content.css";
import {
  MailOutlined,
  PhoneOutlined,
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const ContactContent = () => {
  return (
    <section className="container container_contact_content">
      <h1 className="contact_title">Contactez-nous !</h1>
      <p className="contact_us">
        Par e-mail : Jeremy.vaneste@free.fr
        <MailOutlined className="icon_item"></MailOutlined>
      </p>
      <p className="contact_us">
        Par téléphone : 06-95-77-54-63{" "}
        <PhoneOutlined className="icon_item"></PhoneOutlined>
      </p>
      <h4 className="join_us_title">Rejoignez-nous sur les réseaux</h4>

      <ul className="container_socials">
        <li className="social_item">
          <FacebookOutlined></FacebookOutlined>
        </li>
        <li className="social_item">
          <TwitterOutlined></TwitterOutlined>
        </li>
        <li className="social_item">
          <YoutubeOutlined></YoutubeOutlined>
        </li>
      </ul>
    </section>
  );
};

export default ContactContent;
