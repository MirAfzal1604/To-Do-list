let input = document.querySelector("#input");
let push = document.querySelector("#push");
let get = document.querySelector("#get");

push.addEventListener("click", () => {
    var word = input.value.trim();
    if (word.length > 0) {
        get.innerHTML += `
        <div class="getText">
            <p class="text">${word}</p>
            <button class="delete">
                <i class="fas fa-trash"></i>
            </button> 
        </div>   
        `;

        var currently = document.querySelectorAll(".delete");
        var text = document.querySelectorAll(".text");

        for (var i = 0; i < currently.length; i++) {
            currently[i].onclick = function() {
                this.parentNode.remove();
            };
        }

        for (var i = 0; i < text.length; i++) {
            text[i].onclick = function() {
                this.classList.toggle("line");
            };
        }

        input.value = "";
    }
});