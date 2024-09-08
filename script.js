function add() {
    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;
    //console.log(inputVal);
    const result = parseFloat(input1) + parseFloat(input2);
    console.log(result);
    document.getElementById('result').innerHTML = result;
    let h1ct = $('#h1id').text();
    alert(h1ct);
}