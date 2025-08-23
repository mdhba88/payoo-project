// login form and button function
document.getElementById("formBtn").addEventListener("click", function (e) {
  e.preventDefault();
  const mobNum = 1234567890;
  const fourPin = 1234;

  // mobile number id targeted, then access to this value and then convert it to integer
  const mobNumValue = document.getElementById("mobileNumber").value;
  const mobNumConvert = parseInt(mobNumValue);

  // four pin id targeted, then access to this value and then convert it to integer
  const fourPinValue = document.getElementById("fourDigitPin").value;
  const fourPinConvert = parseInt(fourPinValue);

  // comparison in number and four pin for matching. when is matching then the value is return
  if (mobNum === mobNumConvert && fourPin === fourPinConvert) {
    window.location.href = "home.html";
  } else {
    alert("Incorrect");
  }
});
