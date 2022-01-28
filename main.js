let input = document.querySelector("#input");
let button = document.querySelector("#push");
let list = document.querySelector("#todosList");

var myList = [];
var storage = window.localStorage;

loadFromStorage();

button.addEventListener("click", () => {
    var word = input.value.trim();
    if (word.length > 0) {
        myList.push({
            label: word,
            isDone: false,
        });

        refresh();

        input.value = "";
    }
});

function refresh() {
    var html = "";
    for (var index in myList) {
        var item = myList[index];
        html += `
        <div class="getText">
            <p onclick="toggleStatus(${index})" class="text ${(item.isDone ? "line" : "")}">${item.label}</p>
            <button class="delete" onclick="deleteItem(${index})">
                <i class="fas fa-trash"></i>
            </button> 
        </div>
        `;
    }

    list.innerHTML = html;

    storage.setItem("myList", JSON.stringify(myList));
}

function toggleStatus(index) {
    myList[index].isDone = !myList[index].isDone;

    refresh();
}

function deleteItem(index) {
    myList.splice(index, 1);

    refresh();
}

function loadFromStorage() {
    var data = storage.getItem("myList");

    if (data != null) {
        myList = JSON.parse(data);

        refresh();
    }
}