var buttons = document.getElementsByClassName ('Button');

console.log(buttons);
console.log(buttons.length);

for (k=0; k<buttons.length; k++) {
    var text = buttons[k].innerText;
    console.log(text);
    alert(text);
    };


