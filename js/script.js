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

  let dayOfWeek = Math.floor((((cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7);

  //Arrays to store akan names and days of the week

  let daysOfTheWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

  let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

  let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  //looping through arrays

  let i;

}