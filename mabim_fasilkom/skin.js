function login() {
    var done = 0;
    var username = document.login.username.value;
    var password = document.login.password.value;

    if (username == "himasi" && password =="himasi"){
        if (confirm("Apakah anda ingin login?")){
            window.location.herf = "https://github.com/9Gitaokta";
        } else {
            alert("membatalkan login !");
        }
    } else {
        if (done==0){
            alert("username/password Salah");
        }
    }
}