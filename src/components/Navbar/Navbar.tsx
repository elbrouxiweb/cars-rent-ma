import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useCurrency } from "../../context/CurrencyContext";
import "./navbar.css";

function Navbar() {
    const { t, i18n } = useTranslation();
    const { currency, setCurrency } = useCurrency();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);

        if (lang === "ar") {
            document.documentElement.dir = "rtl";
            document.documentElement.lang = "ar";
        } else {
            document.documentElement.dir = "ltr";
            document.documentElement.lang = lang;
        }
    };

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 18);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
                <div className="navbar__inner">
                    <div className="navbar__logo">
                        <img src="/src/assets/icons/logo.png" alt="Lion Luxury Cars" />
                    </div>

                    <nav className="navbar__links">
                        <a href="#cars">{t("nav.cars")}</a>
                        <a href="#contact">{t("nav.contact")}</a>
                    </nav>

                    <div className="navbar__actions">
                        <div className="navbar__selectWrapper">
                            <span className="navbar__icon">🌐</span>
                            <select
                                className="navbar__select"
                                value={i18n.language || "en"}
                                onChange={(e) => changeLanguage(e.target.value)}
                            >
                                <option value="en">EN</option>
                                <option value="fr">FR</option>
                                <option value="ar">AR</option>
                            </select>
                        </div>

                        <div className="navbar__selectWrapper">
                            <span className="navbar__icon">💶</span>
                            <select
                                className="navbar__select"
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value as "MAD" | "EUR")}
                            >
                                <option value="EUR">EUR</option>
                                <option value="MAD">MAD</option>
                            </select>
                        </div>

                        <a className="navbar__phone" href="tel:+212635261425">
                            <span className="navbar__phoneIcon">☎</span>
                            <span>+212 635261425</span>
                        </a>
                    </div>

                    <button
                        className="navbar__hamburger"
                        onClick={() => setIsMenuOpen(true)}
                        aria-label="Open mobile menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            <div
                className={`mobile-menu-overlay ${
                    isMenuOpen ? "mobile-menu-overlay--open" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
            >
                <aside
                    className={`mobile-menu ${isMenuOpen ? "mobile-menu--open" : ""}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="mobile-menu__header">
                        <div className="mobile-menu__logo">
                            <img src="/src/assets/icons/logo.png" alt="Lion Luxury Cars" />
                        </div>

                        <button
                            className="mobile-menu__close"
                            onClick={() => setIsMenuOpen(false)}
                            aria-label="Close mobile menu"
                        >
                            ×
                        </button>
                    </div>

                    <nav className="mobile-menu__links">
                        <a href="#cars" onClick={() => setIsMenuOpen(false)}>
                            {t("nav.cars")}
                        </a>
                        <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                            {t("nav.contact")}
                        </a>
                    </nav>

                    <div className="mobile-menu__switchers">
                        <div className="mobile-menu__group">
                            <label>{t("nav.language")}</label>
                            <div className="mobile-menu__selectWrapper">
                                <span>🌐</span>
                                <select
                                    value={i18n.language || "en"}
                                    onChange={(e) => changeLanguage(e.target.value)}
                                >
                                    <option value="en">EN</option>
                                    <option value="fr">FR</option>
                                    <option value="ar">AR</option>
                                </select>
                            </div>
                        </div>

                        <div className="mobile-menu__group">
                            <label>{t("nav.currency")}</label>
                            <div className="mobile-menu__selectWrapper">
                                <span>💶</span>
                                <select
                                    value={currency}
                                    onChange={(e) => setCurrency(e.target.value as "MAD" | "EUR")}
                                >
                                    <option value="EUR">EUR</option>
                                    <option value="MAD">MAD</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="mobile-menu__socials">
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            Instagram
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            Facebook
                        </a>
                        <a
                            href="https://wa.me/212635261425"
                            target="_blank"
                            rel="noreferrer"
                        >
                            WhatsApp
                        </a>
                    </div>
                </aside>
            </div>
        </>
    );
}

export default Navbar;