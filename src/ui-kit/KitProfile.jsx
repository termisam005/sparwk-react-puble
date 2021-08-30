import React from "react";
import ImgComponent from "../components/common/ImgComponent";

export default function KitProfile() {
    return (
        <div className="wrap_grad">
            <div className="container">

                <section className="demo_title">
                    <h1>Profile Thumb</h1>
                </section>

                <section className="demo_line alcent">
                    <div className="p-30 m-r-30">
                        <div className="prof_shadow120">
                            <p className="prof none c120">
                                <img src="../resources/images/prof_head_120.png" alt="headset" />
                            </p>
                        </div>
                    </div>
                    <div className="p-30 m-r-30">
                        <p className="prof none c32">
                            <img src="../resources/images/prof_head_32.png" alt="headset" />
                        </p>
                    </div>
                    <div className="p-30 m-r-30">
                        <p className="prof none c50">
                            <img src="../resources/images/prof_head_50.png" alt="headset" />
                        </p>
                    </div>
                    <div className="p-30 m-r-30">
                        <div className="prof_wrap">
                            <span className="coming"></span>
                            <p className="prof norm c40">
                                <img src="../resources/images/prof_head_40.png" alt="headset" />
                            </p>
                        </div>
                    </div>
                    <div className="p-30">
                        <div className="prof_wrap">
                            <p className="prof norm line c40">
                                <img src="../resources/images/prof_head_40.png" alt="headset" />
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}