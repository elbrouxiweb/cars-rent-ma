import { useTranslation } from "react-i18next";
import { heroCars } from "../../data/heroCars";
import { useEffect, useMemo, useState } from "react";
import MarqueeBrands from "../../components/MarqueeBrands/MarqueeBrands";
import "./heroSection.css";

function HeroSection() {
    const { t, i18n } = useTranslation();
    const [index, setIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const isArabic = i18n.language === "ar";

    const currentCar = useMemo(() => heroCars[index], [index]);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false);

            setTimeout(() => {
                setIndex((prev) => (prev + 1) % heroCars.length);
                setIsVisible(true);
            }, 320);
        }, 3800);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero-section-wrapper">
            <section className={`hero ${isArabic ? "hero--rtl" : ""}`}>
                <div className="hero__left">
                    <p className="hero__badge">{t("hero.badge")}</p>

                    <h1 className="hero__title">
                        {t("hero.title1")}
                        <br />
                        <span>{t("hero.title2")}</span>
                        <br />
                        {t("hero.title3")}
                    </h1>

                    <p className="hero__description">{t("hero.description")}</p>

                    <a
                        className="hero__button"
                        href="https://wa.me/212635261425"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="hero__buttonIcon">💬</span>
                        <span>{t("hero.button")}</span>
                    </a>
                </div>

                <div className="hero__right">
                    <div className="hero__carStage">
                        <img
                            className={`hero__carImage ${
                                isVisible ? "hero__carImage--visible" : "hero__carImage--hidden"
                            }`}
                            src={currentCar.image}
                            alt={currentCar.name}
                        />
                    </div>
                </div>
            </section>

            <div className="hero__features">
                <div>{t("features.fast")}</div>
                <div>{t("features.support")}</div>
                <div>{t("features.vehicles")}</div>
            </div>

            <MarqueeBrands />
        </section>
    );
}

export default HeroSection;





// import { useTranslation } from "react-i18next";
// import { heroCars } from "../../data/heroCars";
// import { useEffect, useState } from "react";
// import MarqueeBrands from "../../components/MarqueeBrands/MarqueeBrands";
// import "./heroSection.css";
//
// function HeroSection() {
//     const { t, i18n } = useTranslation();
//     const [index, setIndex] = useState(0);
//
//     useEffect(() => {
//         const slider = setInterval(() => {
//             setIndex((prev) => (prev + 1) % heroCars.length);
//         }, 3000);
//
//         return () => clearInterval(slider);
//     }, []);
//
//     const car = heroCars[index];
//     const isArabic = i18n.language === "ar";
//
//     return (
//         <section className="hero-section-wrapper">
//             <section className={`hero ${isArabic ? "hero--rtl" : ""}`}>
//                 <div className="hero__left">
//                     <p className="hero__badge">{t("hero.badge")}</p>
//
//                     <h1 className="hero__title">
//                         {t("hero.title1")}
//                         <br />
//                         <span>{t("hero.title2")}</span>
//                         <br />
//                         {t("hero.title3")}
//                     </h1>
//
//                     <p className="hero__description">{t("hero.description")}</p>
//
//                     <a
//                         className="hero__button"
//                         href="https://wa.me/212635261425"
//                         target="_blank"
//                         rel="noreferrer"
//                     >
//                         {t("hero.button")}
//                     </a>
//                 </div>
//
//                 <div className="hero__right">
//                     <img src={car.image} alt={car.name} />
//                 </div>
//             </section>
//
//             <div className="hero__features">
//                 <div>Fast response</div>
//                 <div>24/7 WhatsApp Support</div>
//                 <div>100+ vehicles</div>
//             </div>
//
//             <MarqueeBrands />
//         </section>
//     );
// }
//
// export default HeroSection;