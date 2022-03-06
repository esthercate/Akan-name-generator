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

document.getElementById("btn").onclick = function(){
    var date = document.getElementById("dateOfBirth").value;
    var month = document.getElementById("monthOfBirth").value;
    var year = document.getElementById("yearOfBirth").value;
    var gender = document.querySelector("input[name=gender]:checked").value;
    var result = findAkanName(year, month, date, gender);
    document.getElementById("output").textContent = "Your Akan Name is " + result;
    document.getElementById("form").reset();
};