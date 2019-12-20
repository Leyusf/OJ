var vcode = 0;
function login_account(){
    window.event.returnValue=false;
    var ac = document.getElementById('accl');
    if (localStorage.getItem(ac.value)){
        var pd = document.getElementById('pwdl');
        if (pd.value == localStorage.getItem(ac.value))
        {
            localStorage.setItem("active",ac.value);
            window.location.href = "user_new.html"
        }
        else
            alert("Wrong password!");
    }
    else{
        alert("The account did not exist");
    }
}
function register(ac){ 
    if (localStorage.getItem(ac)){
        alert("The account already exists");
    }
    else{
        var pd = document.getElementById('pwd');
        localStorage.setItem(ac,pd.value);
        alert("Register successfully");
    }
}
function sub(){
    var acc = document.getElementById("acc").value;
    var em = document.getElementById("email").value;
    var pw = document.getElementById("pwd").value;
    var apw = document.getElementById("again-pwd").value;
    var vcs = document.getElementById("vc").value;
    var reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    var ac = /[A-Za-z0-9]{4,8}/;
    var pd = /[A-Za-z0-9]{6,999}/;
    if (reg.test(em)&&ac.test(acc)&&pd.test(pw)&&apw==pw&&vcs==vcode)
        register(acc);
}
$(document).ready(function(){
    $("#signup,#img").click(function(){
        var x = 9999;
        var y = 1000;
        var rand = parseInt(Math.random() * (x - y + 1) + y);
        var str = 'http://www.webxml.com.cn/WebServices/ValidateCodeWebService.asmx/enValidateImage?byString=' + rand;
        $("#img").attr("src",str);
        $("#vc").attr("pattern",rand);
        vcode = rand;
    });
    $("#again-pwd").change(function(){
        var pda = $("#pwd").val();
        $("#again-pwd").attr("pattern",pda);
    })
    $("#pwd").change(function(){
        var pda = $("#pwd").val();
        $("#again-pwd").attr("pattern",pda);
    })
});