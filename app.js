var userInfo = document.getElementById('userInfo');
var userInfoSubmit = document.getElementById('userInfoSubmit');
var userName = null;
var userStreet = null;
var userCity = null;
var userState = null;
var userZip = null;
var clientInfo = document.getElementById('clientInfo');
var clientInfoSubmit = document.getElementById('clientInfoSubmit');
var clientName = null;
var clientStreet = null;
var clientCity = null;
var clientState = null;
var clientZip = null;
var dateInfo = document.getElementById('dateInfo');
var dateInfoSubmit = document.getElementById('dateInfoSubmit');
var datePicker = null;
var projectNameInfo = document.getElementById('projectNameInfo');
var projectNameSubmit = document.getElementById('projectNameSubmit');
var projectName = null;
var projectDescriptionInfo = document.getElementById('projectDescriptionInfo');
var projectDescriptionSubmit = document.getElementById('projectDescriptionSubmit');
var projectDescription = null;


Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

document.getElementById('datePicker').value = new Date().toDateInputValue();


userInfoSubmit.onclick = function(event) {
  event.preventDefault();
  userName = document.getElementById('userName').value;
  userStreet = document.getElementById('userStreet').value;
  userCity = document.getElementById('userCity').value;
  userState = document.getElementById('userState').value;
  userZip = document.getElementById('userZip').value;
  userInfo.classList.add("dn");
  clientInfo.classList.remove("dn");
}

clientInfoSubmit.onclick = function(event) {
  event.preventDefault();
  clientName = document.getElementById('clientName').value;
  clientStreet = document.getElementById('clientStreet').value;
  clientCity = document.getElementById('clientCity').value;
  clientState = document.getElementById('clientState').value;
  clientZip = document.getElementById('clientZip').value;
  clientInfo.classList.add("dn");
  dateInfo.classList.remove("dn");
}

dateInfoSubmit.onclick = function(event) {
  event.preventDefault();
  datePicker = document.getElementById('datePicker').value;
  dateInfo.classList.add("dn");
  projectNameInfo.classList.remove("dn");
}

projectNameInfoSubmit.onclick = function(event) {
  event.preventDefault();
  projectName = document.getElementById('projectName').value;
  projectNameInfo.classList.add("dn");
  projectDescriptionInfo.classList.remove("dn");
}

projectDescriptionInfoSubmit.onclick = function(event) {
  event.preventDefault();
  projectDescription = document.getElementById('projectDescription').value;
  projectDescriptionInfo.classList.add("dn");
  // projectDescriptionInfo.classList.remove("dn");
}
