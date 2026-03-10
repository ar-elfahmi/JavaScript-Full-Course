let label;

document.getElementById("tambahkanLabel").onclick = function(){
    label = document.getElementById("label").textContent;
    label = Number(label)
    label += 1
    document.getElementById("label").textContent = label;
}

document.getElementById("kurangiLabel").onclick = function(){
    label = document.getElementById("label").textContent;
    label = Number(label)
    label -= 1
    document.getElementById("label").textContent = label;
}

document.getElementById("resetLabel").onclick = function(){
    label = document.getElementById("label").textContent;
    label = Number(label)
    label = 0
    document.getElementById("label").textContent = label;
}

