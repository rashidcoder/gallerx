class GalleryDetails extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      formData: {
        galleryName: {
          value: ''
        },
        galleryDescription: {
          value: ''
        }
      }
    }
  }
  changeHandler = e => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: {
          ...this.state.formData[name],
          value
        }
      }
    }),
      console.log(JSON.stringify(this.state.formData))
  }
  submit = () => {
    console.log('line 32::::')
  }
  render () {
    const { formData } = this.state
    return (
      <div className='box-container'>
        <h2 className='header'>Add New Gallery WIZARD</h2>

        <form className='form-container'>
          <div className='form-input-box'>
            <GLabel
              text={'Name of Gallery'}
              className={'label'}
              htmlFor={'galleryName'}
            />
            <GInput
            id={'galleryName'}
            name="galleryName"
            value={formData.galleryName.value}
            type={'text'}
            placeholder={'Gallery'}
            className={'input'}
            onChange={this.changeHandler}
            />
          </div>
          <div className='form-input-box'>
            <GLabel
              text={'Description'}
              className={'label'}
              htmlFor='galleryDescription'
            />
            <GTextArea
              name='galleryDescription'
              id={'galleryDescription'}
              value={formData.galleryDescription.value}
              rows={'8'}
              cols={'50'}
              className={'textarea'}
              placeholder={'Description'}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-buttons-box">
          <GButton
            type={'buttton'}
            className={'button'}
            text={'Next'}
            onClick={this.submit}
          />
          </div>
        </form>
      </div>
    )
  }
}
