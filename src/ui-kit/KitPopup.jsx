import React from "react";
import ButtonComponent from "../components/common/ButtonComponent";
import InputComponent from "../components/common/InputComponent";

export default function DemoPop() {
    return (
        <div className="wrap_grad">
            <div className="container">

                <section className="demo_title">
                    <h1>Popup</h1>
                </section>

                <section className="dpflx">
                    <div className="p-20">
                        <div className={"pop_body"}>
                            <div className={"pop_conts"}>
                                <div className={"pop_cent"}>
                                    The verification code does not match.
                                </div>
                            </div>
                            <p className={"line1"}></p>
                            <div className={"pop_foot"}>
                                <ButtonComponent class="btn_md3 w-100" txt="Confirm" />
                            </div>
                        </div>
                    </div>
                    <div className="p-20">
                        <div className={"pop_body"}>
                            <div className={"pop_conts"}>
                                <div className={"pop_cent"}>
                                    This phone number is already in use.<br />
                                    If you are not the person,<br />
                                    please contact us through 1:1 inquiry.
                                </div>
                            </div>
                            <p className={"line1"}></p>
                            <div className={"pop_foot"}>
                                <ButtonComponent class="btn_md3 w-100" txt="Confirm" />
                            </div>
                        </div>
                    </div>
                    <div className="p-20">
                        <div className={"pop_body"}>
                            <div className={"pop_top"}>
                                <div className={"ptop_txt"}>
                                    <span className={"soc_mark"}>
                                        <img src="../resources/images/sm_google.png" alt="google" />
                                    </span>
                                    <span className={"word"}>Create a SPARWK account through Google</span>
                                </div>
                                <p className="ptop_x"></p>
                            </div>
                            <p className={"line1"}></p>
                            <div className={"pop_conts"}>
                                <dl className="message_dl">
                                    <dt>
                                        <span className="coming"></span>
                                        <p className="prof_c40">
                                            <img src="../resources/images/prof_none.png" alt="none profile" />
                                        </p>
                                    </dt>
                                    <dd>
                                        <div className="mess_who">
                                            <span className="who">Christoph Willbaldard</span>
                                        </div>
                                        <div className="mess_tip">
                                            <span className="word">requested a friend.</span>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                            <div className={"pop_bottom"}>
                                <ButtonComponent class="btn_md3 w-100" txt="Use account" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="dpflx">
                    <div className="p-20">
                        <div className={"pop_body"}>
                            <div className={"pop_conts"}>
                                <div className={"pop_cent"}>
                                    The verification code does not match.
                                </div>
                            </div>
                            <p className={"line1"}></p>
                            <div className={"pop_foot"}>
                                <ButtonComponent class="btn_md3 none w-50" txt="Cancel" />
                                <ButtonComponent class="btn_md3 w-50" txt="Confirm" />
                            </div>
                        </div>
                    </div>
                    <div className="p-20">
                        <div className={"pop_body"}>
                            <div className={"pop_conts"}>
                                <div className={"pop_cent"}>
                                    This phone number is already in use.<br />
                                    If you are not the person,<br />
                                    please contact us through 1:1 inquiry.
                                </div>
                            </div>
                            <p className={"line1"}></p>
                            <div className={"pop_foot"}>
                                <ButtonComponent class="btn_md3 none w-50" txt="Cancel" />
                                <ButtonComponent class="btn_md3 w-50" txt="Confirm" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="dpflx">
                    <div className="p-20">
                        <div className={"pop_body pop_dial"}>
                            <div className={"pop_top"}>
                                <div className={"ptop_txt"}>
                                    <h1>Enter your mobile phone number</h1>
                                </div>
                            </div>
                            <p className={"line1"}></p>
                            <form>
                                <div className={"pop_conts"}>
                                    <div className={"pop_conts_dial"}>
                                        <dl className={"natdial_dl"}>
                                            <dt>
                                                <div className={"dial_selbox"}>
                                                    <p className={"nation"}>
                                                        <img src="../resources/images/nation_usa.png" alt="usa" />
                                                        <span className={"word"}>US (+1)</span>
                                                    </p>
                                                    <span className="sort">
                                                        <img src="../resources/images/sv_sort_wh.svg" alt="sorting" />
                                                    </span>
                                                </div>
                                            </dt>
                                            <dd>
                                                <InputComponent type="text" class="wrput h40" />
                                            </dd>
                                        </dl>
                                        <p className={"pop_txt"}>
                                            To verify this number, we will send a verification code
                                            by text message and data charges may apply.
                                        </p>
                                    </div>
                                </div>
                                <p className="line1"></p>
                                <div className={"pop_foot"}>
                                    <ButtonComponent class="btn_md3 w-48" txt="Cancel" />
                                    <ButtonComponent class="btn_md3 cor w-48" txt="Save" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="p-20">
                        <div className={"pop_body pop_dial"}>
                            <div className={"pop_top"}>
                                <div className={"ptop_txt"}>
                                    <h1>Enter your mobile phone number</h1>
                                </div>
                            </div>
                            <p className={"line1"}></p>
                            <form>
                                <div className={"pop_conts"}>
                                    <div className={"pop_conts_dial"}>
                                        <dl className={"natdial_dl"}>
                                            <dt>
                                                <div className={"dial_selbox"}>
                                                    <p className={"nation"}>
                                                        <img src="../resources/images/nation_usa.png" alt="usa" />
                                                        <span className={"word"}>US (+1)</span>
                                                    </p>
                                                    <span className="sort">
                                                        <img src="../resources/images/sv_sort_wh.svg" alt="sorting" />
                                                    </span>
                                                </div>
                                            </dt>
                                            <dd>
                                                <InputComponent type="text" class="wrput h40" />
                                            </dd>
                                        </dl>
                                        <dl className={"natdial_dl m-0"}>
                                            <dt>
                                                <p className={"pop_txt"}>Certification Number</p>
                                            </dt>
                                            <dd>
                                                <div className="putt_box time">
                                                    <span className="put_timer">3:00</span>
                                                    <InputComponent type="text" class="wrput h40" />
                                                </div>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <p className={"line1"}></p>
                                <div className={"pop_foot"}>
                                    <ButtonComponent class="btn_md3 w-48" txt="Cancel" />
                                    <ButtonComponent class="btn_md3 cor w-48" txt="Save" />
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                <section className="dpflx">
                    <div className="p-20">
                        <div className={"pop_body pop_dial"}>
                            <div className={"pop_top"}>
                                <div className={"ptop_txt"}>
                                    <h1>Enter your mobile phone number</h1>
                                </div>
                            </div>
                            <p className={"line1"}></p>
                            <form>
                                <div className={"pop_conts"}>
                                    <div className={"pop_conts_dial"}>
                                        <dl className={"natdial_dl"}>
                                            <dt>
                                                <div className={"dial_selbox"}>
                                                    <p className={"nation"}>
                                                        <img src="../resources/images/nation_usa.png" alt="usa" />
                                                        <span className={"word"}>US (+1)</span>
                                                    </p>
                                                    <span className="sort">
                                                        <img src="../resources/images/sv_sort_wh.svg" alt="sorting" />
                                                    </span>
                                                </div>
                                            </dt>
                                            <dd>
                                                <InputComponent type="text" class="wrput h40" />
                                            </dd>
                                        </dl>
                                        <dl className={"natdial_dl m-0"}>
                                            <dt>
                                                <p className={"pop_txt"}>Certification Number</p>
                                            </dt>
                                            <dd>
                                                <div className="resend_line">
                                                    <InputComponent type="text" class="wrput h40" />
                                                    <ButtonComponent class="btn_sm1 trans h40" txt="Resend" />
                                                </div>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <p className={"line1"}></p>
                                <div className={"pop_foot"}>
                                    <ButtonComponent class="btn_md3 w-48" txt="Cancel" />
                                    <ButtonComponent class="btn_md3 cor w-48" txt="Save" />
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}