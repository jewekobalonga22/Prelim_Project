function updateDateTime() {
    var now =new Date();
    var datetimeElement =
    document.getElementById('datetime');
    datetimeElement.innerHTML = 'Date and Time:' + now.toLocaleString();
}
updateDateTime();
setInterval(updateDateTime, 1000);