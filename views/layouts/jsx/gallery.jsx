
class Gallery extends React.Component {

    constructor(props) {
        this.super(props)
    }
    render() {
        return (
            <div class="gallery">
                <h1 class="heading1">G<span class="heading2">ALLERY</span></h1>
                <div class="row">
                    <div class="column">
                        <ImageBox src={"../../pictures/Bird-3.jpg"} />
                        <ImageBox src={"../../pictures/1.jpg"} />
                        <ImageBox src={"../../pictures/2.jpg"} />
                        <ImageBox src={"../../pictures/3.jpg"} />
                    </div>
                    <div class="column">
                        <ImageBox src={"../../pictures/4.jpg"} />
                        <ImageBox src={"../../pictures/5.jpg"} />
                        <ImageBox src={"../../pictures/4.jpg"} />
                        <ImageBox src={"../../pictures/7.jpg"} />
                    </div>
                    <div class="column">
                        <ImageBox src={"../../pictures/2.jpg"} />
                        <ImageBox src={"../../pictures/3.jpg"} />
                        <ImageBox src={"../../pictures/5.jpg"} />
                        <ImageBox src={"../../pictures/1.jpg"} />
                    </div>
                    <div class="column">
                        <ImageBox src={"../../pictures/2.jpg"} />
                        <ImageBox src={"../../pictures/7.jpg"} />
                        <ImageBox src={"../../pictures/2.jpg"} />
                        <ImageBox src={"../../pictures/3.jpg"} />
                    </div>

                </div>
            </div>
        );
    }
}













// <!DOCTYPE html>
// <html>
// <style>
// * {
//   box-sizing: border-box;
// }

// body {
//   margin: 0;
//   font-family: Arial;
// }



// .row {

//   display: flex;

//   flex-wrap: wrap;
//   padding: 0 4px;
// }

// .column {

//   flex: 25%;
//   max-width: 25%;
//   padding: 0 4px;
// }

// .column img {
//   margin-top: 8px;
//   vertical-align: middle;
//   width: 100%;
// }


// </style>
// <body>

// <!-- Header -->
// <div class="header">
//   <h1>Responsive Image Grid</h1>
//   <p>Resize the browser window to see the responsive effect.</p>
// </div>

// <!-- Photo Grid -->
// <div class="row"> 
//   <div class="column">
//     <img src="/w3images/wedding.jpg" style="width:100%">
//     <img src="/w3images/rocks.jpg" style="width:100%">
//     <img src="/w3images/falls2.jpg" style="width:100%">
//     <img src="/w3images/paris.jpg" style="width:100%">
//     <img src="/w3images/nature.jpg" style="width:100%">
//     <img src="/w3images/mist.jpg" style="width:100%">
//     <img src="/w3images/paris.jpg" style="width:100%">
//   </div>
//   <div class="column">
//     <img src="/w3images/underwater.jpg" style="width:100%">
//     <img src="/w3images/ocean.jpg" style="width:100%">
//     <img src="/w3images/wedding.jpg" style="width:100%">
//     <img src="/w3images/mountainskies.jpg" style="width:100%">
//     <img src="/w3images/rocks.jpg" style="width:100%">
//     <img src="/w3images/underwater.jpg" style="width:100%">
//   </div>  
//   <div class="column">
//     <img src="/w3images/wedding.jpg" style="width:100%">
//     <img src="/w3images/rocks.jpg" style="width:100%">
//     <img src="/w3images/falls2.jpg" style="width:100%">
//     <img src="/w3images/paris.jpg" style="width:100%">
//     <img src="/w3images/nature.jpg" style="width:100%">
//     <img src="/w3images/mist.jpg" style="width:100%">
//     <img src="/w3images/paris.jpg" style="width:100%">
//   </div>
//   <div class="column">
//     <img src="/w3images/underwater.jpg" style="width:100%">
//     <img src="/w3images/ocean.jpg" style="width:100%">
//     <img src="/w3images/wedding.jpg" style="width:100%">
//     <img src="/w3images/mountainskies.jpg" style="width:100%">
//     <img src="/w3images/rocks.jpg" style="width:100%">
//     <img src="/w3images/underwater.jpg" style="width:100%">
//   </div>
// </div>

// </body>
// </html>
