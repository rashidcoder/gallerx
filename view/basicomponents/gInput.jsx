function GInput (props) {
  return (
    <div className='form-input input'>
      <input {...props} />
    </div>
  )
}

function GInputFileUpload (props) {
 
  return (
    <div className={'form-input file'}>
      <input type="file" {...props} 
      />
      <span className={'button'}>Choose</span>
      <span className={'label'} data-js-label>  No file selected   </span>
    </div>
  )
}