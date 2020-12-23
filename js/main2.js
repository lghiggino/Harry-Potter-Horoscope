const checkButton = document.querySelector("#submit")
checkButton.addEventListener("click", checkHoroscope);

let houseNumber;
let sign;

//check the radio button by clicking the parent li
let lis = document.querySelectorAll("li")
lis.forEach(li => {
   li.addEventListener("click", (e) => {
      console.log(e.target)
      console.log(e.target.firstElementChild)
      e.target.firstElementChild.checked = true;
   })
})

function checkHoroscope(){
    //get the house value
    getHouse()
    //get the date and determine the horoscope answer
    determineSign()
    //display the information on the DOM
    renderDOM()
}

function getHouse(){
    let houses = document.querySelectorAll(".house-radio")
    let houseName = ""
    houses.forEach(house => {
        if (house.checked){
            houseName = house.value    
            switch (true){
                case (houseName === "ravenclaw"):
                    houseNumber = 0;
                    return houseNumber;
                case (houseName === "hufflepuff"):
                    houseNumber = 1;
                    return houseNumber;
                case (houseName === "slytherin"):
                    houseNumber = 2;
                    return houseNumber;
                case (houseName === "gryffindor"):
                    houseNumber = 3
                    return houseNumber;
              }
        }
    })
}

function determineSign(){
    //get the date
    const date = document.getElementById("date").value;
    //split the date into day and month
    const month = Number(date.slice(5,7))
    const day = Number(date.slice(8, date.length))
    //test and determine the sign
    switch(month){
      case 2:
             day < 20 ? (sign = 1) : (sign = 2);
            return sign;
      case 3:
            day < 21 ? (sign = 2) : (sign = 3);
            return sign;
      case 4:
             day < 21 ? (sign = 3) : (sign = 4);
            return sign;
      case 5:
            day < 21 ? (sign = 4) : (sign = 5);
            return sign;
      case 6:
            day < 21 ? (sign = 5) : (sign = 6);
             return sign;
      case 7:
             day < 23 ? (sign = 6) : (sign = 7);
            return sign;
      case 8:
             day < 23 ? (sign = 7) : (sign = 8);
            return sign;
      case 9:
            day < 23 ? (sign = 8) : (sign = 9);
            return sign;
      case 10:
             day < 23 ? (sign = 9) : (sign = 10);
            return sign;
      case 11:
             day < 23 ? (sign = 10) : (sign = 11);
            return sign;
      case 12:
            day < 22 ? (sign = 11) : (sign = 0);
            return sign;
      case 1:
            day < 20 ? (sign = 0) : (sign = 1);
            return sign;
    }
}

function renderDOM(){
    const horoscopeResult = document.querySelector("#horoscope-result");
    horoscopeResult.innerText = "";
    horoscopeResult.innerText = `${zodiac[houseNumber][sign]}`;

    const famousWizards = document.querySelector("#famous-wizards");
    famousWizards.innerText = "";
    famousWizards.innerText = `${famousZodiacs[sign]}`

    //remove the news section
    const newsflash = document.querySelector("#newsflash")
    newsflash.style.display = "none";
}

//Builiding the header Date - unrelated to the horoscope
//Today date for the daily-drops
function dailyDropDateRender(){
    let today = new Date();
    let dd = today.getDate();
    let weekday = today.toLocaleString("default",{weekday:"long"});
    let month = today.toLocaleString("default",{month:"long"});
    let hour = today.getHours();
    let edition = "";
 
    //styling the text
    if(dd<10) 
    {
       dd=`0${dd}`;
    } 
 
    if(hour <= 12){
       edition = "Morning edition";
    } else edition = "Evening edition"
 
    //where e what to render
    const todayDateName = document.querySelector("#todaydatename");
    const todayDateNumber = document.querySelector("#todaydatenumber");
    const todayDateEdition = document.querySelector("#todaydateedition");
 
    todayDateName.innerText = weekday;
    todayDateNumber.innerText = `${dd}, ${month}`;
    todayDateEdition.innerText = edition;
 }
 
 dailyDropDateRender()
 