//https://www.codewars.com/kata/56598d8076ee7a0759000087/train/javascript

//The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return
//"Rating not recognised" in Javascript, Python and Ruby...
//...or null in Java
//...or -1 in C#
//Because you're a nice person, you always round up the tip, regardless of the service.

//Рейтинг нечувствителен к регистру (поэтому "отлично" = "ОТЛИЧНО"). Если получен непризнанный рейтинг, то нужно вернуть:
//«Рейтинг не распознан» в Javascript, Python и Ruby...
//... или ноль в Java
//... или -1 в С#
//Поскольку вы хороший человек, вы всегда округляете чаевые, независимо от услуги.

function calculateTip(amount, rating) {

  const standard = rating.toLowerCase();

  if (standard === "Terrible") { 
    return Math.ceil(amount  * 0 / 100);
  }
  else if (standard === "Poor") {
    return Math.ceil(amount * 5 / 100);
  }
  
  else if (standard === "Good") {
    return Math.ceil(amount * 10 / 100);
  }
  
  else if (standard === "Great") {
    return Math.ceil(amount * 15 / 100);
  }
  
  else if (standard === "Excellent") {
    return Math.ceil(amount * 20 / 100);
  }
    
  else {
    return ("Rating not recognised");
  }
     
  }



