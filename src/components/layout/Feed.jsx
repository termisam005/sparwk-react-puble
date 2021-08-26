import ImgComponent from "../common/ImgComponent";

export default function Feed() {
    return (
        <article className="contain">
            <section className="contain_top">
                <div className="cttop_left">
                    <h1 className="top_title">Feed</h1>
                    <a className="go_detail">
                        <ImgComponent src="../resources/images/sv_drop.svg" />
                    </a>
                </div>
            </section>
            <p className="line1"></p>
            <section className="contain_body">
                <article className="the_feed">
                    <div className="feed_top">
                        <p className="prof_c50">
                            <span className="line_over"></span>
                            <ImgComponent src="../resources/images/thumb_ex1.jpg" />
                        </p>
                        <div className="write_zone">
                            <input type="text" className="wirte_put"
                                placeholder="Do you have a story you would like to share?" />
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
                            <p className="the_comp">
                                <ImgComponent src="../resources/images/sv_navi_wh.svg" />
                                <span className="word">
                                    Check-in
                                </span>
                            </p>
                        </div>
                    </div>
                </article>
            </section>
        </article>
    );
}