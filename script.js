let password=document.getElementById("password");
let power=document.getElementById("power-point");

password.oninput=function() {
    let point=0;
    let value=password.value;
    let widthPower =["1%","25%","50%","75%","100%"];
    let colorPower =["DarkRed","red","orange","darkgreen","lightgreen"];

    if (value.length >= 6) {
        let arrayTest= [/[0-9]/,/[A-Z]/,/[a-z]/,/[^0-9a-zA-Z]/];    
        arrayTest.forEach((item) => {
            if (item.test(value)){
                point+=1;
            }
        });
    }

    power.style.width=widthPower[point];
    power.style.backgroundColor=colorPower[point];
}
