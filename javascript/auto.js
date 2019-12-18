function getinner(){
    return {width:window.innerWidth,height:window.innerHeight};
}
window.onresize = function (){
   var width = this.getinner().width;
   if (width<1000)
   {
        $("#sea").removeClass("offset-md-2");
        $("#sea").removeClass("col-md-4");
        $("#sea").addClass("col-md-8");
   }
   else
   {
          $("#sea").removeClass("col-md-8");
          $("#sea").addClass("offset-md-2");
          $("#sea").addClass("col-md-4");
   }
   if (width<600){
     $("ul.pagination").removeClass("pagination-lg");
     $("ul.pagination").addClass("pagination-md");
     if ($("title").html()=="User")
          document.getElementById("log").style.display = "none";
   }
   else
   {
     $("ul.pagination").removeClass("pagination-md");
     $("ul.pagination").addClass("pagination-lg");
     if ($("title").html()=="User")
          document.getElementById("log").style.display = "block";
   }
}
function a(){
     window.location.href = "user_neg.html"
}
$(document).ready(function(){
     if ($("title").html()!="User")
          return;
     var name = localStorage.getItem("active");
     $("address").html(name);
     $("#f").click(function(){
          $("#co").html("Female");
     })
     $("#m").click(function(){
          $("#co").html("Male");
     })
});
window.onload = function(){
             // 百度地图API功能
     if ($("title").html()!="User")
          return;
     var map = new BMap.Map("allmap");
     var point = new BMap.Point(116.331398,39.897445);
     map.centerAndZoom(point,12);
     var ConvertName = function(chinaName){           
          var fullName = pinyin.getFullChars(chinaName); 
          return fullName;
     } 
     function myFun(result){
          var cityName = result.name;
          map.setCenter(cityName);
          $("#n").html(ConvertName(cityName));
     }
     var myCity = new BMap.LocalCity();
     myCity.get(myFun);
}