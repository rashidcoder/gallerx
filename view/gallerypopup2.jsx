class GalleryPopUp2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formData:{
                filesource:''
            }
        }
    }

     handleclick=(e)=>{
        var val =  e.target.value;
        this.setState({
            formData:{
                filesource:val            
            }
        }
        )        
    }

    
    render() {
        const{formData}=this.state
        console.log("23")
        return (
            <div>
                <h1>{this.state.formData.filesource}</h1>
                <h2 className="header">Add New Gallery WIZARD</h2>
                <form className="contanier" >
                    <GLabel
                        text={"Chose the source of images"}
                        className={"label"}
                    />
                    <div className="form-input">
                        <GRadioLink
                            name="sourceOfImage"
                            id={"mediaLibrary"}
                            value={"mediaLibrary"}
                            text={"Media Library"}
                            radionly={"true"}
                            onClick={this.handleclick}
                            //onChange={this.handleclick}
                        />
                        <GRadioLink
                            name="sourceOfImage"
                            id={"recentpost"}
                            value={"recentpost"}
                            text={"Recent Post"}
                            radionly={"false"}
                            link={"#"}
                            onClick={this.handleclick}
                            //onChange={this.handleclick}
                        />
                        <GRadioLink
                            name="sourceOfImage"
                            id={"woocommerceproduct"}
                            value={"woocommerceproduct"}
                            text={"Woo Commerece product"}
                            radionly={"false"}
                            link={"#"}
                            onClick={this.handleclick}
                            //onChange={this.handleclick}
                        />
                    </div>

                    <div className="form-buttons">
                        <GButton
                            type="submit"
                            className={"button"}
                            text={"Preview"}
                            id="previewButton"
                        />
                        <GButton
                            type={"buttton"}
                            className={"button"}
                            text={"Next"}
                            onClick={this.submit}
                        />
                    </div>
                </form>
            </div>
        )
    }
}




