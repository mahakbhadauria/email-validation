console.log("this is email validation")

let result = {
    
    "tag": "",
    "free": true,
    "role": false,
    "user": "snehabhadouria7451",
    "email": "snehabhadouria7451@gmail.com",
    "score": 0.48,
    "state": "unknown",
    "domain": "gmail.com",
    "reason": "no_connect",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
  }

submitbtn.addEventListener("click", async (e)=>{
    e.preventDefault()
    console.log("clicked")
    let key = "ema_live_vT9b4BeD4mIsQRhg1Fpnjb3zbvpES5gx7009oVzG"
    let email = document.getElementById("username").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()

let str = ``;
for(key of Object.keys(result)){
    str += `<div>${key}: ${result[key]}</div>`}
console.log(str)
document.getElementById("resultcont").innerHTML = str;

})



