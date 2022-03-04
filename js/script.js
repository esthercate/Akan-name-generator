
document.getElementById("myBtn").onclick = function() {
  var dd = document.getElementById("dateOfBirth").value;
  var mm = document.getElementById("monthOfBirth").value;
  var year = document.getElementById("yearOfBirth").value;
  var sex = document.getElementsByName("gender").value;
  var dow = dd + mm + year + sex;
  console.log(dow);
}

function getAkanName() {

}