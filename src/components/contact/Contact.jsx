import React from "react";

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
              <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>

                <div className="contact__info">
                   <div className="contact__card">
                     <i className="bx bxl-mail-send contact__card-icon"></i>

                     <h3 className="contact__card-title">Email</h3>
                     <span className="contact__card-data">user@gmail.com</span>

                     <a href="https://api.whatsapp.com/send?phone=622144087890&text=
                     Hello, more information!" className="contact__button">
                        Write me 
                        <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                     </a>
                   </div>

                   <div className="contact__card">
                     <i className="bx bxl-whatsapp contact__card-icon"></i>

                     <h3 className="contact__card-title">Whatsapp</h3>
                     <span className="contact__card-data">999-555-666</span>

                     <a href="https://m.me/lanbay" className="contact__button">
                        Write me 
                        <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                     </a>
                   </div>

                   <div className="contact__card">
                     <i className="bx bxl-messenger contact__card-icon"></i>

                     <h3 className="contact__card-title">Messenger</h3>
                     <span className="contact__card-data">user.fb199</span>

                     <a href="mailto:examplemail@gmail.com" className="contact__button">
                        Write me 
                        <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                     </a>
                   </div>
                </div>
              </div>
           

              <div className="contact__content">
                <h3 className="contact__title">Write me your project</h3>
              </div>
           </div>
        </section>
    )
}

export default Contact;