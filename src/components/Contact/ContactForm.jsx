import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vttui8c",
        "template_p83yoeu",
        form.current,
        "xRd4DEqPqBERaiCHZ"
      )
      .then(
        (result) => {
          alert("Email sent successfully!");
        },
        (error) => {
          alert("FAILED!" + error);
        }
      );
  };

  return (
    <div className="contact-form-wrap">
      <form ref={form} onSubmit={sendEmail}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-grp">
              <input type="text" name="name" placeholder="Name" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <input type="email" placeholder="Email" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <input type="text" placeholder="Your Number" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <input type="text" name="subject" placeholder="Subject" />
            </div>
          </div>
        </div>
        <div className="form-grp">
          <textarea
            name="message"
            placeholder="Write your message here"
          ></textarea>
        </div>
        <button type="submit" className="btn">
          Submit Now <span></span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
