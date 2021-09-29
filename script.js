function insert(num) {
    document.getElementById('result').innerHTML += num
}

function clean() {

    document.getElementById('result').innerHTML = ''

}

function back() {

    let result = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = result.substring(0, result.length -1)

}

function calculate() {

    var result = document.getElementById('result').innerHTML
    if(result) {
        document.getElementById('result').innerHTML = eval(result)
    }

    else {
        alert('Não há nada para calcular :/')
    }

}