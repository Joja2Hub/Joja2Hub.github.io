function summa(){
    const check = /^[1-9][0-9]*$/;
    let stm, kol, pr;
    stm = document.getElementById("n1").value;
    stm=parseInt(stm);
    kol = document.getElementById("n2").value;
    kol=parseInt(kol);
    pr=stm*kol;

    if (!check.test(stm)|| !check.test(kol)) {
        alert('Пожалуйста, ведите числа');
        document.getElementById('out').innerHTML="Ошибка";
    }
    else{
        document.getElementById('out').innerHTML=pr;
    }
}


window.addEventListener('DOMContentLoaded', function()  {
    console.log("DOM fully loaded and parsed");

    let buttonProiz = document.getElementById("summa");
    buttonProiz.addEventListener("click",summa);
})
