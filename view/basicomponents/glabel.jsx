
function GLabel(props) {
    return (

        <div className="form-label label">
            <label 
            className={props.className}
            htmlFor={props.htmlFor}
            >{props.text}</label>
        </div>
    )
}
