window.onload = function fill(){
    var str = window.location.href.split("=")[1];
    var a = str[0];
    var fuc = localStorage.getItem(a);
    a = a-1;
    $("#test5").html(fuc+";test("+a+");")
}
