

let style;

document.getElementById("colorChange").addEventListener("click", () => {
    style = document.getElementById("style").href;
    console.log(style.indexOf("2"))
    if (style.indexOf("style1") != -1){
    console.log("2")
        
        document.getElementById("style").href = "./style/style2.css";
    }
    else{
    console.log("1")

        document.getElementById("style").href = "./style/style1.css";
    }

})