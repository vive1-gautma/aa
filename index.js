let weight=document.querySelector(".w");
let height=document.querySelector(".h");
let bmi=document.querySelector("#num");
let result=document.querySelector(".result");

function calculateBMI(){
    const weight=parseFloat(document.getElementsByClassName('w').value);
    const height=parseFloat(document.getElementsByClassName('h').value);
    if(!weight||!height||weight<=0||height<=0){
        document.getElementById('num').innerText="please enter valid value";
        return;
    }
    const bmi= w/(h*h);
    let classifi='';
    if(bmi<18.5){
        classifi="Under";

    }
    else if(bmi>=18.5 && bmi<24.9){
        classifi='noraml';
    }
    else if(bmi>=25 && bmi<29.9){
        classifi='over';
    }
    else{
        classifi='obese';
    }
    document.getElementById('num').innerText=`your BMI is ${bmi.tofixed(2)} (${classifi}).`;

    }
    

