import { useTranslation } from "react-i18next";
import "./howItWorks.css";

function HowItWorks() {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === "ar";

    return (
        <section className={`howItWorks ${isArabic ? "howItWorks--rtl" : ""}`}>
            <div className="howItWorks__container">
                <p className="howItWorks__subtitle">
                    {t("howItWorks.subtitle")}
                </p>

                <h2 className="howItWorks__title">
                    {t("howItWorks.title")}
                </h2>

                <div className="howItWorks__grid">
                    <div className="howItWorks__card">
                        <h3 className="howItWorks__step">
                            <span>01.</span> {t("howItWorks.step1Title")}
                        </h3>

                        <p>{t("howItWorks.step1Desc")}</p>
                    </div>

                    <div className="howItWorks__card">
                        <h3 className="howItWorks__step">
                            <span>02.</span> {t("howItWorks.step2Title")}
                        </h3>

                        <p>{t("howItWorks.step2Desc")}</p>
                    </div>

                    <div className="howItWorks__card">
                        <h3 className="howItWorks__step">
                            <span>03.</span> {t("howItWorks.step3Title")}
                        </h3>

                        <p>{t("howItWorks.step3Desc")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;