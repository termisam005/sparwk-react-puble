import { Link } from "react-router-dom";
import { useState } from "react";
import DemoNav from "./DemoNav";
import Fixmenu from "./Fixmenu";
import Grmessage from "./Grmessage";
import ProfComponent from "../common/ProfComponent";
import CircleCont from "../common/CircleCont";

export default function Header() {
    // const [isMessage, setMessage] = useState(false);
    // const onMess = () => {
    //     setMessage(!isMessage);
    // }

    const [circleCont, setCircleCont] = useState(false);
    const circleOn = () => {
        setCircleCont(true);
    }
    const circleOff = () => {
        setCircleCont(false);
    }

    return (
        <header>

            <div className="header_line">

                <section className="header_left">
                    <h1 className="hd_logo">
                        <Link to="/DemoMain" title="Sparwk">
                            <img src="../resources/images/logo.png" alt="Sparwk" />
                        </Link>
                    </h1>
                    {/* <DemoNav /> */}
                </section>

                {/* <section className="header_center">
                    <article className="hd_search">
                        <button type="button" className="btn_srch"></button>
                        <input type="text" className="hd_input" placeholder="Search" />
                    </article>
                </section> */}

                <section className="header_right">
                    <article className="hd_icline">
                        <CircleCont src="../resources/images/clock.png"></CircleCont>
                        <div className="hroom">
                            <div className="circle_p btn_message">
                                <span className="hc_cout">2</span>
                                <img src="../resources/images/talk.png" alt="message" />
                            </div>
                        </div>
                        <CircleCont src="../resources/images/bell.png"></CircleCont>
                        <div className={circleCont ? "hcircle on" : "hcircle"}>
                            <div className="circle_p" onClick={circleOn}>
                                <ProfComponent wrap_class="prof_wrap" comming_class="comming" prof_class="prof none c32"
                                    line_class="line_over" src="../resources/images/prof_head_32.png" />
                            </div>
                            <section className="hidd_zone">
                                <div className="hidd_dark" onClick={circleOff}></div>
                                <article className="hidd_box rilast">
                                    <div className="prof_top">
                                        <div className="view">
                                            View Profile
                                        </div>
                                        <p className="account">
                                            <span className="word">
                                                Account conversion
                                            </span>
                                            <img src="../resources/images/sv_reload_vio.svg" alt="reload" />
                                        </p>
                                        <p className="set">Set</p>
                                    </div>
                                    <p className="line1"></p>
                                    <div className="prof_end">
                                        <span className="delete">Delete</span>
                                    </div>
                                </article>
                            </section>
                        </div>
                        {/* <div className="hroom">
                            <div className="circle_light">
                                <img src="../resources/images/img_btn_dark.png" alt="light button" />
                            </div>
                        </div> */}
                    </article>
                </section>

            </div>

            <Fixmenu />

            {/* <section className={isMessage ? "gr_message see" : "gr_message"}>
                <Grmessage />
            </section> */}

        </header>
    );
}

