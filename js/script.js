function nome(){
    document.getElementById("objeto2").innerHTML = "Melissa";
}

function somar(){
  let n1 = parseFloat(document.getElementById("n1").value);
  let n2 = parseFloat(document.getElementById("n2").value);
  document.getElementById("resultado").innerHTML = n1 + n2;
}

function subtrair(){
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    document.getElementById("resultado").innerHTML = n1 - n2;
  }

  function multiplicação(){
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    document.getElementById("resultado").innerHTML = n1 * n2;
  }

  function divisão(){
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    document.getElementById("resultado").innerHTML = n1 / n2;
  }