import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../sections/HeroSection/HeroSection";
import HowItWorks from "../../sections/HowItWorks/HowItWorks.tsx";
import CarsCatalogue from "../../sections/CarsCatalogue/CarsCatalogue.tsx";
import CalculatePrice from "../../sections/CalculatePrice/CalculatePrice.tsx";
import Footer from "../../sections/Footer/Footer.tsx";
import ContactUs from "../../sections/ContactUs/ContactUs.tsx";

function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <HowItWorks />
            <CarsCatalogue/>
            <CalculatePrice />
            <ContactUs />
            <Footer />
        </>
    );
}

export default Home;