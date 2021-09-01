function ProfComponent(props) {
    return (
        <div className={props.wrap_class}>
            <span className={props.comming_class}></span>
            <p className={props.prof_class}>
                <span className={props.line_class}></span>
                <img className={props.imgclass} src={process.env.PUBLIC_URL + props.src} alt={'image'} />
            </p>
        </div>
    );
}

export default ProfComponent;