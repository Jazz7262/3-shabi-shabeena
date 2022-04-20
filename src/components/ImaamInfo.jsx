import React from "react";

function ImaamInfo() {
    return (
        <section id="imaam-info">
            <h1 className="title-quote">Imaam</h1>

            <div className="wrapper">
                <div
                    className="content"
                    data-aos="zoom-in"
                    data-aos-offset="300"
                >
                    <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        data-ride="carousel"
                    >
                        <ol className="carousel-indicators">
                            <li
                                data-target="#carouselExampleIndicators"
                                data-slide-to="0"
                                className="active"
                            ></li>
                            <li
                                data-target="#carouselExampleIndicators"
                                data-slide-to="1"
                            ></li>
                            <li
                                data-target="#carouselExampleIndicators"
                                data-slide-to="2"
                            ></li>
                            <li
                                data-target="#carouselExampleIndicators"
                                data-slide-to="3"
                            ></li>
                            <li
                                data-target="#carouselExampleIndicators"
                                data-slide-to="4"
                            ></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="img-wrapper">
                                    <img
                                        className="imaam-img"
                                        src="../assets/images/1.jpg"
                                        alt="Imaam_img"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="img-wrapper">
                                    <img
                                        className="imaam-img"
                                        src="../assets/images/2.jpg"
                                        alt="Imaam_img"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="img-wrapper">
                                    <img
                                        className="imaam-img"
                                        src="../assets/images/3.jpg"
                                        alt="Imaam_img"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="img-wrapper">
                                    <img
                                        className="imaam-img"
                                        src="../assets/images/4.jpg"
                                        alt="Imaam_img"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="img-wrapper">
                                    <img
                                        className="imaam-img"
                                        src="../assets/images/5.jpg"
                                        alt="Imaam_img"
                                    />
                                </div>
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                    <div className="info">
                        <h5>Tarjuman-e-Quadriyat</h5>
                        <h3>
                            Hazrath Moulana Sayyid shah Rizwan Pasha Quadri
                            Al-Haidari Laubaali Sahab
                        </h3>

                        <h5>Raees-ul-Huffaz</h5>
                        <h5>Founder & President, The Qur'aan Academy</h5>
                        <h6>Hyderabad, Telangana.</h6>
                        <h5>Kurnool.</h5>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ImaamInfo;
