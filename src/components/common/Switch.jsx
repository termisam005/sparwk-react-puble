import React from "react";

const Switch = ({ isOn, handleToggle, colorOne, colorTwo }) => {
    return (
        <div className="swith_room">
            <input
                checked={isOn}
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

export default Switch;
