function test_username(){
    var request = new XMLHttpRequest();
    request.open("GET","https://api.agalts.xyz/v1/username?format=text",true);
    request.send();
    request.onload = function(){
        Swal.fire({
            title:"GET api.agalts.xyz/v1/username?format=text",
            text:"RESPONSE "+request.response
        })
    }
}