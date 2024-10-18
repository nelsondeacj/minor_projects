function convert(){
    const resultElement=document.getElementById("resultElement");
    const inputValue=document.getElementById("userInput").value;
    const unit=document.getElementById("unit").value;
    let resultString;
  
    milesToKm=unit === "milesToKm";
    
    let result=0;
    if (milesToKm) {
      result=inputValue*1.60934;
      resultString = inputValue + " miles are " + result.toFixed(2) + " km";
    }
    else{
      result=inputValue/1.60934;
      resultString = inputValue + " km are " + result.toFixed(2) + " miles";
    }
  
  
    resultElement.innerHTML=resultString;
    console.log(resultString);
  }
  