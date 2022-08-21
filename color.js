// function colorholder(){
//     var color = document.getElementById('color').value;
//     document.body.style.backgroundColor = color;
//     document.getElementById('box').value = color;
// }

// document.getElementById('color');
// addEventListener('input', colorholder);

var color = document.getElementById("color");
document.body.style.backgroundColor = color.value;
// document.getElementById('box').value = color.value;

function colorholder(event) {

    // document.getElementById("color").value;
    document.getElementById('box').value = event.target.value;
    document.body.style.backgroundColor = event.target.value;
}

color.addEventListener("input", colorholder);
