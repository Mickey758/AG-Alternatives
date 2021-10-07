function e_username(){
    Swal.fire({
        html: '<p class="text">Request<br>https://api.agalts.xyz/v1/username?format=json<br><br>Response<br>{"error":false,"username":"NinjasHyper"}</p>',
        icon: "info"
    })
}
function e_password(){
    Swal.fire({
        html: '<p class="text">Request<br>https://api.agalts.xyz/v1/password?length=10&format=json<br><br>Response<br>{"error":false,"password":"TfueSux123"}</p>',
        icon: "info",
        width: "700",
    })
}
function e_ip_lookup(){
    Swal.fire({
        html: '<p class="text">Request<br>https://api.agalts.xyz/v1/iplookup?ip=0.0.0.0&format=json<br><br>Response<br>{"error":True,"message":"Ip Invalid!"}</p>',
        icon: "info",
        width: "700",
    })
}
function e_socks4proxy(){
    Swal.fire({
        html: '<p class="text">Request<br>https://api.agalts.xyz/v1/getproxy?type=socks4&format=json<br><br>Response<br>{"error":False,"proxies":["177.128.115.209:4153","202.51.117.26:5678"]}</p>',
        icon: "info",
        width: "700",
    })
}
function e_pasteupload(){
    Swal.fire({
        html: '<p class="text">Get Request<br>https://paste.agalts.xyz/upload?paste=Hello<br><br>Response<br>{"code":"hvft","error":false,"url":"https://paste.agalts.xyz/hvft"}</p><br><p class="text">Post Request</p><br>https://paste.agalts.xyz/upload<br><br><p class="text">Json Content</p><br>{"paste":"Hello World"}<br><br>Response<br>{"code":"hvft","error":false,"url":"https://paste.agalts.xyz/hvft"}</p>',
        icon: "info",
        width: "700",
    })
}
