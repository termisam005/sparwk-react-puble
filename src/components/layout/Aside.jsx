import ImgComponent from "../common/ImgComponent";

export default function Aside() {
    return (
        <aside className="the_aside">
            <div className="prof_zone">
                <div className="prof_wrap">
                    <div className="prof_shadow120">
                        <p className="prof_c120">
                            <span className="line_over"></span>
                            <ImgComponent src="../resources/images/thumb_ex1.jpg" />
                        </p>
                    </div>
                    <p className="prof_name_big">Jin Suk Choi</p>
                </div>
            </div>
            <p className="line1">
                <span className="cenbar">
                    Not Verified
                </span>
            </p>
            <div className="roll_zone">
                <article className="roll_contain">
                    <div className="roll_cont">
                        <a className="tell">Tell us about your self</a>
                    </div>
                </article>
            </div>
            <p className="line1"></p>
            <div className="calen_zone">
                <a className="view_go">
                    <span>View more</span>
                    <ImgComponent src="../resources/images/sv_arr_view.svg" />
                </a>
                <section className="the_calendar">
                    <article className="calendar_top">
                        <p className="name">Calendar</p>
                        <span className="rlbt on">
                            <img src="../resources/images/sv_line_mid.svg" alt="line" />
                        </span>
                    </article>
                    <p className="line1"></p>
                    <article className="calendar_box">
                        <div className="canlen_month">
                            <h1 className="title">December 2021</h1>
                            <div className="contact">
                                <span className="rlbt">
                                    <ImgComponent src="../resources/images/sv_arr20_left_wh.svg" />
                                </span>
                                <span className="rlbt">
                                    <ImgComponent src="../resources/images/sv_arr20_right_wh.svg" />
                                </span>
                            </div>
                        </div>
                        <table className="calen_table">
                            <thead>
                                <tr>
                                    <th>S</th>
                                    <th>M</th>
                                    <th>T</th>
                                    <th>W</th>
                                    <th>T</th>
                                    <th>F</th>
                                    <th>S</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="end">28</td>
                                    <td className="end">29</td>
                                    <td className="end">30</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td className="saturday">4</td>
                                </tr>
                                <tr>
                                    <td className="sunday">5</td>
                                    <td>6</td>
                                    <td>7</td>
                                    <td>8</td>
                                    <td>9</td>
                                    <td>10</td>
                                    <td className="saturday">11</td>
                                </tr>
                                <tr>
                                    <td className="sunday">12</td>
                                    <td>13</td>
                                    <td>14</td>
                                    <td>15</td>
                                    <td>16</td>
                                    <td>17</td>
                                    <td className="saturday">18</td>
                                </tr>
                                <tr>
                                    <td className="sunday">19</td>
                                    <td>20</td>
                                    <td>21</td>
                                    <td>22</td>
                                    <td>23</td>
                                    <td>24</td>
                                    <td className="saturday">25</td>
                                </tr>
                                <tr>
                                    <td className="sunday">26</td>
                                    <td>27</td>
                                    <td>28</td>
                                    <td>29</td>
                                    <td>30</td>
                                    <td>31</td>
                                    <td className="end">1</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="calen_end">
                            <a className="view_go">
                                <span>View more</span>
                                <ImgComponent src="../resources/images/sv_arr_view.svg" />
                            </a>
                        </div>
                    </article>
                </section>
            </div>
        </aside>
    );
}