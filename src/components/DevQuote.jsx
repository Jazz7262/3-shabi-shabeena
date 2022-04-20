import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function DevQuote() {
    return (
        <section id="dev-quote">
            <div className="inner-content">
                <h3>
                    The recitation of the Qur'an by Hazrath soothes and melt
                    your heart. And You will fall in love with the Qur'aan when
                    you hear the Hazrath's resound of Maddah and Gunnah in the
                    four walls of the Masjid....
                </h3>
                <div className="left-align">
                    <h1>
                        --- Dev{" "}
                        <FontAwesomeIcon icon={faHeart} />
                    </h1>
                </div>
            </div>
        </section>
    );
}

export default DevQuote;
