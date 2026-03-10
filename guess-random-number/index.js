let label;
let answer;

document.getElementById("rollLabel").onclick = function(){
    document.getElementById("myNum").value = "";
    label = Math.round(Math.random() * 10)
    document.getElementById("label").textContent = `X`;
    document.getElementById("rollLabel").hidden = true;
    document.getElementById("myH3").textContent = `Tebak Nilai X (0-10)`;
    document.getElementById("myNum").hidden = false;
    document.getElementById("mySubmit").hidden = false;
}

document.getElementById("mySubmit").onclick = function(){
    const myNumInput = document.getElementById("myNum");
    if (myNumInput.value === "") {
        document.getElementById("myH3").textContent = `Masukkan angka terlebih dahulu`;
        return;
    }
    
    answer = Number(myNumInput.value);
    if (answer == label){
        document.getElementById("label").textContent = label;
        document.getElementById("myH3").textContent = `Tebakan Anda Benar`;
    }else{
        document.getElementById("label").textContent = label;
        document.getElementById("myH3").textContent = `Tebakan Anda Salah`;
    }
    document.getElementById("myNum").hidden = true;
    document.getElementById("mySubmit").hidden = true;
    document.getElementById("rollLabel").hidden = false;
}


