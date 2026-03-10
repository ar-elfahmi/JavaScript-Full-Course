
function generate(){
    const hBesar = document.getElementById("hBesar").checked;
    const hKecil = document.getElementById("hKecil").checked;
    const anggka = document.getElementById("anggka").checked;
    const simbol = document.getElementById("simbol").checked;
    const length = document.getElementById("length").value;
    let Chars = "";
    let Pasword = "";
    
    Chars += hBesar ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    Chars += hKecil ? "abcdefghijklmnopqrstuvwxyz" : "";
    Chars += anggka ? "1234567890" : "";
    Chars += simbol ? "!@#$%^&*()_+" : "";

    if(Chars.length === 0){
        alert`(minimal pilihlah salah satu kombinasi)`;
    }

    if(length <= 0){
        alert`(minimal generate pasword adalah 1)`;
    }

    if(length > 0 && Chars.length > 0){
        for(i = 0; i < length; i++){
            const randomIndex = Math.floor(Math.random() * Chars.length);
            Pasword += Chars[randomIndex];
        }
    }

    document.getElementById("paswordGenerate").textContent = Pasword;
    return '';
    
};