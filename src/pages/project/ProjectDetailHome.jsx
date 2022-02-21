import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/header/Header";
import Blueline from "../../components/layout/Blueline";
import ProfComponent from "../../components/common/ProfComponent";
import ButtonComponent from "../../components/common/ButtonComponent";
import Footer from "../../components/layout/Footer";
import DropComponent from "../../components/common/DropComponent";

import SongsSwiper1 from "../../components/layout/SongsSwiper1";
import ReferSwiper1 from "../../components/layout/ReferSwiper1";
import Features1 from "../../components/layout/Features1";

export default function ProjectDetailHome() {

    const goHome = () => {
        window.location.href = "/ProjectDetailHome"
    }
    const goSongs = () => {
        window.location.href = "/ProjectDetailSongs"
    };
    const goRefer = () => {
        window.location.href = "/ProjectDetailRefer"
    };
    const goWriter = () => {
        window.location.href = "/ProjectDetailWriter"
    };

    const recommend = () => {
        window.location.href = "/RecommendCreator"
    };

    const goInfo = () => {
        window.location.href = "/RsvpInfo"
    };


    //tostPop
    const [tostPop, setTostPop] = useState(true);
    const tostOff = () => {
        setTostPop(false);
    }

    const TostComponent = (props) => {
        const { open, close } = props;
        return (
            <div className={open ? 'openModal modal' : 'modal'}>
                <div onClick={close} className="modal_bg"></div>
                <article className="tost_cont posfix">
                    <div className="tost_title">
                        <div className="dflx_ac">
                            <img className="m-r-7" src="../resources/images/logo_w.png" alt="logo" />
                            <h3>SPARWK</h3>
                        </div>
                        <span className="time">now</span>
                    </div>
                    <div className="tost_text">
                        The project application has been approved.
                    </div>
                </article>
            </div>
        )
    }

    return (
        <div className="wrap">
            <Header />

            <div className="container">
                <Blueline />

                <div className="contents">

                    <section className="aside_line">
                        <aside className="the_aside norm">
                            <div>
                                <section className="aside_top">
                                    <div className="prof_zone norm">
                                        <span className="lock17"></span>
                                        <p className="project_call">
                                            <span>Collaboration</span>
                                            <span className="m-l-2 m-r-2">/</span>
                                            <span>Cowrite</span>
                                        </p>
                                        <div className="nemo_prof">
                                            {/* <img src="../resources/images/nemo_prof_ex1.jpg" alt="photo" /> */}
                                            <img src="../resources/images/trans_sparwk60.png" alt="logo" />
                                        </div>
                                        <p className="prof_name_big cor913">
                                            <span>PROJECT NOEASY</span>
                                        </p>
                                        <div className="prof_from">
                                            <p className="prof_location">
                                                <span>Hip Hop, K-POP</span>
                                            </p>
                                        </div>
                                        <div className="tip_prof op07">
                                            <p className="tip_word">
                                                <span className="jum"></span>
                                                <span>Cool</span>
                                            </p>
                                            <p className="tip_word">
                                                <span className="jum"></span>
                                                <span>Fun</span>
                                            </p>
                                            <p className="tip_word">
                                                <span className="jum"></span>
                                                <span>Happy</span>
                                            </p>
                                            <p className="tip_word">
                                                <span className="jum"></span>
                                                <span>Urgent</span>
                                            </p>
                                            <p className="tip_word">
                                                <span className="jum"></span>
                                                <span>Party</span>
                                            </p>
                                            <p className="tip_word">
                                                <span className="jum"></span>
                                                <span>Summer</span>
                                            </p>
                                            <p className="tip_word">
                                                <span className="jum"></span>
                                                <span>Dramma</span>
                                            </p>
                                        </div>
                                        <div className="multi_prof">
                                            <div className="dflx_ac_jcent">
                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof c32"
                                                    line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof c32"
                                                    line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof c32"
                                                    line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof c32"
                                                    line_class="line_over" src="../resources/images/prof_ex1.png" />
                                                <ProfComponent wrap_class="prof_wrap" prof_class="prof c32"
                                                    line_class="line_over" src="../resources/images/prof_ex1.png" />
                                            </div>
                                            <p className="mul_pr_txt">
                                                <span className="cor994 m-r-3">5</span>
                                                <span>Applicants</span>
                                            </p>
                                        </div>
                                    </div>
                                    <dl className="dl_company aside">
                                        <dt>
                                            <p className="simbol40">
                                                <img src="../resources/images/simb_tono40.png" alt="logo" />
                                            </p>
                                        </dt>
                                        <dd>
                                            <div className="prof_from">
                                                <p className="prof_company">
                                                    <span>EKKO Music Rights Europe</span>
                                                </p>
                                                <p className="word">
                                                    <span>Stockholm, Sweden</span>
                                                </p>
                                            </div>
                                        </dd>
                                    </dl>
                                </section>
                            </div>
                            <div>
                                <p className="line1"></p>
                                <div className="aside_desc">
                                    <p className="top">Short Description</p>
                                    <div className="asdesc_zone">
                                        <span>
                                            Producer, mixing & mastering engineer
                                            looking for a manager/agent
                                        </span>
                                    </div>
                                </div>
                                <p className="line1"></p>
                                <div className="aside_last">
                                    <p className="aslast_text">
                                        Project since : 13 Aug 2022
                                    </p>
                                </div>
                            </div>
                        </aside>

                    </section>

                    <main className="the_main">
                        <TostComponent open={tostPop} close={tostOff} />

                        <article className="contain hidd on">
                            <div className="top_ct">
                                <section className="contain_top">
                                    <div className="cttop_left none">
                                        <h1 className="top_title">Find your Project Member?</h1>
                                        <p className="mid_title">
                                            We can help you prepare for your search
                                        </p>
                                    </div>
                                    <div className="self_start">
                                        <span className="bord_tip cor994">Recruiting</span>
                                    </div>
                                </section>
                                <div className="job_wrap">
                                    <ButtonComponent onClick={recommend} class="btn_md2 cor" txt="Recommend Creator" />
                                    <ButtonComponent onClick={goInfo} class="btn_md1 m-l-15" txt="RSVP Info" />
                                </div>
                            </div>
                        </article>

                        <article className="contain">
                            <section className="contain_top">
                                <div className="cttop_left">
                                    <h1 className="top_title">PROJECT NOEASY</h1>
                                </div>
                                <DropComponent wclass="dflx_ac_jbet w250" />
                            </section>
                            <p className="line1"></p>
                            <section className="contain_list">
                                <article className="contact_line">
                                    <div className="tab_line">
                                        <p onClick={goHome} className="tab on">Home</p>
                                        <p onClick={goSongs} className="tab">Songs</p>
                                        <p onClick={goRefer} className="tab">Reference</p>
                                        <p onClick={goWriter} className="tab">Co-Writers</p>
                                    </div>
                                </article>
                                <SongsSwiper1 />
                                <ReferSwiper1 />
                                <Features1 contain_class="contain inner_contain" />
                            </section>
                        </article>

                    </main>

                </div>
            </div>

            <Footer />

        </div >
    )
}
