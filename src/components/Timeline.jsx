import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Timeline() {
    // return (
    //     <section id="timeline">
    //         <h1 className="inshaallaah">Inshaallaah ...</h1>

    //         <div className="wrapper" data-aos="fade-up" data-aos-delay="100">
    //             <div className="content">
    //                 <h1>Naming Cermony</h1>
    //                 <h4>
    //                     On Saturday, 26<sup>th</sup> March, 2022.
    //                 </h4>
    //                 <h5>Time: 02:00 PM</h5>
    //                 <h2>Venue:</h2>
    //                 <h5>
    //                     KKB Function Hall,
    //                     <br /> AAS College Road, APHB Colony,
    //                     <br /> Adoni.
    //                 </h5>
    //             </div>
    //         </div>
    //     </section>
    // );
    return (
        <section id="timeline">
            <div className="location">
                <h1>
                    <FontAwesomeIcon icon={faLocationDot} className="icon" />
                    Location:
                </h1>
                <h1 className="place">
                    Masjid - Dargah Qutub-e-Adoni Hazrath Sayyid Shah Taher
                    Quadri (R.A.)
                </h1>
            </div>
            <h1 className="inshaallaah">Inshaallaah ...</h1>

            <div className="row">
                <div className="col-lg-6  left" data-aos="fade-down">
                    <h1 className="day-name">Day - 1</h1>
                    <h3>Tilawat-e-Qur'aan</h3>
                    <h3>Para: From 1 - 10</h3>
                    <h4>
                        On Friday, 22<sup>nd</sup> April, 2022.
                    </h4>
                    <h4>
                        20<sup>th</sup> Ramadan, 1443.
                    </h4>
                    <h5>Jama'at Time: 08:30 PM</h5>
                </div>
                <div className="col-lg-6 right"></div>
            </div>

            <div className="row">
                <div className="col-lg-6 left"></div>
                <div
                    className="col-lg-6 right"
                    data-aos="fade-down"
                    data-aos-delay="100"
                >
                    <h1 className="day-name">Day - 2</h1>
                    <h3>Tilawat-e-Qur'aan</h3>
                    <h3>Para: From 11 - 20</h3>
                    <h4>
                        On Satuday, 23<sup>rd</sup> April, 2022.
                    </h4>
                    <h4>
                        21<sup>st</sup> Ramadan, 1443.
                    </h4>
                    <h5>Jama'at Time: 08:30 PM</h5>
                </div>
            </div>

            <div className="row">
                <div
                    className="col-lg-6 left"
                    data-aos="fade-down"
                    data-aos-delay="200"
                >
                    <h1 className="day-name">Day - 3</h1>
                    <h3>Tilawat-e-Qur'aan</h3>
                    <h3>Para: From 21 - 30</h3>
                    <h4>
                        On Sunday, 24<sup>th</sup> April, 2022.
                    </h4>
                    <h4>
                        22<sup>nd</sup> Ramadan, 1443.
                    </h4>
                    <h5>Jama'at Time: 08:30 PM</h5>
                </div>
                <div className="col-lg-6 right"></div>
            </div>

            
        </section>
    );
}

export default Timeline;
