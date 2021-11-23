import React, { Component } from "react";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import RangeSlider from "../components/common/RangeSlider";


class KitEx3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }
    onSliderChange = value => {
        this.setState(
            { value },
            () => { console.log(this.state.value); }
        );
    };

    render() {
        return (
            <div className="wrap_grad dark">
                <div className="container">

                    <section className="demo_title">
                        <h1>EX 3</h1>
                    </section>

                    <section className="dflx_ac_jcent">
                        <div className="w-80">

                            <div className="dpflx m-b-80">
                                <div style={{ margin: 50 }} className="progress_bar">
                                    <p>Basic Slider</p>
                                    <p>{this.state.value}</p>
                                    <Slider
                                        min={0}
                                        max={120}
                                        value={this.state.value}
                                        onChange={this.onSliderChange}
                                        railStyle={{
                                            height: 10
                                        }}
                                        handleStyle={{
                                            height: 18,
                                            width: 18,
                                            marginLeft: -9,
                                            marginTop: -9,
                                            backgroundColor: "#ff4f19",
                                            border: 4,
                                            borderStyle: "solid",
                                            borderColor: "#304095",
                                        }}
                                        trackStyle={{
                                            height: 6,
                                            top: 3,
                                            background: "#ff4f19",
                                        }} />
                                </div>
                                <section className="range_wrap">
                                    <div className="range_text">
                                        <p className="range">
                                            <span className="word">MIN</span>
                                            <span className="word num">0</span>
                                        </p>
                                        <p className="range">
                                            <span className="word">MAX</span>
                                            <span className="word num">500</span>
                                        </p>
                                    </div>
                                    <div className="range_sett">
                                        <div className="the_ranger">
                                            <RangeSlider />
                                        </div>
                                    </div>
                                </section>
                            </div>

                            <div className="w-60 m-b-50">
                                <section className="player_setts m-b-20">
                                    <div className="songplay_set">
                                        <button className="btn_c32 cor">
                                            <span className="btcor_inner p-l-5">
                                                <img src="../resources/images/play_wh32.png" alt="images" />
                                            </span>
                                        </button>
                                        <article className="song_player m-l-25">
                                            <div className="progress_bar">
                                                <Slider min={0} max={120}
                                                    railStyle={{ height: 10 }}
                                                    handleStyle={{
                                                        height: 18,
                                                        width: 18,
                                                        marginLeft: -9,
                                                        marginTop: -9,
                                                        backgroundColor: "#304095",
                                                        border: "none",
                                                    }}
                                                    trackStyle={{
                                                        height: 6,
                                                        top: 3,
                                                        background: "#ff4f19",
                                                    }} />
                                            </div>
                                        </article>
                                    </div>
                                    <div className="songtype_set">
                                        <div className="pline_status">
                                            <p className="stat">
                                                <span className="m-r-7">01:40</span>
                                                <span className="tmall">03:50</span>
                                            </p>
                                        </div>
                                        <button type="button" className="btn_sm1 w120">
                                            <img className="m-r-5" src="../resources/images/note_wh.png" alt="note" />
                                            <span>Upload</span>
                                        </button>
                                    </div>
                                </section>
                            </div>

                        </div>
                    </section>

                </div>

                <section className="foot_play">
                    <div className="fplay_inner">
                        <div className="progress_bar fplay_progress">
                            <Slider min={0} max={100}
                                onChange={this.onSliderChange}
                                railStyle={{ height: 10 }}
                                handleStyle={{
                                    height: 18,
                                    width: 18,
                                    marginLeft: 0,
                                    marginTop: -9,
                                    backgroundColor: "#ff4f19",
                                    border: 4,
                                    borderStyle: "solid",
                                    borderColor: "#304095",
                                }}
                                trackStyle={{
                                    height: 6,
                                    top: 3,
                                    background: "#ff4f19",
                                }}
                            />
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default KitEx3;