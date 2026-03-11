import { useTranslation } from "react-i18next";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaWhatsapp,
} from "react-icons/fa";
import "./contactUs.css";

function ContactUs() {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === "ar";

    return (
        <section
            className={`contactUs ${isArabic ? "contactUs--rtl" : ""}`}
            id="contact"
        >
            <div className="contactUs__container">
                <div className="contactUs__heading">
                    <p className="contactUs__subtitle">{t("contactSection.subtitle")}</p>
                    <h2 className="contactUs__title">{t("contactSection.title")}</h2>
                    <p className="contactUs__description">
                        {t("contactSection.description")}
                    </p>
                </div>

                <div className="contactUs__content">
                    <div className="contactUs__info">
                        <div className="contactUs__card">
              <span className="contactUs__icon">
                <FaPhoneAlt />
              </span>
                            <div>
                                <h3>{t("contactSection.phoneTitle")}</h3>
                                <a href="tel:+212635261425">+212 635261425</a>
                            </div>
                        </div>

                        <div className="contactUs__card">
              <span className="contactUs__icon">
                <FaEnvelope />
              </span>
                            <div>
                                <h3>{t("contactSection.emailTitle")}</h3>
                                <a href="mailto:contact@lionluxurycars.com">
                                    contact@lionluxurycars.com
                                </a>
                            </div>
                        </div>

                        <div className="contactUs__card">
              <span className="contactUs__icon">
                <FaMapMarkerAlt />
              </span>
                            <div>
                                <h3>{t("contactSection.addressTitle")}</h3>
                                <p>{t("contactSection.addressValue")}</p>
                            </div>
                        </div>

                        <a
                            href="https://wa.me/212635261425"
                            target="_blank"
                            rel="noreferrer"
                            className="contactUs__whatsapp"
                        >
                            <FaWhatsapp />
                            <span>{t("contactSection.whatsapp")}</span>
                        </a>
                    </div>

                    <div className="contactUs__mapBox">
                        <div className="contactUs__mapHeader">
                            <h3 className="contactUs__mapTitle">
                                {t("contactSection.mapTitle")}
                            </h3>
                            <p className="contactUs__mapText">
                                {t("contactSection.mapDescription")}
                            </p>
                        </div>

                        <div className="contactUs__mapWrapper">
                            <iframe
                                title="Lion Luxury Cars Location"
                                src="https://www.google.com/maps?q=Fkih%20Ben%20Salah%2C%20Morocco&z=13&output=embed"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            ></iframe>
                        </div>

                        <a
                            className="contactUs__mapButton"
                            href="https://www.google.com/maps/search/?api=1&query=Fkih+Ben+Salah+Morocco"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {t("contactSection.openMap")}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;