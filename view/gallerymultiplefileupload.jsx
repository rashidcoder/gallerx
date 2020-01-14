class GalleryMultipleFileUpload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view:[],
      formData: {
        imageurl: {
          value: ''
        },
      },
      imageData: {},
    }

    this.filechangehandler = this.filechangehandler.bind(this)
    this.show = this.show.bind(this)

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
    })
    // console.log(JSON.stringify(this.state.formData))
  }
  _renderFiles(files) {
    for (const file of files) {
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        GalleryMultipleFileUpload._setImages(reader.result, file)
        var tempDiv = '<span className={"file-name"}>' + file.name + '</span>' + '<span className={"file-size"}>' + (file.size / 1024) + 'kb' + '</span>' + '<div className={"progress-bar"}></div>'
        document.getElementsByClassName('progress-bar-contanier')[0].innerHTML += tempDiv

      }
      reader.onerror = function (error) {
        console.log("Error: ", error)
      }

    }
  }

  filechangehandler(e) {
    var files = e.target.files
    this._renderFiles(files)
    console.log("dataaaaaaaaaaaaaaaaaaa::::"+JSON.stringify(this.state.view))
  }
  static _setImages = (img, file) => {
  }
  static _setImages = (img, file) => {

    var imgData = { name: file.name, size: file.size, hex: img }
    //image+= { name: file.name, size: file.size, hex: img }
    console.log("line 76 inside function :::" + JSON.stringify(imgData.name))
    console.log("line 76 inside function :::" + JSON.stringify(imgData.size))
  }

  show(name,size) {

    // console.log("state data  show method  :::::73"+JSON.stringify(file))
    this.setState({
    
      // view: this.state.view.concat(<div><span className={"file-name"}>{name}</span> <span className={"file-size"}>{size}</span> <div className={"progress-bar"}></div></div>)

      // view: [...this.state.view,(<div><span className={"file-name"}>{name}</span> <span className={"file-size"}>{size}</span> <div className={"progress-bar"}></div></div>)]
      // view :this.state.view.push(<div><span className={"file-name"}>{name}</span> <span className={"file-size"}>{size}</span> <div className={"progress-bar"}></div></div>)

    })

    
  }
  submit = () => {
    console.log('line 33 clicked::::' + this.state.imageData)
    
    
    // this.setState({
    //   imageData: { name: file.name, size: file.size,hex:img }
    // })
    //this.state.imageData=imgData
    // this.setState({
    //   imageData:imgData
    // })
    // console.log("updated state"+this.state.imageData)
    //this.statedata(imgData)
    //console.log("line 76 inside function :::" + JSON.stringify(imgData))
    // show(imgData)
  }
  show(imgData) {
    console.log("state data  show :::::73")
  }
  submit = () => {
    console.log('line 33 clicked::::' + this.state.imageData)
  }
  render() {
    const { formData } = this.state
    // const show = imgData=>{
    //     console.log("this is show")
    // }
    window['view'] = this.state.view;

    return (
      <div className={"box-container"}>
        <div className={"file-container drage"}>
          <GInputFileUpload
            name={"imgUpload"}
            multiple
            maxfiles={3}
            maxfilesize={10000000000}
            minfilesize={0}
            accepts={["image/png", ".pdf", "audio/*"]}
            onChange={this.filechangehandler}
          />

          <div className={"drage-box"} >

            <span className={"icon icon-fileupload"}>+</span>
            <h1>Drage file here</h1>
          </div>
        </div>

        {/* // sencond box  */}

        <div className={"file-container choose"}>
          <h2 className={"header"}>File Upload</h2>
          <div className={"progress-bar-contanier"}>
            {this.state.view}
            
            {/* {this.state.view.map(item => (
            {item}
          ))} */}
          </div>
          <div className={"form-input-box"}>

            <GInput
              id={'imageurl'}
              className="imageurl"
              name="imageurl"
              value={formData.imageurl.value}
              type={'text'}
              placeholder={'URL to file'}
              className={'input'}
              onChange={this.changeHandler}
            />

            <GInputFileUpload
              name={"imgUpload"}
              multiple
              maxfiles={3}
              maxfilesize={10000000000}
              minfilesize={0}
              accepts={["image/png", ".pdf", "audio/*"]}
              onChange={this.filechangehandler}
            />
            <GButton
              type={"submit"}
              className={"btn btn-upload"}
              text={"Upload"}
              onClick={this.submit}
            />
          </div>
        </div>



      </div>
    )
  }
}















// class GalleryMultipleFileUpload extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       data: [],
//       formData: {
//         imageurl: {
//           value: ''
//         },
//       },
//       imageData: {},


//     }

//     this.filechangehandler = this.filechangehandler.bind(this)
//     this.show = this.show.bind(this)

//   }
//   changeHandler = e => {
//     const name = e.target.name
//     const value = e.target.value
//     this.setState({
//       formData: {
//         ...this.state.formData,
//         [name]: {
//           ...this.state.formData[name],
//           value
//         }
//       }
//     })
//     // console.log(JSON.stringify(this.state.formData))
//   }

//   static setStateData(data) {
//     new GalleryMultipleFileUpload().setState({
//       data: data
//     })
//   }
//   _renderFiles(files) {
//     for (const file of files) {
//       let reader = new FileReader()
//       reader.readAsDataURL(file)
//       reader.onload = () => {
//         GalleryMultipleFileUpload._setImages(reader.result, file)
//         GalleryMultipleFileUpload.setStateData(file);
//         const ProgressDiv = () => {
//           return (
//             <div>
//               <span className={"file-name"}> file.name
//                   </span> <span className={"file-size"}>'(file.size / 1024) kb'
//                   </span> <span className={"progress-bar"}></span>
//             </div>
//           );
//         }



//         ReactDOM.render(
//           <ProgressDiv />, document.getElementById("progress-bar-contanier"));
//       }
//       reader.onerror = function (error) {
//         console.log("Error: ", error)
//       }

//     }
//   }

//   filechangehandler(e) {
//     var files = e.target.files
//     this._renderFiles(files)
//   }
//   static _setImages = (img, file) => {

//     var imgData = { name: file.name, size: file.size, hex: img }
//     //image+= { name: file.name, size: file.size, hex: img }
//     console.log("line 76 inside function :::" + JSON.stringify(imgData.name))
//     console.log("line 76 inside function :::" + JSON.stringify(imgData.size))

//     // this.setState({
//     //   imageData: { name: file.name, size: file.size,hex:img }
//     // })
//     //this.state.imageData=imgData
//     // this.setState({
//     //   imageData:imgData
//     // })
//     // console.log("updated state"+this.state.imageData)
//     //this.statedata(imgData)
//     //console.log("line 76 inside function :::" + JSON.stringify(imgData))
//     // show(imgData)
//   }
//   show(imgData) {
//     console.log("state data  show :::::73")
//   }
//   submit = () => {
//     console.log('line 33 clicked::::' + this.state.imageData)
//   }
//   render() {
//     const { formData } = this.state
//     // const show = imgData=>{
//     //     console.log("this is show")
//     // }
//     console.log("vlaue of static data " + this.state.data)
//     return (
//       <div className={"box-container"}>
//         <div className={"file-container drage"}>
//           <GInputFileUpload
//             name={"imgUpload"}
//             multiple
//             maxfiles={3}
//             maxfilesize={10000000000}
//             minfilesize={0}
//             accepts={["image/png", ".pdf", "audio/*"]}
//             onChange={this.filechangehandler}
//           />

//           <div className={"drage-box"} >

//             <span className={"icon icon-fileupload"}>+</span>
//     <h1>Drage file here { this.state.data }</h1>
//           </div>
//         </div>

//         {/* // sencond box  */}
//         {/* //state.uploadedImages.loop as file */}
//         <div className={"file-container choose"}>
//           <h2 className={"header"}>File Upload</h2>
//           <div id={"progress-bar-contanier"}>
//             {/* <div>
//               <span className={"file-name"}> file.name
//                   </span> <span className={"file-size"}>'(file.size / 1024) kb'
//                   </span> <span className={"progress-bar"}></span>
//             </div> */}
//           </div>
//           <div className={"form-input-box"}>

//             <GInput
//               id={'imageurl'}
//               className="imageurl"
//               name="imageurl"
//               value={formData.imageurl.value}
//               type={'text'}
//               placeholder={'URL to file'}
//               className={'input'}
//               onChange={this.changeHandler}
//             />

//             <GInputFileUpload
//               name={"imgUpload"}
//               multiple
//               maxfiles={3}
//               maxfilesize={10000000000}
//               minfilesize={0}
//               accepts={["image/png", ".pdf", "audio/*"]}
//               onChange={this.filechangehandler}
//             />
//             <GButton
//               type={"submit"}
//               className={"btn btn-upload"}
//               text={"Upload"}
//               onClick={this.submit}
//             />
//           </div>
//         </div>



//       </div>
//     )
//   }
// }

