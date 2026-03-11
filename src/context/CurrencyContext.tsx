import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type Currency = "MAD" | "EUR";

type CurrencyContextType = {
    currency: Currency;
    setCurrency: (currency: Currency) => void;
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

function CurrencyProvider({ children }: { children: ReactNode }) {
    const [currency, setCurrency] = useState<Currency>("EUR");

    const value = useMemo(
        () => ({
            currency,
            setCurrency,
        }),
        [currency]
    );

    return (
        <CurrencyContext.Provider value={value}>
            {children}
        </CurrencyContext.Provider>
    );
}

function useCurrency() {
    const context = useContext(CurrencyContext);

    if (!context) {
        throw new Error("useCurrency must be used inside CurrencyProvider");
    }

    return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { CurrencyProvider, useCurrency };