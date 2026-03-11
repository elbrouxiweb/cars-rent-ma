import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { cars } from "../../data/cars";
import { useCurrency } from "../../context/CurrencyContext";
import "./calculatePrice.css";

type PackKey = "short" | "medium" | "long";

function CalculatePrice() {
    const { t, i18n } = useTranslation();
    const { currency, setCurrency } = useCurrency();
    const isArabic = i18n.language === "ar";

    const [selectedCarId, setSelectedCarId] = useState<number>(cars[0].id);
    const [selectedPack, setSelectedPack] = useState<PackKey>("short");

    const selectedCar = useMemo(() => {
        return cars.find((car) => car.id === selectedCarId) || cars[0];
    }, [selectedCarId]);

    const dailyPrice = selectedCar.pricing[selectedPack][currency];
    const currencyLabel = currency === "MAD" ? "DHS" : "€";

    const whatsappMessage = encodeURIComponent(
        `Hello, I want to confirm this price:
Car: ${selectedCar.name}
Package: ${selectedPack}
Price per day: ${dailyPrice} ${currencyLabel}`
    );

    return (
        <section
            className={`calculatePrice ${isArabic ? "calculatePrice--rtl" : ""}`}
            id="calculator"
        >
            <div className="calculatePrice__container">
                <h2 className="calculatePrice__title">{t("calculator.title")}</h2>
                <p className="calculatePrice__subtitle">{t("calculator.subtitle")}</p>

                <div className="calculatePrice__box">
                    <div className="calculatePrice__section">
                        <h3 className="calculatePrice__sectionTitle">
                            {t("calculator.step1")}
                        </h3>

                        <div className="calculatePrice__selectRow">
                            <select
                                className="calculatePrice__select"
                                value={selectedCarId}
                                onChange={(e) => setSelectedCarId(Number(e.target.value))}
                            >
                                {cars.map((car) => (
                                    <option key={car.id} value={car.id}>
                                        {car.name} ({car.transmission}, {car.fuel})
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="calculatePrice__section">
                        <h3 className="calculatePrice__sectionTitle">
                            {t("calculator.step2")}
                        </h3>

                        <div className="calculatePrice__packs">
                            <button
                                className={`calculatePrice__pack ${
                                    selectedPack === "short" ? "calculatePrice__pack--active" : ""
                                }`}
                                onClick={() => setSelectedPack("short")}
                                type="button"
                            >
                <span className="calculatePrice__packTitle">
                  {t("calculator.shortTitle")}
                </span>
                                <span className="calculatePrice__packLabel">
                  {t("calculator.shortLabel")}
                </span>
                            </button>

                            <button
                                className={`calculatePrice__pack ${
                                    selectedPack === "medium"
                                        ? "calculatePrice__pack--active"
                                        : ""
                                }`}
                                onClick={() => setSelectedPack("medium")}
                                type="button"
                            >
                <span className="calculatePrice__packTitle">
                  {t("calculator.mediumTitle")}
                </span>
                                <span className="calculatePrice__packLabel">
                  {t("calculator.mediumLabel")}
                </span>
                            </button>

                            <button
                                className={`calculatePrice__pack ${
                                    selectedPack === "long" ? "calculatePrice__pack--active" : ""
                                }`}
                                onClick={() => setSelectedPack("long")}
                                type="button"
                            >
                <span className="calculatePrice__packTitle">
                  {t("calculator.longTitle")}
                </span>
                                <span className="calculatePrice__packLabel">
                  {t("calculator.longLabel")}
                </span>
                            </button>
                        </div>
                    </div>

                    <div className="calculatePrice__section">
                        <div className="calculatePrice__bottomTop">
                            <h3 className="calculatePrice__sectionTitle">
                                {t("calculator.step3")}
                            </h3>

                            <div className="calculatePrice__currency">
                                <button
                                    type="button"
                                    className={`calculatePrice__currencyBtn ${
                                        currency === "MAD"
                                            ? "calculatePrice__currencyBtn--active"
                                            : ""
                                    }`}
                                    onClick={() => setCurrency("MAD")}
                                >
                                    MAD
                                </button>

                                <button
                                    type="button"
                                    className={`calculatePrice__currencyBtn ${
                                        currency === "EUR"
                                            ? "calculatePrice__currencyBtn--active"
                                            : ""
                                    }`}
                                    onClick={() => setCurrency("EUR")}
                                >
                                    EUR
                                </button>
                            </div>
                        </div>

                        <div className="calculatePrice__priceBlock">
                            <p className="calculatePrice__priceLabel">
                                {t("calculator.pricePerDay")}
                            </p>

                            <div className="calculatePrice__priceLine">
                <span className="calculatePrice__priceValue">
                  {dailyPrice} {currencyLabel}
                </span>
                                <span className="calculatePrice__perDay">
                  {t("calculator.perDay")}
                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <a
                    href={`https://wa.me/212635261425?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="calculatePrice__whatsapp"
                >
                    {t("calculator.confirmWhatsapp")}
                </a>

                <h3 className="calculatePrice__insuranceTitle">
                    {t("calculator.insuranceTitle")}
                </h3>
            </div>
        </section>
    );
}

export default CalculatePrice;