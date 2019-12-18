$(document).ready(function(){
    $("#search").keydown(function(event){
        if(event.keyCode==13){
            var index = $("#search").val();
            var reg = /p10/i;
            if(!reg.test(index.slice(0,3)))
            {
                alert("Invaild search type\nPlease Enter ID")
                return;
            }
            var num = index.slice(3);
            reg = /(^[0-9]{1,2}$)/;
            if (reg.test(num))
            {
                if (num>0&&num<9)
                {
                    window.location.href="p10"+num+".html";
                    return;
                }
                else if (num>8&&num<51)
                {
                    window.location.href="no_way.html";
                    return;
                }
            }
            alert("Invaild search ID");
        }
    });
});