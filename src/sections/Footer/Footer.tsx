import { useTranslation } from "react-i18next";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./footer.css";

function Footer() {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === "ar";

    const currentYear = new Date().getFullYear();

    return (
        <footer className={`footer ${isArabic ? "footer--rtl" : ""}`} id="contact">
            <div className="footer__container">
                <div className="footer__top">
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <img src="/src/assets/icons/logo.png" alt="Lion Luxury Cars" />
                        </div>

                        <p className="footer__description">
                            {t("footer.description")}
                        </p>

                        <div className="footer__socials">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="https://wa.me/212635261425"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>

                    <div className="footer__links">
                        <h3>{t("footer.quickLinks")}</h3>

                        <a href="#cars">{t("footer.cars")}</a>
                        <a href="#contact">{t("footer.contact")}</a>
                        <a href="#calculator">{t("footer.calculator")}</a>
                    </div>

                    <div className="footer__contact">
                        <h3>{t("footer.contact")}</h3>

                        <div className="footer__contactItem">
              <span className="footer__contactIcon">
                <FaPhoneAlt />
              </span>
                            <div>
                                <p>{t("footer.phone")}</p>
                                <a href="tel:+212635261425">+212 635261425</a>
                            </div>
                        </div>

                        <div className="footer__contactItem">
              <span className="footer__contactIcon">
                <FaEnvelope />
              </span>
                            <div>
                                <p>{t("footer.email")}</p>
                                <a href="mailto:contact@lionluxurycars.com">
                                    contact@lionluxurycars.com
                                </a>
                            </div>
                        </div>

                        <div className="footer__contactItem">
              <span className="footer__contactIcon">
                <FaMapMarkerAlt />
              </span>
                            <div>
                                <p>{t("footer.address")}</p>
                                <span>{t("footer.addressValue")}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>
                        © {currentYear} Rent Luxury Cars. All rights reserved.
                    </p>

                    <p>Designed & developed by ElbrouxiWeb</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;