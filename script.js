function verify() {
  var date = new Date();
  var year = date.getFullYear();
  var fyear = document.getElementById("txtyear");
  var result = document.getElementById("result");
  if (fyear.value.length == 0 || fyear.value > year) {
    window.alert("Error! Try again!");
  } else {
    var fgender = document.getElementsByName("radgender");
    var age = year - Number(fyear.value);
    var gender = "";
    var img = document.createElement("img");
    img.setAttribute("id", "photo");
    if (fgender[0].checked) {
      gender = "Male";
      if (age >= 0 && age < 10) {
        img.setAttribute('src', 'assets/img/baby-male.png');
      } else if (age < 14) {
        img.setAttribute('src', 'assets/img/child-male.png');
      } else if (age < 50) {
        img.setAttribute('src', 'assets/img/adult-male.png');
      } else {
        img.setAttribute('src', 'assets/img/old-male.png');
      }
    } else if (fgender[1].checked) {
      gender = "Female";
      if (age >= 0 && age < 10) {
        img.setAttribute('src', 'assets/img/baby-female.png');
      } else if (age < 14) {
        img.setAttribute('src', 'assets/img/child-female.png');
      } else if (age < 50) {
        img.setAttribute('src', 'assets/img/adult-female.png');
      } else {
        img.setAttribute('src', 'assets/img/old-female.png');
      }
    }

    result.innerHTML = `Gender is ${gender} with ${age} years old`;
    result.appendChild(img);
  }
}
