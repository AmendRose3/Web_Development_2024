var btn = document.getElementById("btn");
var animal = document.getElementById("info");

btn.addEventListener("click", function () {
    var req = new XMLHttpRequest();
    req.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
    req.onload = function () {
        var data = JSON.parse(req.responseText);
        renderHTML(data);
    };
    req.send();
});

function renderHTML(data) {
    var str = "";
    for (var i = 0; i < data.length; i++) {
        str += "<p>" + data[i].name + " is a " + data[i].species + "</p>";
    }
    animal.insertAdjacentHTML('beforeend', str);
}

// [
//     {
//       "name": "Meowsy",
//       "species" : "cat",
//       "foods": {
//         "likes": ["tuna", "catnip"],
//         "dislikes": ["ham", "zucchini"]
//       }
//     },
//     {
//       "name": "Barky",
//       "species" : "dog",
//       "foods": {
//         "likes": ["bones", "carrots"],
//         "dislikes": ["tuna"]
//       }
//     },
//     {
//       "name": "Purrpaws",
//       "species" : "cat",
//       "foods": {
//         "likes": ["mice"],
//         "dislikes": ["cookies"]
//       }
//     }
//   ]