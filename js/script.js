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


//$(document).ready(function() {
//  $("form#form").submit(function(event) {
//      event.preventDefault();
//      var year = parseInt($("#yearOfBirth").val());
//      var month = parseInt($("#monthOfBirth").val());
//      var date = parseInt($("#dateOfBirth").val());
//      var gender = $("input:radio[name=gender]:checked").val();
//      var result = findAkanName(year, month, date, gender);
//      alert("Your akan name is: " + result);
//      document.getElementById("form").reset();
//  });
//}); 


  document.querySelector("form#form").submit(function(event) {
      event.preventDefault();
      var year = parseInt(document.querySelector("#yearOfBirth").value);
      var month = parseInt(document.querySelector("#monthOfBirth").value);
      var date = parseInt(document.querySelector("#dateOfBirth").value);
      var gender = document.querySelector("input:radio[name=gender]:checked").value;
      var result = findAkanName(year, month, date, gender);
      alert("Your akan name is: " + result);
      document.getElementById("form").reset();
  });

