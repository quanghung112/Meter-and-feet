var dem = 0;

function Change() {
    dem++;
    if (dem % 2 == 0) {
        document.getElementById('Unit1').innerHTML = 'Meter:';
        document.getElementById('Unit2').innerHTML = 'Feet:';
    } else {
        document.getElementById('Unit1').innerHTML = 'Feet:';
        document.getElementById('Unit2').innerHTML = 'Meter:';
    }

}

function Chuyendoi(valNum) {
    let valNum1 = parseFloat(valNum);
    if (document.getElementById('input').value != '') {
        if (dem % 2 == 0) {
            document.getElementById('result').innerHTML = valNum1*3.279;
        } else {
            document.getElementById('result').innerHTML = valNum1 * 0.305;
        }
    } else {
        document.getElementById('result').innerHTML = '';
    }
}