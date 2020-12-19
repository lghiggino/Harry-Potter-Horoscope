const checkButton = document.getElementById("submit");
checkButton.addEventListener("click", checkHoroscope);


function checkHoroscope(){
  let houseName = ""
  let houseNumber = 0
  const date = document.getElementById("date").value;
  
  // Find out the house name and number
  let houses = document.querySelectorAll(".house-radio")
  houses.forEach(house => {
      if (house.checked){
        houseName = house.value
        console.log(houseName)
        switch (true){
          case (houseName === "ravenclaw"):
            houseNumber = 0;
            break;
          case (houseName === "hufflepuff"):
            houseNumber = 1;
            break;
          case (houseName === "slytherin"):
            houseNumber = 2;
            break;
          case (houseName === "gryffindor"):
          houseNumber = 3;
          break;
        }
      }
    })

    //split the date into day and month
    const month = Number(date.slice(5,7))
    const day = Number(date.slice(8, date.length))
    
    //make the logic to determine the zodiac sign
    let sign = 0 
    switch(month){
      case 2:
         day < 20 ? (sign = 1) : (sign = 2);
         break;
      case 3:
         day < 21 ? (sign = 2) : (sign = 3);
         break;
      case 4:
         day < 21 ? (sign = 3) : (sign = 4);
         break;
      case 5:
         day < 21 ? (sign = 4) : (sign = 5);
         break;
      case 6:
         day < 21 ? (sign = 5) : (sign = 6);
         break;
      case 7:
         day < 23 ? (sign = 6) : (sign = 7);
         break;
      case 8:
         day < 23 ? (sign = 7) : (sign = 8);
         break;
      case 9:
         day < 23 ? (sign = 8) : (sign = 9);
         break;
      case 10:
         day < 23 ? (sign = 9) : (sign = 10);
         break;
      case 11:
          day < 23 ? (sign = 10) : (sign = 11);
          break;
      case 12:
         day < 22 ? (sign = 11) : (sign = 0);
         break;
      case 1:
         day < 20 ? (sign = 0) : (sign = 1);
    }

    //display the text
    const horoscopeResult = document.querySelector("#horoscope-result");
    horoscopeResult.innerText = "";
    horoscopeResult.innerText = `${zodiac[houseNumber][sign]}`;

    const famousWizards = document.querySelector("#famous-wizards");
    famousWizards.innerText = "";
    famousWizards.innerText = `${famousZodiacs[sign]}`

    console.log(sign)
}
