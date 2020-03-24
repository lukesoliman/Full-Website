function onClick(){
    var min = document.getElementById('min').value
    var max = document.getElementById('max').value
    document.getElementById('result').innerText= Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min);

}