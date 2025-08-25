'user strict'
let d_n={
    dd: 1,
    mm: 1,
    yy: 2000,
}
let today=new Date();
let d=today.getDate(),m=today.getMonth()+1,y=today.getFullYear();
let birthday = document.getElementById("date-input");
let calculateAgeBtn = document.getElementById("calculate-age-btn");
let invalidDateMsg = document.getElementById("invalid-date-msg");
let inputs = document.querySelector(".inputs");
let results = document.querySelector(".results");
let years  = document.getElementById("years");
let months = document.getElementById("months");
let days   = document.getElementById("days");
let calculateAgainBtn = document.getElementById("calculate-again-btn");
window.onload = () =>{
    results.style.display = "none";
    inputs.style.display = "flex";
}
birthday.addEventListener("change", ()=> {
    if(birthday.value !== ""){
        let birthdayDate = new Date(birthday.value);
        if(birthdayDate < today){
            d_n.dd = birthdayDate.getDate();
            d_n.mm = birthdayDate.getMonth() + 1;
            d_n.yy = birthdayDate.getFullYear();
            invalidDateMsg.style.display = "none";
            calculateAgeBtn.removeAttribute("disabled");
            return;
        }
    }

    calculateAgeBtn.setAttribute("disabled", "true");
    invalidDateMsg.style.display = "block";
});
calculateAgeBtn.addEventListener("click", ()=>{
    let {day, month, year} = calculateAge();
    years.textContent = year;
    months.textContent = month;
    days.textContent = day;
    results.style.display = "flex";
    inputs.style.display = "none";
})
function calculateAge(){
    let day, month  , year;
    if (d_n.dd>d) {
    d_n.mm=d_n.mm+1;
    if (d_n.mm>m) {
        d_n.yy=d_n.yy+1;
        if (d_n.yy<=y) {
            year=y-d_n.yy;
        }
           month=m-d_n.mm+12;
    }
    else if (d_n.mm<=m) {
        if (d_n.yy<=y) {
            year=y-d_n.yy;
        }

           month=m-d_n.mm;
    } 
    day=d-d_n.dd+30;
}
else if (d_n.dd<=d) {
        if (d_n.mm>m) {
            d_n.yy=d_n.yy+1;
            console.log(d_n.yy);
            if (d_n.yy<=y) {
                year=y-d_n.yy;
            }
               month=m-d_n.mm+12;
        }
        else if (d_n.mm<=m) {
           if (d_n.yy<=y) {
                year=y-d_n.yy;
            }

               month=m-d_n.mm;
        } 
        day=d-d_n.dd;
    }
    return {day,month,year};
}

calculateAgainBtn.addEventListener("click", ()=>{
    results.style.display = "none";
    inputs.style.display = "flex";
    invalidDateMsg.style.display = "block";
    calculateAgeBtn.setAttribute("disabled", "true");
    birthday.value = "";
    years.textContent = "--";
    months.textContent = "--";
    days.textContent = "--";
});