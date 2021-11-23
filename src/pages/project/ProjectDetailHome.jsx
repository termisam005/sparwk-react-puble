import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Blueline from "../../components/layout/Blueline";
import ProfComponent from "../../components/common/ProfComponent";
import ButtonComponent from "../../components/common/ButtonComponent";
import Footer from "../../components/layout/Footer";
import DropCont from "../../components/common/DropCont";

import SongsSwiper1 from "../../components/layout/SongsSwiper1";
import ReferSwiper1 from "../../components/layout/ReferSwiper1";
import Features1 from "../../components/layout/Features1";

export default function ProjectDetailHome() {

    const recommend = () => {
        window.location.href = "/RecommendCreator"
    };

    const goInfo = () => {
        window.location.href = "/RsvpInfo"
    };

    const goSongs = () => {
        window.location.href = "/ProjectDetailSongs"
    };

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
                                            <img src="../resources/images/nemo_prof_ex1.jpg" alt="photo" />
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
                                <div className="dflx_ac_jbet w250">
                                    <DropCont btn_class="btn_sm1 w120 btn_drop" spant="Joined" >
                                        <li>Owner change</li>
                                        <li>
                                            <span className="m-r-2 cor994">5</span>
                                            <span>Applicants</span>
                                        </li>
                                        <li>Leave</li>
                                    </DropCont>
                                    <DropCont btn_class="btn_sm1 w120 cor btn_drop" spant="Invite" >
                                        <li>RSVP info</li>
                                        <li>Send RSVP</li>
                                        <li>Recommend</li>
                                    </DropCont>
                                </div>
                            </section>
                            <p className="line1"></p>
                            <section className="contain_list">
                                <article className="contact_line">
                                    <div className="tab_line">
                                        <p className="tab on">Home</p>
                                        <p onClick={goSongs} className="tab">Songs</p>
                                        <p className="tab">Reference Files</p>
                                        <p className="tab">Co-Writers</p>
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
