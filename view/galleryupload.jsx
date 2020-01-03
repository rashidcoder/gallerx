class GalleryUpload extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.filechangehandler = this.filechangehandler.bind(this)
  }

  _renderFiles (files) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        GalleryUpload._setImages(reader.result)
        console.log("line no 21 " + reader.result)
      }
      reader.onerror = function (error) {
        console.log("Error: ", error)
      }
    }
  }

  filechangehandler (e) {
    var files = e.target.files
    this._renderFiles(files)
  }
  static _setImages = newImg => {
    // pass the images here to database
    console.log("line 36 inside function :::" + newImg)
  }

  render () {
    return (
      <div className={"box-container"}>
        <div className={"form-container file-container"}>
          <div className={"form-input-box"}>
            
            <GInputFileUpload
              name={"imgUpload"}
              multiple
              maxfiles={3}
              maxfilesize={10000000000}
              minfilesize={0}
              accepts={["image/png", ".pdf", "audio/*"]}
              onChange={this.filechangehandler}
            />
          </div>
          <div className={"form-buttons-box"}>
            <GButton
              type={"submit"}
              className={"btn btn-prev"}
              text={"Previous"}
            />
            <GButton
              type={"submit"}
              className={"btn btn-next"}
              text={"Next"}
              onClick={this.submit}
            />
          </div>
        </div>
      </div>
    )
  }
}
