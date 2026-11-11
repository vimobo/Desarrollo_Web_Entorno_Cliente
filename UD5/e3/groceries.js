let groceryList = document.getElementById("groceryList");
let list = document.getElementById("list");
let itemSubmit = document.getElementById("itemSubmit");

itemSubmit.addEventListener("click", () => {
    let item = document.getElementById("item");

    let div = document.createElement("div");
    let p = document.createElement("p");
    let deleteButton = document.createElement("button");
    let input = document.createElement("input");

    input.type = "checkbox";

    deleteButton.innerHTML = "🚮";
    deleteButton.className = "deleteButton";

    div.appendChild(p);
    div.appendChild(input);
    div.appendChild(deleteButton);

    p.innerHTML = item.value;
    div.className = "groceryItem";

    list.appendChild(div);
})

list.addEventListener("click", (event) => {
    let target = event.target;

    if (target.className == "deleteButton") {
        let groceryItem = target.closest(".groceryItem");

        groceryItem.classList.add("removing");

        groceryItem.addEventListener("animationend", () => {
            groceryItem.remove();
        });
    }
})

