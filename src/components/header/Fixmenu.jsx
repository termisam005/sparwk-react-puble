import SlideToggle from "react-slide-toggle";

export default function Fixmenu() {

    return (
        <SlideToggle duration={150}
            render={({ toggle, setCollapsibleElement }) => (
                <section className="gr_fixmenu">
                    <p className="btn_menu" onClick={toggle}></p>
                    <div className="fixmenu_bar" ref={setCollapsibleElement}>
                        <div className="fixmenu">
                            <div className="fix_nemo">
                                <img className="icon_fix" src="../resources/images/sv_fix_note.svg" alt="icon note" />
                                <img className="icon_fix_on" src="../resources/images/sv_fix_note_on.svg" alt="icon note" />
                            </div>
                            <section className="hidden_menu">
                                <div className="top">
                                    <h1>Project</h1>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>Create Project</a>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>Project List</a>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>Timeline View</a>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>Project Recommendation</a>
                                </div>
                            </section>
                        </div>
                        <div className="fixmenu">
                            <div className="fix_nemo">
                                <img className="icon_fix" src="../resources/images/sv_fix_music.svg" alt="icon music" />
                                <img className="icon_fix_on" src="../resources/images/sv_fix_music_on.svg" alt="icon music" />
                            </div>
                            <section className="hidden_menu">
                                <div className="top">
                                    <h1>Catalog</h1>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>Song library</a>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>Resistration</a>
                                </div>
                            </section>
                        </div>
                        <div className="fixmenu">
                            <div className="fix_nemo">
                                <img className="icon_fix" src="../resources/images/sv_fix_person.svg" alt="icon person" />
                                <img className="icon_fix_on" src="../resources/images/sv_fix_person_on.svg" alt="icon person" />
                            </div>
                            <section className="hidden_menu">
                                <div className="top">
                                    <h1>Artist</h1>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>List</a>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>Resistration</a>
                                </div>
                            </section>
                        </div>
                        <div className="fixmenu">
                            <div className="fix_nemo">
                                <img className="icon_fix" src="../resources/images/sv_fix_data.svg" alt="icon data" />
                                <img className="icon_fix_on" src="../resources/images/sv_fix_data_on.svg" alt="icon data" />
                            </div>
                            <section className="hidden_menu">
                                <div className="top">
                                    <h1>Reports</h1>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>Detailed</a>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>Reaal-time </a>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>Industry database</a>
                                </div>
                            </section>
                        </div>
                        <div className="fixmenu">
                            <div className="fix_nemo">
                                <img className="icon_fix" src="../resources/images/sv_fix_people.svg" alt="icon people" />
                                <img className="icon_fix_on" src="../resources/images/sv_fix_people_on.svg" alt="icon people" />
                            </div>
                            <section className="hidden_menu">
                                <div className="top">
                                    <h1>Connect</h1>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>List</a>
                                </div>
                            </section>
                        </div>
                        <div className="fixmenu">
                            <div className="fix_nemo">
                                <img className="icon_fix" src="../resources/images/sv_fix_doctor.svg" alt="icon doctor" />
                                <img className="icon_fix_on" src="../resources/images/sv_fix_doctor_on.svg" alt="icon doctor" />
                            </div>
                            <section className="hidden_menu">
                                <div className="top">
                                    <h1>Education</h1>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>List</a>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>Registration</a>
                                </div>
                            </section>
                        </div>
                        <div className="fixmenu">
                            <div className="fix_nemo">
                                <img className="icon_fix" src="../resources/images/sv_fix_card.svg" alt="icon card" />
                                <img className="icon_fix_on" src="../resources/images/sv_fix_card_on.svg" alt="icon card" />
                            </div>
                            <section className="hidden_menu">
                                <div className="top">
                                    <h1>News Feed</h1>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>List</a>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>Resistration</a>
                                </div>
                            </section>
                        </div>
                        <div className="fixmenu">
                            <div className="fix_nemo">
                                <img className="icon_fix" src="../resources/images/sv_fix_headphone.svg" alt="icon headphone" />
                                <img className="icon_fix_on" src="../resources/images/sv_fix_headphone_on.svg" alt="icon headphone" />
                            </div>
                            <section className="hidden_menu">
                                <div className="top">
                                    <h1>Service Center</h1>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>List</a>
                                </div>
                                <p className="line1"></p>
                                <div className="menus">
                                    <a>Resistration</a>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            )}
        />
    )
}
