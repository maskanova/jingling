(function () {
var fireInterval;
var isFiring = false;
var requestedCtrNode = document.getElementById("requestedCtr"),
succeededCtrNode = document.getElementById("succeededCtr"),
failedCtrNode = document.getElementById("failedCtr"),
targetURLNode = document.getElementById("targetURL"),
fireButton = document.getElementById("fireButton"),
messageNode = document.getElementById("message"),
rpsNode = document.getElementById("rps"),
timeoutNode = document.getElementById("timeout");
var targetURL = targetURLNode.value;
targetURLNode.onchange = function () {
targetURL = this.value;
};
var requestsHT = {}; // requests hash table, may come in handy later
var requestedCtr = 0,
succeededCtr = 0,
failedCtr = 0;
var makeHttpRequest = function () {
if (requestedCtr > failedCtr + succeededCtr + 10000) { //Allow no more than 10000 hung requests
return;
};
var rID =Number(new Date());
var img = new Image();
img.onerror = function () { onFail(rID); };
img.onabort = function () { onFail(rID); };
img.onload = function () { onSuccess(rID); }; // TODO: it may never happen if target URL is not an image... // but probably can be fixed with different methods
  img.setAttribute("src", targetURL + "?id=" + rID + ";msg=" + messageNode.value);
requestsHT[rID] = img;
onRequest(rID);
};
var onRequest = function (rID) {
requestedCtr++;
requestedCtrNode.innerHTML = requestedCtr;
};
var onComplete = function (rID) {
delete requestsHT[rID];
};
var onFail = function (rID) {
// failedCtr++;
//failedCtrNode.innerHTML = failedCtr;
succeededCtr++; //Seems like the url will always fail it it isn't an image
succeededCtrNode.innerHTML = succeededCtr;
delete requestsHT[rID]; // we can't keep it forever or it would blow up the browser
};
var onSuccess = function (rID) {
succeededCtr++;
succeededCtrNode.innerHTML = succeededCtr;
delete requestsHT[rID];
};
fireButton.onclick = function () {
if (isFiring) {
clearInterval(fireInterval);
isFiring = false;
this.innerHTML = "RESUME";
} else {
isFiring = true;
this.innerHTML = "PAUSE";
fireInterval = setInterval(makeHttpRequest, (10000 / parseInt(rpsNode.value) | 0));
}
};
})();
isFiring = true;
document.getElementById("fireButton").innerHTML = "START";
fireInterval = setInterval(makeHttpRequest, (10000 / parseInt(document.getElementById("rps").value) | 0));

