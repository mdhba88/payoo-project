// login form and button function
document.getElementById("formBtn").addEventListener("click", function (e) {
  e.preventDefault();

  // mobile number id targeted, then access to this value and then convert it to integer
  const mobNumValue = document.getElementById("mobileNumber").value;

  // four pin id targeted, then access to this value and then convert it to integer
  const fourPinValue = document.getElementById("fourDigitPin").value;

  // comparison in number and four pin for matching. when is matching then the value is return
  if (mobNumValue.length === 11 && fourPinValue.length === 4) {
    window.location.href = "home.html";
  } else if (mobNumValue.length !== 11) {
    alert("Write your valid Number");
  } else if (fourPinValue.length !== 4) {
    alert("Write your valid 4Pin");
  } else {
    alert("Write your valid number and 4Pin");
  }
});
