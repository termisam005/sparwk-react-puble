import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import InputComponent from "../../components/common/InputComponent";
import ButtonWith from "../../components/common/ButtonWith";
//import Switch from "../../components/common/Switch";

export default function Login2() {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const [checked, setChecked] = useState(true);

    return (
        <div className="wrap_login">

            <article className="zone_log">
                <section className="log_text">
                    <div className="the_title">
                        <h1>
                            <img src="../resources/images/logo_mid.png" alt="spawrk" />
                        </h1>
                        <p>YOU DESERVE BETTER</p>
                    </div>
                </section>

                <section className="log_box">
                    <div className="logbox_in">
                        <article className="form_group">
                            <div className="login_title">
                                <h1>
                                    <span onClick={goBack} className="go_back">
                                        <img src="../resources/images/arr_back_wh.png" alt="link back" />
                                    </span>
                                    <span>Enter your password</span>
                                </h1>
                            </div>
                            <div className="log_conts">
                                <div className="put_cont m-b-25">
                                    <div className="putt_box">
                                        <InputComponent type="password" class="wrput" placeholder="Password" />
                                        <div className="put_mess p-t-15">
                                            <div>
                                                <Switch isOn={checked} handleToggle={() => setChecked(!checked)}
                                                    colorOne="#999" colorTwo="#fff" />
                                            </div>
                                            <Link to="">
                                                <span className="sp_viol">
                                                    Reset Your Password
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="log_button_conts">
                                <div className="m-b-12">
                                    <Link to="">
                                        <button type="submit" className="btn_lg1 cor">
                                            Continue
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </article>
                        <div className="go_different">
                            <Link to="">
                                <span>
                                    Sign in to a different account
                                </span>
                                <img className="diff_img" src="../resources/images/sv_arr20_right_wh.svg" alt="go link" />
                            </Link>
                        </div>
                    </div>
                </section>
            </article>

        </div >
    )
}

const Switch = ({ isOn, handleToggle, colorOne, colorTwo }) => {
    return (
        <div className="swith_room">
            <input
                onChange={handleToggle}
                className="switch-checkbox"
                id={`switch`}
                type="checkbox"
            />
            <label
                style={{ background: isOn ? colorOne : colorTwo }}
                className="switch-label"
                htmlFor={`switch`}
            >
                <span className={`switch-button`} />
            </label>
        </div>
    );
};