class GalleryShortcodePopUP extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  handleclick = e => {
    var val = e.target.value
    this.setState({})
  }

  render () {
    const { formData } = this.state
    return (
      <div className={'box-container'}>
        <h2 className='header'>Success!</h2>
        <form className='form-contanier'>
          <span>
            <h2 className='text'>
              your gallery 'test' has been created copy the following shortcode.
            </h2>
          </span>
          <div className='form-input-box'>
            <GInput
              id={'galleryshortcode'}
              //value={formData.galleryName.galleryshortcode}
              type={'text'}
              className={'input'}
            />
          </div>
          <span>
            <h2 className='text'>
              and paste it inside a post or a page. otherwise
              <a href='#'>click here</a>
              to customize the gallery
            </h2>
          </span>
          <div className='form-buttons-box'>
            <GButton
              type={'submit'}
              className={'btn btn-close'}
              text={'close'}
              //onClick={this.submit}
            />
          </div>
        </form>
      </div>
    )
  }
}
