<!DOCTYPE html>
<html lang="en">
<head>

    

</head>
<body>
    <div id="app"></div>


    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script type="text/jsx" src="jsx/gallery.jsx"> </script>
 
     
        <?php 
        
        const rend = true;
        if(rend) { ?>
           <script type="text/jsx"> 
                ReactDOM.render(<Temp name={<?php echo rend; ?>}/>, document.getElementById("app")); 
            </script>
        <?php }
        
        ?>

   
</body>
</html>