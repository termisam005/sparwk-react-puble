import React from "react";
import ButtonComponent from "../components/common/ButtonComponent";

export default function DemoButton() {
    return (
        <div className="wrap_grad">
            <div className="container">

                <section className="demo_title">
                    <h1>Button</h1>
                </section>

                <section className="demo_line">
                    <div className="p-20">
                        <ButtonComponent class="btn_md1" txt="Button" />
                        <p className="p-10"></p>
                        <ButtonComponent class="btn_md1 on" txt="Button" />
                        <p className="p-10"></p>
                        <ButtonComponent class="btn_md1 disable" txt="Button" />
                    </div>
                    <div className="p-20">
                        <ButtonComponent class="btn_md1_on" txt="Button" />
                        <p className="p-10"></p>
                        <ButtonComponent class="btn_md1_on on" txt="Button" />
                        <p className="p-10"></p>
                        <ButtonComponent class="btn_md1_on disable" txt="Button" />
                    </div>
                    <div className="p-20">
                        <ButtonComponent class="btn_md1_trans" txt="Button" />
                        <p className="p-10"></p>
                        <ButtonComponent class="btn_md1_trans on" txt="Button" />
                        <p className="p-10"></p>
                        <ButtonComponent class="btn_md1_trans disable" txt="Button" />
                    </div>
                    <div className="p-20">
                        <ButtonComponent class="btn_md1_box" txt="Button" />
                        <p className="p-10"></p>
                        <ButtonComponent class="btn_md1_box on" txt="Button" />
                        <p className="p-10"></p>
                        <ButtonComponent class="btn_md1_box disable" txt="Button" />
                    </div>
                    <div className="p-20">
                        <ButtonComponent class="btn_md1_boxvl" txt="Button" />
                        <p className="p-10"></p>
                        <ButtonComponent class="btn_md1_boxvl on" txt="Button" />
                        <p className="p-10"></p>
                        <ButtonComponent class="btn_md1_boxvl disable" txt="Button" />
                    </div>
                    <div className="p-20">
                        <ButtonComponent class="btn_md1_norm" txt="Button" />
                        <p className="p-10"></p>
                        <ButtonComponent class="btn_md1_norm on" txt="Button" />
                        <p className="p-10"></p>
                        <ButtonComponent class="btn_md1_norm disable" txt="Button" />
                    </div>
                </section>

                <section className="demo_line">
                    <div className="p-20">
                        <ButtonComponent class="btn_lg1" txt="Create a new account" />
                    </div>
                    <div className="p-20">
                        <ButtonComponent class="btn_lg1_on" txt="Login" />
                    </div>
                </section>

                <section className="demo_line">
                    <div className="p-20">
                        <ButtonComponent class="btn_sm1" txt="Invite" />
                    </div>
                    <div className="p-20">
                        <ButtonComponent class="btn_sm1_trans" txt="Invite" />
                    </div>
                    <div className="p-20">
                        <ButtonComponent class="btn_sm1_on" txt="Invite" />
                    </div>
                </section>

                <section className="demo_line">
                    <div className="p-20">

                    </div>
                </section>

            </div>
        </div>
    );
}