import React, { Component } from "react";
import $ from "jquery";

class Blueline extends Component {

    componentDidMount() {
        $(function () {
            $(".nation_bar").click(function () {
                $(".nation_bar").removeClass("on");
                $(this).addClass("on");
            });
        });
    }

    render() {

        const nationBars = [
            { city: 'Chicago', mm: '(UTC-5)', time: 10, minutes: 24, hour: 'PM' },
            { city: 'Tokyo', mm: '(UTC-5)', time: 5, minutes: 22, hour: 'PM' },
            { city: 'London', mm: '(UTC-5)', time: 10, minutes: 24, hour: 'PM' },
            { city: 'Seoul', mm: '(UTC-5)', time: 10, minutes: 24, hour: 'PM' },
            { city: 'New york', mm: '(UTC-5)', time: 9, minutes: 22, hour: 'PM' },
        ];

        const renderBars = nationBars.map(nationbar => {
            return (
                <article className="nation_bar" key={nationbar.city}>
                    <p className="call">{nationbar.city}</p>
                    <div className="time">
                        <span className="when">
                            {nationbar.time}:{nationbar.minutes}
                        </span>
                        <span>{nationbar.hour}</span>
                        <span className="tc">{nationbar.mm}</span>
                    </div>
                </article>
            );
        });

        return (
            <section className="nation_line">
                {renderBars}
            </section>
        );
    }
}

export default Blueline;