class GalleryTypes extends React.Component {
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
            <div className={"box-container"}>
                <h1>{formData.filesource}</h1>
                <h2 className="header">Add New Gallery WIZARD</h2>
                <form className="form-contanier" >
                    <GLabel
                        text={"Chose the source of images"}
                        className={"label"}
                    />
                    <div className="form-input-box">
                        <GRadioLink
                            name="sourceOfImage"
                            id={"mediaLibrary"}
                            value={"mediaLibrary"}
                            text={"Media Library"}
                            radionly={"true"}
                            onClick={this.handleclick}
                            
                        />
                        <GRadioLink
                            name="sourceOfImage"
                            id={"recentpost"}
                            value={"recentpost"}
                            text={"Recent Post"}
                            radionly={"false"}
                            link={"#"}
                            onClick={this.handleclick}
                            
                        />
                        <GRadioLink
                            name="sourceOfImage"
                            id={"woocommerceproduct"}
                            value={"woocommerceproduct"}
                            text={"Woo Commerece product"}
                            radionly={"false"}
                            link={"#"}
                            onClick={this.handleclick}
                            
                        />
                    </div>

                    <div className="form-buttons-box">
                        <GButton
                            type="submit"
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
                </form>
            </div>
        )
    }
}




