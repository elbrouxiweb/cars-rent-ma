import "./carsCatalogue.css";
import { cars } from "../../data/cars";
import { useTranslation } from "react-i18next";
import { FaUserFriends } from "react-icons/fa";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { MdSpeed } from "react-icons/md";
import { FaGasPump } from "react-icons/fa6";
import { useCurrency } from "../../context/CurrencyContext";

function CarsCatalogue() {
    const { t, i18n } = useTranslation();
    const { currency } = useCurrency();
    const isArabic = i18n.language === "ar";

    const formatPrice = (car: (typeof cars)[number]) => {
        if (currency === "MAD") {
            return `${car.priceMAD} DHS`;
        }

        return `${car.priceEUR}€`;
    };

    return (
        <section className={`cars ${isArabic ? "cars--rtl" : ""}`} id="cars">
            <div className="cars__container">
                <p className="cars__subtitle">{t("fleet.subtitle")}</p>

                <h2 className="cars__title">{t("fleet.title")}</h2>

                <p className="cars__description">{t("fleet.description")}</p>

                <div className="cars__grid">
                    {cars.map((car) => (
                        <article key={car.id} className="carCard">
                            <div className="carCard__imageWrapper">
                                <img src={car.image} alt={car.name} className="carCard__image" />
                            </div>

                            <div className="carCard__top">
                                <div className="carCard__titleBox">
                                    <h3 className="carCard__name">{car.name}</h3>
                                    <p className="carCard__category">{t(`carCategories.${car.category}`)}</p>
                                </div>

                                <div className="carCard__price">{formatPrice(car)}</div>
                            </div>

                            <div className="carCard__specs">
                                <div className="carCard__spec">
                                    <div className="carCard__icon">
                                        <FaUserFriends />
                                    </div>
                                    <span className="carCard__label">{t("fleet.seats")}</span>
                                    <strong className="carCard__value">{car.seats}</strong>
                                </div>

                                <div className="carCard__spec">
                                    <div className="carCard__icon">
                                        <PiSuitcaseSimpleFill />
                                    </div>
                                    <span className="carCard__label">{t("fleet.bags")}</span>
                                    <strong className="carCard__value">{car.bags}</strong>
                                </div>

                                <div className="carCard__spec">
                                    <div className="carCard__icon">
                                        <MdSpeed />
                                    </div>
                                    <span className="carCard__label">{t("fleet.transmission")}</span>
                                    <strong className="carCard__value">{car.transmission}</strong>
                                </div>

                                <div className="carCard__spec">
                                    <div className="carCard__icon">
                                        <FaGasPump />
                                    </div>
                                    <span className="carCard__label">{t("fleet.fuel")}</span>
                                    <strong className="carCard__value">{car.fuel}</strong>
                                </div>
                            </div>

                            <a
                                href="https://wa.me/212635261425"
                                target="_blank"
                                rel="noreferrer"
                                className="carCard__button"
                            >
                                {t("fleet.book")}
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CarsCatalogue;