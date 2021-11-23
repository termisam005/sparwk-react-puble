import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/header/Header";
import Blueline from "../../components/layout/Blueline";
import ImgComponent from "../../components/common/ImgComponent";
import ProfComponent from "../../components/common/ProfComponent";
import ButtonComponent from "../../components/common/ButtonComponent";
import InputComponent from "../../components/common/InputComponent";
import WriteZone from "../../components/common/WriteZone";
import Footer from "../../components/layout/Footer";
import ListStart from "../list/ListStart";


export default function MainNotVerified() {
    const [popUps, setpopUps] = useState(false);
    const openPop = () => {
        setpopUps(true);
    }
    const closePop = () => {
        setpopUps(false);
    }

    const veriFy = () => {
        window.location.href = "/VerProfile1"
    };

    return (
        <div className="wrap">
            <Header />

            <div className="banner_bg">
                {/* <ImgComponent class="banner_img" src="../resources/images/banner_ex1.jpg" /> */}
                <section className="banner_center">
                    <Blueline />
                    <article className="banner_text">
                        <div className="bann_text">
                            <ImgComponent src="../resources/images/thumb_bann.png" />
                            <span className="word m-l-8">Add a banner image</span>
                        </div>
                        <p>Optimal dimensions 1920 x 320px</p>
                    </article>
                </section>
            </div>

            <div className="container bann_container">

                <div className="contents">

                    <aside className="the_aside norm">
                        <div>
                            <section className="aside_top">
                                <div className="prof_zone norm">
                                    <p className="project_call">
                                        <span>Individual</span>
                                    </p>
                                    <ProfComponent wrap_class="prof_wrap" prof_class="prof none c120 prof_shadow"
                                        src="../resources/images/prof_j_120.png" />
                                    <p className="prof_name_big">
                                        <span>Jin suk Choi</span>
                                    </p>
                                    <div className="prof_from">
                                        <p className="prof_company">
                                            <span>Creator</span>
                                        </p>
                                        <p className="prof_location">
                                            <span>Seoul, Republic of Korea</span>
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div>
                            <p className="line1"></p>
                            <div className="aside_desc">
                                <div className="feat_content p-t-0">
                                    <div className="dflx_ac_jbet">
                                        <p className="title">BIO</p>
                                        <p className="cor994 curpt">Save</p>
                                    </div>
                                    <textarea className="text_area">
                                    </textarea>
                                    <p className="word_num tar">
                                        <span>0</span><span className="m-l-3 m-r-3">/</span><span>200</span>
                                    </p>
                                </div>
                            </div>
                            <p className="line1"></p>
                            <div className="aside_last">
                                <p className="aslast_text">
                                    Project since : May, 28, 2022
                                </p>
                            </div>
                        </div>
                    </aside>

                    <main className="the_main">

                        <article className="contain">
                            <div className="top_ct">
                                <section className="contain_top">
                                    <div className="cttop_left none">
                                        <h1 className="top_title">Try Profile Verification</h1>
                                        <p className="mid_title">
                                            Get your profile Verification in minutes.
                                        </p>
                                    </div>
                                </section>
                                <div className="job_wrap">
                                    <ButtonComponent onClick={veriFy} class="btn_md1 cor" txt="Get Started" />
                                </div>
                            </div>
                        </article>

                        <article className="contain">
                            <section className="contain_top">
                                <div className="cttop_left">
                                    <h1 className="top_title">Project</h1>
                                </div>
                                <div>
                                    <p className="mid_title">
                                        Based on your project
                                    </p>
                                </div>
                            </section>
                            <p className="line1"></p>
                            <section className="contain_list">
                                <article className="contact_line">
                                    <div className="contact_sel">
                                        <div className="tab_line">
                                            <p className="tab on">All</p>
                                            <p className="tab">Co-Write</p>
                                            <p className="tab">Recommend</p>
                                        </div>
                                        <select className="selector wh mini w220">
                                            <option value="">Recently Added</option>
                                            <option value="">A to Z</option>
                                            <option value="">Z to A</option>
                                        </select>
                                    </div>
                                </article>

                                <article className="list_body">
                                    <ListStart create={openPop} go_txt="Start Collaborating">
                                        <div className="ctr_hidd_cent">
                                            <p className="ctr_hidd_txt">
                                                Connect with like-minded
                                                creatives to achieve your goals.
                                                Co-writing & collaboration will
                                                further your career.
                                            </p>
                                        </div>
                                    </ListStart>
                                </article>
                            </section>
                        </article>

                        <article className="contain">
                            <section className="contain_top">
                                <div className="cttop_left">
                                    <h1 className="top_title">Post</h1>
                                </div>
                            </section>
                            <p className="line1"></p>
                            <section className="contain_body">
                                <article className="the_feed">
                                    <div className="feed_top">
                                        <div className="write_line">
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof none c50" src="../resources/images/prof_head_50.png" />
                                            <WriteZone zone_class="write_zone" type="text" class="wirte_put" placeholder="Do you have a story you would like to share?" />
                                        </div>
                                    </div>
                                    <p className="line1"></p>
                                    <div className="feed_conts">
                                        <div className="comp_line">
                                            <p className="the_comp">
                                                <ImgComponent src="../resources/images/sv_photo_wh.svg" />
                                                <span className="word">
                                                    Photo/Video
                                                </span>
                                            </p>
                                            <p className="the_comp">
                                                <ImgComponent src="../resources/images/sv_calendar_wh.svg" />
                                                <span className="word">
                                                    important event
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </section>
                        </article>

                    </main>

                </div>
            </div>

            <Footer />
            <PopComponent open={popUps} close={closePop} />

        </div >
    )
}


const PopComponent = (props) => {
    const { open, close } = props;
    return (
        <section className={open ? 'pop_contents active' : 'pop_contents'}>
            <div onClick={close} className="pop_bg"></div>
            <div className="pop_body pop_dial pop_ab_cent">
                <div className="pop_conts">
                    <div className="pop_cent">
                        <h5>
                            Try to Verify Your Profile.<br />
                            Get your profile verification in minutes.
                        </h5>
                    </div>
                </div>
                <p className="line1"></p>
                <div className="pop_foot">
                    <ButtonComponent onClick={close} class="btn_md3 w-100" txt="Confirm" />
                </div>
            </div>
        </section>
    )
}