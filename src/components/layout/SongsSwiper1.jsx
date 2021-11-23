import { useState } from "react";
import ListStart from "../../pages/list/ListStart";
import ListSong from "../../pages/list/ListSong";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import 'swiper/components/navigation/navigation.min.css'
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Navigation, Pagination]);


export default function SongsSwiper1() {

    const creAte = () => {
        window.location.href = "/NewSong1"
    };

    return (
        <article className="contain inner_contain">
            <section className="mini_top">
                <h1>Songs</h1>
            </section>
            {/* <p className="line1"></p> */}
            <section className="contain_body swiper_body">
                <div className="inner_contact_line posab">
                    <select className="selector wh mini w220">
                        <option value="">Recently Added</option>
                        <option value="">A to Z</option>
                        <option value="">Z to A</option>
                    </select>
                    <div className="tab_line">
                        <p className="art on">
                            All
                        </p>
                        <p className="art">
                            Available
                        </p>
                        <p className="art">
                            Available(Pass)
                        </p>
                        <p className="art">
                            Hold
                        </p>
                        <p className="art">
                            Cut
                        </p>
                    </div>
                </div>
                <article className="card_line posab">
                    <Swiper slidesPerView={4} navigation={true} spaceBetween={4}>
                        <SwiperSlide>
                            <ListStart create={creAte} go_class="cor994" go_txt="New Song">
                                <div className="ctr_hidd_cent">
                                    <p className="ctr_hidd_txt tac">
                                        Use the button to create your<br />
                                        song to your SPARWK!
                                    </p>
                                </div>
                            </ListStart>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ListSong />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ListSong />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ListSong />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ListSong />
                        </SwiperSlide>
                    </Swiper>
                </article>
            </section>
        </article>
    );
}