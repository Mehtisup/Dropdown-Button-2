<!DOCTYPE html>
<html>
<head>
<title>$UP</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="red">
<style>
* {
    box-sizing:border-box;
}
body {
    font-family:Arial, Helvetica, sans-serif;
}
.drop {
    position:relative;
    display:inline-block;
}
.btn {
    background-color: orangered;
    color:white;
    font-size:25px;
    padding: 10px;
    border-radius: 5px;
    outline:none;
    border:none;
    transition:0.4s;
}
.btn:hover {
    background-color: black;
}
.list {
    background-color: rgb(15, 95, 43);
    min-width:190px;
    overflow:hidden;
    border-radius: 5px;
    transition: 0.5s;
    height: 0;;
}
.list a {
    display: block;
    color:white;
    font-size: 20px;
    padding:10px;
    transition: 0.2s;
    text-decoration:none;
}
.list a:hover {
    background-color: cornflowerblue ;
}
.show {
    height:125px;
    transition:0.5s;
}
</style>
</head>
<body>
<div class="drop">
    <button class="btn" onclick="myFunction()">Select City</button>
    <div class="list" id="item">
        <a href="#">New York</a>
        <a href="#">Los Angles</a>
        <a href="#">Chicago</a>
    </div>
</div>
<h1>Are you OK?</h1>
<script>
function myFunction() {
    document.getElementById("item").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.btn')) {
        var x = document.getElementsByClassName("list");
        var i;
        for (i = 0 ; i < x.length ; i++) {
            var y = x[i];
            if (y.classList.contains('show')) {
                y.classList.remove('show');
            }
        }
    }
}
</script>
</body>
</html>
