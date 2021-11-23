import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import ButtonWith from "../../components/common/ButtonWith";
import ButtonComponent from "../../components/common/ButtonComponent";
import BordComp from "../../components/common/BordComp";
import RangeSlider from "../../components/common/RangeSlider";
import Switch from "../../components/common/Switch";
import HeaderTrans from "../../components/header/HeaderTrans";
import ListProducer from "./ListProducer";
import PopTerritor from "../../components/common/PopTerritor";
import PopRoles from "../../components/common/PopRoles";
import PopGenres from "../../components/common/PopGenres";
import ReactTooltip from 'react-tooltip';


export default function RecommendProject() {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const [toggleState, setToggleState] = useState(2);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    const recommend = () => {
        window.location.href = "/RecommendCreator"
    };

    const [terriPop, setTerriPop] = useState(false);
    const openTerripop = () => {
        setTerriPop(true);
    }
    const closeTerripop = () => {
        setTerriPop(false);
    }

    const [rolesPop, setRolesPop] = useState(false);
    const openRolpop = () => {
        setRolesPop(true);
    };
    const closeRolpop = () => {
        setRolesPop(false);
    }

    const [genPop, setGenPop] = useState(false);
    const openGenpop = () => {
        setGenPop(true);
    };
    const closeGenpop = () => {
        setGenPop(false);
    }

    return (
        <div className="wrap dark">
            <HeaderTrans logo_class="logo_none" />

            <div className="container posrel">

                <section className="dark_back">
                    <div className="dflx_ac_jbet h-100">
                        <h3 onClick={goBack}>
                            <span className="go_back">
                                <img src="../resources/images/arr_back_wh.png" alt="link back" />
                            </span>
                            <span className="word">Back</span>
                        </h3>
                    </div>
                </section>

                <div className="contents">

                    <section className="aside_line">
                        <aside className="the_aside">
                            <div>
                                <div className="mini_top">
                                    <h1>Search</h1>
                                </div>
                                <p className="line1"></p>
                                <div className="aside_desc">
                                    <div className="m-t-5 m-b-20">
                                        <article className="hd_search">
                                            <button type="button" className="btn_srch"></button>
                                            <input type="text" className="hd_input" placeholder="Search Creator or Creative Tag" />
                                        </article>
                                    </div>
                                    <article className="addConts">
                                        <div onClick={openTerripop} className="add_line">
                                            <p>Territories</p>
                                            <ButtonWith class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                        </div>
                                        <div onClick={openRolpop} className="add_line">
                                            <p>Roles</p>
                                            <ButtonWith class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                        </div>
                                        <div onClick={openGenpop} className="add_line">
                                            <p>Genres</p>
                                            <ButtonWith class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                        </div>
                                        <div onClick={openGenpop} className="add_line">
                                            <p>Language</p>
                                            <ButtonWith class="btsq bt20 norm" src="../resources/images/sv_arr20_plus_wh.png" />
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div>
                                <p className="line1"></p>
                                <div className="aside_desc">
                                    <div className="dflx_ac_jbet">
                                        <p className="m-b-5">
                                            Recent search Filter
                                        </p>
                                        <p className="cor913 curpt">Clear All</p>
                                    </div>
                                    <div className="aside_bord">
                                        <BordComp word="Soundtrack" />
                                        <BordComp word="Blues" />
                                        <BordComp word="Romantic" />
                                        <BordComp word="Male vocals" />
                                        <BordComp word="Strings" />
                                        <BordComp word="Hot" />
                                        <BordComp word="Sweety" />
                                        <BordComp word="Sad" />
                                        <BordComp word="Label" />
                                    </div>
                                </div>
                                <p className="line1"></p>
                                <div className="aside_last">
                                    <h1>Match</h1>
                                    <div>
                                        <section className="range_wrap">
                                            <div className="range_sett">
                                                <div className="the_ranger">
                                                    <RangeSlider />
                                                </div>
                                            </div>
                                        </section>
                                    </div>
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
                                                    <ReactTooltip id="Feel" place="top" effect="solid">
                                                        Connect with like-minded creatives<br />
                                                        to achieve your goals. Co-writing &<br />
                                                        collaboration will further your<br /> career.
                                                    </ReactTooltip>
                                                    <span data-tip data-for="Feel" className="circ_feel">i</span>
                                                    <Switch label_class="switch-label" />
                                                </div>
                                            </div>
                                        </article>
                                        <article className="job_right">
                                            <div className="job_line">
                                                <p className="call">Role</p>
                                                <div className="job_bord_line">
                                                    <BordComp word="Producer" />
                                                    <BordComp word="Topliner" />
                                                    <BordComp word="Lyicist" />
                                                    <BordComp word="Musician" />
                                                </div>
                                                <button className="btsq bt20">
                                                    <img className="bticon" src="../resources/images/sv_arr20_plus_wh.png" alt="image" />
                                                    <img className="bticon_on" src="../resources/images/sv_arr20_plus_cor.png" alt="image" />
                                                </button>
                                            </div>
                                            <div className="job_line">
                                                <p className="call">Genre</p>
                                                <div className="job_bord_line">
                                                    <BordComp word="Dance" />
                                                    <BordComp word="K-POP" />
                                                    <BordComp word="Hip-Hop" />
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
                                    <h1 className="top_title">Recommended for 'Stage.name'</h1>
                                </div>
                                <div>
                                    <p className="mid_title">
                                        Based on your roles and affinity
                                    </p>
                                </div>
                            </section>
                            <p className="line1"></p>

                            <section className="contain_list">
                                <article className="contact_line">
                                    <div className="tab_line">
                                        <p className="tab on">All</p>
                                        <p className="tab">Invited</p>
                                        <p className="tab">Recommended</p>
                                    </div>
                                </article>

                                <article className="list_body">
                                    <ListProducer />
                                    <ListProducer />
                                    <ListProducer />
                                    <ListProducer />
                                    <ListProducer />
                                    <ListProducer />
                                    <ListProducer />
                                    <ListProducer />
                                    <ListProducer />
                                    <ListProducer />
                                </article>

                            </section>

                        </article>

                    </main>

                </div>
            </div>

            <PopTerritor open={terriPop} close={closeTerripop} />
            <PopRoles open={rolesPop} close={closeRolpop} />
            <PopGenres open={genPop} close={closeGenpop} />
        </div >
    )
}