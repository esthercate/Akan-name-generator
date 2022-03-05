 var findAkanName = function(y, m, d, g) {
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

  var d = new Date(y, --m, d);
  if (g === "Female") {
      return d && femaleNames[d.getDay()];
  } else {
      return d && maleNames[d.getDay()];
  }
}


$(document).ready(function() {
  $("form#form").submit(function(event) {
      event.preventDefault();
      var y = parseInt($("#yearOfBirth").val());
      var m = parseInt($("#monthOfBirth").val());
      var d = parseInt($("#dateOfBirth").val());
      var g = $("input:radio[name=gender]:checked").val();
      var result = findAkanName(y, m, d, g);
      alert("Your akan name is: " + result);
      document.getElementById("form").reset();
  });
}); 
