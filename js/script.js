 var findAkanName = function(year, month, date, gender) { 
  var mNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var fNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  var date = new Date(year, --month, date);
  if (gender === "Male") {
      return date && mNames[date.getDay()];
  } else {
      return date && fNames[date.getDay()];
  }  
}


//document.getElementById("btn").addEventListener("click", function(event) {
var form = document.getElementById("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    var date = document.getElementById("dateOfBirth").value;
    var month = document.getElementById("monthOfBirth").value;
    var year = document.getElementById("yearOfBirth").value;
    var gender = document.querySelector("input[name=gender]:checked").value;
    
    //Validation of day and month input
    if(date === "" || date <= 0 || date > 31) {
        alert("Invalid Date! Please Enter a Valid Date of Birth");
    } else if (month === "" || month <= 0 || month > 12) {
        alert("Invalid Month! Please Enter a Valid Month of Birth");
    } else if(year === "" || year <= 1000 || year > 2022) {
        alert("invalid Year! Please Enter a Valid Year of Birth");
    } else {
        var result = findAkanName(year, month, date, gender);
        document.getElementById("output").textContent = "Your Akan Name is " + result;
        document.getElementById("form").reset();  
    }
});