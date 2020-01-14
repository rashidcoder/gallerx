
class GalleryLayout extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            images: [ 
                
                // {
                //     path: "http://192.168.18.67/gallerx/assets/images/1.jpg",
                //     title: "xyz name",
                //     description: "description"
                // },
                // {
                //     path: "http://192.168.18.67/gallerx/assets/images/2.jpg",
                //     title: "xyz name",
                //     description: "description"
                // },
                // {
                //     path: "http://192.168.18.67/gallerx/assets/images/3.jpg",
                //     title: "xyz name",
                //     description: "description"
                // },
                // {
                //     path: "http://192.168.18.67/gallerx/assets/images/4.jpg",
                //     title: "xyz name",
                //     description: "description"
                // },
                // {
                //     path: "http://192.168.18.67/gallerx/assets/images/1.jpg",
                //     title: "xyz name",
                //     description: "description"
                // },
                // {
                //     path: "http://192.168.18.67/gallerx/assets/images/2.jpg",
                //     title: "xyz name",
                //     description: "description"
                // },
                // {
                //     path: "http://192.168.18.67/gallerx/assets/images/3.jpg",
                //     title: "xyz name",
                //     description: "description"
                // },
            ]

        }
    }
    
    
async componentDidMount() {
    
        var API_KEY = '14857276-84874e49d7eb4b0603ddb391e';
        var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent('red roses');        
        var data = await axios.get(URL);
        this.setState({
            images:data.data.hits
        })
}
    render() {
        const { images } = this.state
        var arr = []
        
        images.forEach(item => {
            console.log("INSIDE THE FOREACH 37::::" + JSON.stringify(item))
            arr.push(
                <div className={"img"}>
                    <a href={item.largeImageURL}>
                        <img src={item.largeImageURL} />
                    </a>
                    <div className={"image-description"}>Size of image{Math.round((item.imageSize)/1024)}KB</div>
                </div>
            )
        });
        return (
            <div className={'box-container gallery'}>
                <h1>images</h1>
                <div className={"row"}>
                    {arr}
                </div>
            </div>
        )
    }
}