let display = document.getElementById("display");

let colors = {
    "colors": [
        {
            "color": "black",
            "category": "hue",
            "type": "primary",
            "code": {
                "rgba": [255, 255, 255, 1],
                "hex": "#000"
            }
        },
        {
            "color": "white",
            "category": "value",
            "code": {
                "rgba": [0, 0, 0, 1],
                "hex": "#FFF"
            }
        },
        {
            "color": "red",
            "category": "hue",
            "type": "primary",
            "code": {
                "rgba": [255, 0, 0, 1],
                "hex": "#F00"
            }
        },
        {
            "color": "blue",
            "category": "hue",
            "type": "primary",
            "code": {
                "rgba": [0, 0, 255, 1],
                "hex": "#00F"
            }
        },
        {
            "color": "yellow",
            "category": "hue",
            "type": "primary",
            "code": {
                "rgba": [255, 255, 0, 1],
                "hex": "#FF0"
            }
        },
        {
            "color": "green",
            "category": "hue",
            "type": "secondary",
            "code": {
                "rgba": [0, 255, 0, 1],
                "hex": "#0F0"
            }
        }
    ]
}


colors['colors'].forEach(color => {


    let divColor = document.createElement("div");
    divColor.style.backgroundColor = color.code.hex;
    divColor.classList.add("card");

    let subDiv = document.createElement("div");
    let subDiv2 = document.createElement("div");

    let h1 = document.createElement("h1");
    h1.textContent = color.color;
    subDiv.appendChild(h1);

    let p1 = document.createElement("p");
    p1.textContent = color.category;
    subDiv.appendChild(p1);

    let p2 = document.createElement("p");
    p2.textContent = color.type;
    subDiv.appendChild(p2);

    let p3 = document.createElement("p");
    p3.textContent = color.code.rgba;
    subDiv2.appendChild(p3);

    let p4 = document.createElement("p");
    p4.textContent = color.code.hex;
    subDiv2.appendChild(p4);

    divColor.appendChild(subDiv);
    divColor.appendChild(subDiv2)

    display.appendChild(divColor);
});


