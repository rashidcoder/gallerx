
function GButton(props) {
    return (
        <div className="form-button button">
<button 
type={props.type}
className={props.className}

{...props}
>{props.text}</button>
        </div>)
}
