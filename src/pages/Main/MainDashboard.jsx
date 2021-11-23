import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/header/Header";
import Blueline from "../../components/layout/Blueline";
import ImgComponent from "../../components/common/ImgComponent";
import ProfComponent from "../../components/common/ProfComponent";
import ButtonComponent from "../../components/common/ButtonComponent";
import WriteZone from "../../components/common/WriteZone";
import Footer from "../../components/layout/Footer";
import Broad from "../../components/common/Broad";
import EtcCont from "../../components/common/EtcCont";
import BordComp from "../../components/common/BordComp";
import Switch from "../../components/common/Switch";
import ListStart from "../list/ListStart";
import ListProject from "../list/ListProject";


export default function MainNotVerified() {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    const creAte = () => {
        window.location.href = "/CreateProject1"
    };
    const recommend = () => {
        window.location.href = "/RecommendCreator"
    };

    return (
        <div className="wrap">
            <Header />

            <div className="banner_bg">
                <ImgComponent class="banner_img" src="../resources/images/banner_ex1.jpg" />
                <section className="banner_center">
                    <Blueline />

                    <div className="broad_line">
                        <Broad hc="2" src="../resources/images/broad_bil.png" />
                        <Broad hc="7" src="../resources/images/broad_qoon.png" />
                        <Broad hc="9" src="../resources/images/broad_dia.png" />
                    </div>
                </section>
            </div>

            <div className="container bann_container">

                <div className="contents">

                    <section className="aside_line">
                        <aside className="the_aside norm">
                            <div>
                                <section className="aside_top">
                                    <div className="prof_zone norm">
                                        <p className="project_call">
                                            <span>Individual</span>
                                        </p>
                                        <ProfComponent wrap_class="prof_wrap" prof_class="prof in c120 prof_shadow"
                                            line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                        <p className="prof_name_big">
                                            <span>Jin suk Choi</span>
                                            <span className="shield"></span>
                                        </p>
                                        <div className="prof_from">
                                            <p className="prof_company">
                                                <span>Creator</span>
                                            </p>
                                            <p className="prof_location">
                                                <span>Seoul, Republic of Korea</span>
                                            </p>
                                        </div>
                                        <div className="society_iconts dflx_jcent">
                                            <a>
                                                <ImgComponent src="../resources/images/vl24_facebook.png" />
                                            </a>
                                            <a>
                                                <ImgComponent src="../resources/images/vl24_youtube.png" />
                                            </a>
                                            <a>
                                                <ImgComponent src="../resources/images/vl24_instagram.png" />
                                            </a>
                                            <a>
                                                <ImgComponent src="../resources/images/vl24_twitter.png" />
                                            </a>
                                        </div>
                                    </div>
                                    <dl className="dl_company aside">
                                        <dt>
                                            <p className="simbol40">
                                                <img src="../resources/images/simb_sm40.png" alt="sm logo" />
                                            </p>
                                        </dt>
                                        <dd>
                                            <div className="prof_from">
                                                <p className="prof_company">
                                                    <span>SM Entertainment</span>
                                                </p>
                                                <p className="word">
                                                    <span>Seoul, Republic of Korea </span>
                                                </p>
                                            </div>
                                        </dd>
                                    </dl>
                                    <dl className="dl_company aside">
                                        <dt>
                                            <p className="simbol40">
                                                <img src="../resources/images/simb_tono40.png" alt="logo" />
                                            </p>
                                        </dt>
                                        <dd>
                                            <div className="prof_from">
                                                <p className="prof_company">
                                                    <span>Dsign Music</span>
                                                </p>
                                                <p className="word">
                                                    <span>Oslo, Norway</span>
                                                </p>
                                            </div>
                                        </dd>
                                    </dl>
                                </section>
                            </div>
                            <div>
                                <p className="line1"></p>
                                <div className="aside_desc">
                                    <div className="feat_content p-t-0">
                                        <div className="dflx_ac_jbet">
                                            <p className="title">BIO</p>
                                            <p className="cor994 curpt">Edit</p>
                                        </div>
                                        <article className="area_result">
                                            <p className="rslt">"Multi-platinum selling producer😎✨"</p>
                                        </article>
                                    </div>
                                </div>
                                <p className="line1"></p>
                                <div className="aside_last">
                                    <p className="aslast_text">
                                        Member since : 13 Aug 2022
                                    </p>
                                </div>
                            </div>
                        </aside>

                        <aside className="the_aside m-t-25">
                            <div className="mini_top dflx_ac_jbet">
                                <h1>Connect</h1>
                                <a className="view_go">
                                    <span>View more</span>
                                    <ImgComponent src="../resources/images/sv_arr_view.svg" />
                                </a>
                            </div>
                            <p className="line1"></p>
                            <div className="connector">
                                <div className="message_box">
                                    <dl className="message_dl connect_dl">
                                        <dt>
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                        </dt>
                                        <dd className="conn_dd">
                                            <div className="mess_who">
                                                <span className="who">Issac Alberiz</span>
                                                <EtcCont wrap_class="wrap_etc sm" btn_class="btn_hor_etc sm">
                                                    <li>Message</li>
                                                </EtcCont>
                                            </div>
                                            <div className="tip_line">
                                                <p className="tip_word">
                                                    <span className="jum"></span>
                                                    <span>Producer</span>
                                                </p>
                                                <p className="tip_word">
                                                    <span className="jum"></span>
                                                    <span>Topliner</span>
                                                </p>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="message_box">
                                    <dl className="message_dl connect_dl">
                                        <dt>
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                line_class="line_over" src="../resources/images/prof_ex1.png" />
                                        </dt>
                                        <dd className="conn_dd">
                                            <div className="mess_who">
                                                <span className="who">Issac Alberiz</span>
                                                <EtcCont wrap_class="wrap_etc sm" btn_class="btn_hor_etc sm">
                                                    <li>Message</li>
                                                </EtcCont>
                                            </div>
                                            <div className="dflx_ac tip_line">
                                                <p className="tip_word">
                                                    <span className="jum"></span>
                                                    <span>Producer</span>
                                                </p>
                                                <p className="tip_word">
                                                    <span className="jum"></span>
                                                    <span>Topliner</span>
                                                </p>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="message_box">
                                    <dl className="message_dl connect_dl">
                                        <dt>
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                line_class="line_over" src="../resources/images/prof_ex2.png" />
                                        </dt>
                                        <dd className="conn_dd">
                                            <div className="mess_who">
                                                <span className="who">Jay.Park</span>
                                                <EtcCont wrap_class="wrap_etc sm" btn_class="btn_hor_etc sm">
                                                    <li>Message</li>
                                                </EtcCont>
                                            </div>
                                            <div className="dflx_ac tip_line">
                                                <p className="tip_word">
                                                    <span className="jum"></span>
                                                    <span>Producer</span>
                                                </p>
                                                <p className="tip_word">
                                                    <span className="jum"></span>
                                                    <span>Topliner</span>
                                                </p>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </aside>
                    </section>

                    <main className="the_main">

                        <div className="posrel">
                            <article class="bt_contact">
                                <button className="btsq bt36 left" onClick={() => toggleTab(1)}>
                                    <img className="bticon" src="../resources/images/arr36_left_wh.png" alt="images" />
                                    <img className="bticon_on" src="../resources/images/arr36_left_cor.png" alt="images" />
                                </button>
                                <button className="btsq bt36 m-l-20" onClick={() => toggleTab(2)}>
                                    <img className="bticon" src="../resources/images/arr36_right_wh.png" alt="image" />
                                    <img className="bticon_on" src="../resources/images/arr36_right_cor.png" alt="image" />
                                </button>
                            </article>

                            <article className={toggleState === 1 ? "contain hidd on" : "contain hidd"}>
                                <div className="top_ct">
                                    <section className="contain_top">
                                        <div className="cttop_left none">
                                            <h1 className="top_title">Find your Project Member?</h1>
                                            <p className="mid_title">
                                                We can help you prepare for your search
                                            </p>
                                        </div>
                                    </section>
                                    <div className="job_wrap">
                                        <ButtonComponent onClick={recommend} class="btn_md2 cor" txt="Recommend Creator" />
                                    </div>
                                </div>
                            </article>

                            <article className={toggleState === 2 ? "contain hidd on" : "contain hidd"}>
                                <div className="top_ct">
                                    <section className="contain_top">
                                        <div className="cttop_left none">
                                            <h1 className="top_title">Looking for a Job or Project?</h1>
                                            <p className="mid_title">
                                                We can help you prepare for your search
                                            </p>
                                        </div>
                                    </section>
                                    <div className="job_wrap">
                                        <article className="job_left">
                                            <div className="hire_cont">
                                                <span className="ic_thunder"></span>
                                                <span className="cor994">Hire Me</span>
                                            </div>
                                            <div className="hire_cont">
                                                <div className="switch_zone">
                                                    <span className="circ_feel">i</span>
                                                    <Switch label_class="switch-label" />
                                                </div>
                                            </div>
                                        </article>
                                        <article className="job_right">
                                            <div className="job_line">
                                                <p className="call">Roles</p>
                                                <div className="job_bord_line">
                                                    <BordComp word="Producer" />
                                                    <BordComp word="Topliner" />
                                                    <BordComp word="Topliner" />
                                                    <BordComp word="Topliner" />
                                                </div>
                                                <button className="btsq bt20">
                                                    <img className="bticon" src="../resources/images/sv_arr20_plus_wh.png" alt="image" />
                                                    <img className="bticon_on" src="../resources/images/sv_arr20_plus_cor.png" alt="image" />
                                                </button>
                                            </div>
                                            <div className="job_line">
                                                <p className="call">Genre</p>
                                                <div className="job_bord_line">
                                                    <BordComp word="Producer" />
                                                    <BordComp word="Topliner" />
                                                    <BordComp word="Topliner" />
                                                </div>
                                                <button className="btsq bt20">
                                                    <img className="bticon" src="../resources/images/sv_arr20_plus_wh.png" alt="image" />
                                                    <img className="bticon_on" src="../resources/images/sv_arr20_plus_cor.png" alt="image" />
                                                </button>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </article>
                        </div>

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

                                    <ListStart create={creAte} go_class="cor994" go_txt="Start Collaborating">
                                        <div className="ctr_hidd_cent">
                                            <p className="ctr_hidd_txt">
                                                Connect with like-minded
                                                creatives to achieve your goals.
                                                Co-writing & collaboration will
                                                further your career.
                                            </p>
                                        </div>
                                    </ListStart>
                                    <ListProject />
                                    <ListProject />
                                    <ListProject />

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
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50"
                                                line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                            <WriteZone zone_class="write_zone" type="text" class="wirte_put" placeholder="Do you have a story you would like to share?" />
                                        </div>
                                    </div>
                                    <div className="feed_conts">
                                        <p className="line1"></p>
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

                                <article className="the_feed m-t-20">
                                    <div className="feed_conts">
                                        <p className="line1"></p>
                                        <div className="whois_cont">
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50" src="../resources/images/thumb_bts.png" />
                                            <dl className="whois_dl">
                                                <dt>BTS</dt>
                                                <dd>
                                                    <span className="word">35 minutes ago</span>
                                                    <span className="word">Seoul, Republic of Korea</span>
                                                </dd>
                                            </dl>
                                            <EtcCont wrap_class="wrap_etc sm" btn_class="btn_hor_etc md" delli="Delete">
                                                <li>Edit</li>
                                            </EtcCont>
                                        </div>
                                        <div className="text_cont">
                                            <div className="text">
                                                Who is looking forward to next week's #BTS _ Butter CD release? 🙋 ♂️ ♀️🙋#Soft Like Butter<br />
                                                <a href="">🧈 listen now: https://www.bts-butter.com/</a><br />
                                                <a href="">🧈 Pre-book now: https://biglink.to/BTS_BUTTERCD_GLOBAL</a>
                                            </div>
                                            <Link className="go_more" to="">View more</Link>
                                        </div>
                                        <div className="visual_cont">
                                            <div className="visual_box">
                                                <ImgComponent class="visu_img" src="../resources/images/visu_ex1.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="feed_conts">
                                        <p className="line1"></p>
                                        <div className="comp_line">
                                            <p className="the_comp">
                                                <ImgComponent src="../resources/images/sv_like_wh.svg" />
                                                <span className="word">
                                                    <span>10</span>
                                                    <span className="m-l-7">Likes</span>
                                                </span>
                                            </p>
                                            <p className="the_comp">
                                                <ImgComponent src="../resources/images/sv_talk_wh.svg" />
                                                <span className="word">
                                                    <span>12</span>
                                                    <span className="m-l-7">Comments</span>
                                                </span>
                                            </p>
                                            <p className="the_comp">
                                                <ImgComponent src="../resources/images/sv_share_wh.svg" />
                                                <span className="word">
                                                    Share
                                                </span>
                                            </p>
                                            <p className="the_comp">
                                                <ImgComponent src="../resources/images/sv_letter_wh.svg" />
                                                <span className="word">
                                                    Send
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="feed_conts">
                                        <p className="line1"></p>
                                        <div className="the_comments">
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32" src="../resources/images/thumb_kg.png" />
                                            <article className="comment_cont">
                                                <div className="comment_top">
                                                    <h1>KYGO</h1>
                                                </div>
                                                <div className="comment">
                                                    <p className="ment">I'm looking forward to it too!!</p>
                                                    <Link className="go_more" to="">View more</Link>
                                                </div>
                                                <div className="ment_result">
                                                    <p>14 minutes ago</p>
                                                    <p>Like</p>
                                                    <p>Reply</p>
                                                </div>
                                            </article>
                                        </div>
                                        <div>
                                            <p className="comment_more">
                                                <span>More comments</span>
                                                <img src="../resources/images/arr_down_md_wh.png" alt="image" />
                                            </p>
                                        </div>
                                    </div>
                                    <div className="feed_conts">
                                        <p className="line1"></p>
                                        <div className="write_line">
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c32"
                                                line_class="line_over" src="../resources/images/thumb_ex1.jpg" />
                                            <WriteZone zone_class="write_zone send" type="text" class="wirte_put" placeholder="Whrite your comments…" />
                                        </div>
                                    </div>
                                </article>

                                <article className="the_feed m-t-20">
                                    <div className="feed_conts">
                                        <p className="line1"></p>
                                        <div className="whois_cont">
                                            <ProfComponent wrap_class="prof_wrap" prof_class="prof in c50" src="../resources/images/prof_ex1.png" />
                                            <dl className="whois_dl">
                                                <dt>Coldplay</dt>
                                                <dd>
                                                    <span className="word">June 10</span>
                                                </dd>
                                            </dl>
                                            <EtcCont wrap_class="wrap_etc sm" btn_class="btn_hor_etc md" delli="Delete">
                                                <li>Edit</li>
                                            </EtcCont>
                                        </div>
                                        <div className="text_cont">
                                            <div className="text">
                                                Higher Power, out 7 May.<br />
                                                Pre-order / pre-save / CD single: https://coldplay.lnk.to/HigherPower @jaypark<br />
                                                🚀🛰🛸
                                            </div>
                                            <Link className="go_more" to="">View more</Link>
                                        </div>
                                        <div className="visual_cont">
                                            <div className="visual_box">
                                                <ImgComponent class="visu_img" src="../resources/images/visu_ex2.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </article>

                            </section>
                        </article>

                    </main>

                </div>
            </div>

            <Footer />

        </div >
    )
}
