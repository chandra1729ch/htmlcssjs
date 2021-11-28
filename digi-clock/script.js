var date=new Date();
var hours=date.getHours();
var minutes=date.getMinutes();
var seconds=date.getSeconds();
document.getElementById("innertime").innerText=hours+":"+minutes+":"+seconds;

function autoRefresh() {
    window.location=window.location.href;
}
setInterval('autoRefresh()',500);