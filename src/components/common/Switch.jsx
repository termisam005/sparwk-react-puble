import React, { useState } from "react";

const Switch = () => {
    const [checked, setChecked] = useState(false);
    const toggleSwitch = () => {
        setChecked(!checked);
    }

    return (
        <div onClick={toggleSwitch} className={checked ? "swith_room on" : "swith_room"}>
            <input className="switch-checkbox" type="checkbox"
            />
            <label className="switch-label">
                <span className={`switch-button`} />
            </label>
        </div>
    );
};

export default Switch;
