// function GRadioLink(props) {
//     let show;
//     if (props.radioOnly) {
//         show =
//             <span>
//                 <input type="radio" className="radiobutton"{...props} />
//                 {props.text}
//             </span>
//         console.log("9");
//     }

//     else {
//         show =
//             <span>
//                 <input type="radio" className="radiobutton" {...props} />
//                 {props.text}<a href={props.link}> Upgrade this feature. Upgrade Now!</a>
//             </span>
//         console.log("18")
//     }

//     return (
//         <div>
//             {show}
//         </div>

//     )
// }

function GRadioLink (props) {
  const radioonly = (
    <div className={"form-input radio"}>
      <input
        type='radio'
        className='radiobutton'
        name={props.name}
        id={props.id}
        value={props.value}
        onClick={props.onClick}
      />
      <span>
      {props.text}
      </span>
    </div>
  )
  const linked = (
    <div className={"form-input radio"}>
      <input
       type='radio'
       name={props.name}
       id={props.id}
       value={props.value}
       onClick={props.onClick}
       />
      <span>
      {props.text}
      </span>
      <a href={props.link}> Upgrade this feature. Upgrade Now!</a>
    </div>
  )

  var radio = props.radionly == 'true' ? radioonly : linked
  return radio
}
