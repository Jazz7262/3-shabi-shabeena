import React from "react";
import Bismillah from "../images/bismillah.png";

function PraisingContent() {
    return (
        <section id="praising-content">
            <img
                src={Bismillah}
                alt="bismillah"
                className="poster"
            />

            <h3>Under the spirutual patronage of: </h3>

            <h3>
                Qutu-e-Adoni Qutub-ud-Dawaayir Ashraf-ul-Ma'aasir
                Sayyid-e-Barhaq Hazrath Sayyid Shah Taher Quadri, Al-Hamavi
                Rahamatullaahi Alaih.
            </h3>
        </section>
    );
}

export default PraisingContent;
