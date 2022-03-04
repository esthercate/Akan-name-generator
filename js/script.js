function getName() {
  let dd = document.getElementById("dateOfBirth").value;
  let mm = document.getElementById("monthOfBirth").value;
  let year = document.getElementById("yearOfBirth").value;
  let gen = document.getElementsByName("gender").value;

  let cc = Number(year.slice(0,2));
  let yy = Number(year.slice(2,4));


  function genderInput() {
    for(let gender of gen) {
      if(gender.checked){
        return gender.value;
      }
    }
  }

  var genderValue = genderInput();
  console.log(genderValue);

  //calculating day of week

  var dayOfWeek = (((cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;


}