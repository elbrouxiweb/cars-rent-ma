import "./marqueeBrands.css";
import { brands } from "../../data/brands";

function MarqueeBrands() {
    const repeatedBrands = [...brands, ...brands];

    return (
        <div className="marquee">
            <div className="track">
                {repeatedBrands.map((brand, index) => (
                    <div className="brand-box" key={`${brand.id}-${index}`}>
                        <img src={brand.image} alt={brand.name} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MarqueeBrands;