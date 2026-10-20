function checkRect() {
    let a = parseFloat(document.getElementById('val_a').value);
    let b = parseFloat(document.getElementById('val_b').value);
    let c = parseFloat(document.getElementById('val_c').value);
    let d = parseFloat(document.getElementById('val_d').value);

    let result = document.getElementById('result');

    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
        result.innerText = "Пожалуйста, заполните все поля!";
        result.style.color = "red";
        return;
    }

    if (a <= 0 || b <= 0 || c <= 0 || d <= 0) {
        result.innerText = "Все числа должны быть положительными!";
        result.style.color = "red";
        return;
    }

    if ((a < c && b < d) || (a < d && b < c)) {
        result.innerText = "Прямоугольник " + a + "x" + b + " может уместиться внутри прямоугольника " + c + "x" + d;
        result.style.color = "green";
    } else {
        result.innerText = "Прямоугольник " + a + "x" + b + " НЕ может уместиться внутри прямоугольника " + c + "x" + d;
        result.style.color = "red";
    }
}