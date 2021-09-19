import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import 'swiper/components/navigation/navigation.min.css'
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Navigation, Pagination]);

export default function Task() {

    return (
        <article className="contain">
            <section className="contain_top">
                <div className="cttop_left">
                    <h1 className="top_title">Tasks</h1>
                    <a className="go_detail">
                        <img src="../resources/images/sv_drop.svg" alt="go detail" />
                    </a>
                </div>
                <p className="pen">
                    <img src="../resources/images/sv_note_pen.svg" alt="pen" />
                </p>
            </section>
            <p className="line1"></p>
            <section className="contain_body">
                <article className="contact_line">

                    <div className="tab_line">
                        <p className="tab on">All</p>
                        <p className="tab">Rush</p>
                        <p className="tab">Urgent</p>
                    </div>

                    <div className="contact">
                        <button className="btsq bt20">
                            <img className="bticon" src="../resources/images/sv_arr20_left_wh.svg" alt="images" />
                            <img className="bticon_on" src="../resources/images/sv_arr20_left_cor.svg" alt="images" />
                        </button>
                        <button className="btsq bt20">
                            <img className="bticon" src="../resources/images/sv_arr20_right_wh.svg" alt="images" />
                            <img className="bticon_on" src="../resources/images/sv_arr20_right_cor.svg" alt="images" />
                        </button>
                    </div>
                </article>

                <article className="card_line">
                    <Swiper slidesPerView={4} navigation={true} spaceBetween={5}>
                        <SwiperSlide>
                            <div className="the_card">
                                <p className="delete">
                                    <img src="../resources/images/card_x.png" alt="delete" />
                                </p>
                                <dl className="card_dl">
                                    <dt>Create a Project</dt>
                                    <dd>
                                        Create your won project and collaboate with
                                        oher artists and professionals.
                                    </dd>
                                </dl>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="the_card">
                                <p className="delete">
                                    <img src="../resources/images/card_x.png" alt="delete" />
                                </p>
                                <dl className="card_dl">
                                    <dt>Create a Project</dt>
                                    <dd>
                                        Create your won project and collaboate with
                                        oher artists and professionals.
                                    </dd>
                                </dl>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="the_card">
                                <p className="delete">
                                    <img src="../resources/images/card_x.png" alt="delete" />
                                </p>
                                <dl className="card_dl">
                                    <dt>Create a Project</dt>
                                    <dd>
                                        Create your won project and collaboate with
                                        oher artists and professionals.
                                    </dd>
                                </dl>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="the_card">
                                <p className="delete">
                                    <img src="../resources/images/card_x.png" alt="delete" />
                                </p>
                                <dl className="card_dl">
                                    <dt>Create a Project</dt>
                                    <dd>
                                        Create your won project and collaboate with
                                        oher artists and professionals.
                                    </dd>
                                </dl>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="the_card">
                                <p className="delete">
                                    <img src="../resources/images/card_x.png" alt="delete" />
                                </p>
                                <dl className="card_dl">
                                    <dt>Create a Project</dt>
                                    <dd>
                                        Create your won project and collaboate with
                                        oher artists and professionals.
                                    </dd>
                                </dl>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="the_card">
                                <p className="delete">
                                    <img src="../resources/images/card_x.png" alt="delete" />
                                </p>
                                <dl className="card_dl">
                                    <dt>Create a Project</dt>
                                    <dd>
                                        Create your won project and collaboate with
                                        oher artists and professionals.
                                    </dd>
                                </dl>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </article>

            </section>
        </article>
    );
}