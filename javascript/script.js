var flag = true;
var num_pro;
var test_box_content = '<textarea rows="5" cols="100" spellcheck="false" id="test_diy" style="width:90%">'
var test_box_content2 = '</textarea>\n<div style="margin-left:40%;padding-top:10px;"><input type="button" value="TEST" class="test_button" onclick="diy_test(';
var p100 = new Array();
var d100 = new Array();
var data = new Array();
data[0] = [1,2];
data[1] = [1,2];
data[2] = ['[1,2,3,4,5]'];
data[3] = ['[0,1,0,3,12]'];
data[4] = ['[1,2,3]'];
data[5] = ['[2,2,1]'];
data[6] = ['[1,2,3,1]'];
data[7] = ['[1,1,2]'];
var problem = new Array();
var results = new Array();
p100.push(function (a,b){
    return a+b;
});
p100.push(function (a,b){
    return a-b;
});
p100.push(function (prices) 
{
    var sum = 0;
    for (let i = 0;i<prices.length-1;)
        {
            let j = i+1;
            for (;j<prices.length;j++)
                {
                    if (prices[j-1]>prices[j])
                        break;
                }
            sum += prices[j-1]-prices[i];
            i = j;
        }
    return sum;
});
p100.push(function(nums) {
    var num = 0;
    for (var i=0;i<nums.length;i++)
        {
            if (nums[i]==0)
                {
                    nums.splice(i,1);
                    num++;
                    i--;
                }
        }
    for (var i=0;i<num;i++)
        nums.push(0);
    return nums;
});
p100.push(function(digits) {
    let len = digits.length;
    let res = new Array();
    let flag = 0;
    for (var i=len-1;i>=0;i--)
        {
            if (i==len-1&&digits[i]==9)
                {
                    res.push(0);
                    let j=i-1;
                    for (;j>=0;j--)
                        {
                            if (digits[j]==9)
                                res.push(0);
                            else
                                {
                                    res.push(digits[j]+1);
                                    break;
                                }
                        }
                    i = j;
                }
            else if (i==len-1)
                res.push(digits[i]+1);
            else
                res.push(digits[i]);
        }
    if (res[len-1]==0)
        res.push(1);
    return res.reverse();
});
p100.push(function(nums) {
    var res = 0;
    for (var i=0;i<nums.length;i++)
        {
            res ^= nums[i];
        }
    return res;
});
p100.push(function(nums) {
    nums.sort();
    for (var i=0;i<nums.length-1;i++)
        {
            if (nums[i]==nums[i+1])
                return true;
        }
    return false;
});
p100.push(function(nums) {
    var len = nums.length;
    if (len==0)
        return 0;
    var tmp = nums[0];
    var num = 1;
    for (var i=1;i<len;i++)
        {
            if (nums[i]>tmp)
                {
                    num+=1;
                    tmp = nums[i];
                }
        }
    var i=1;
    tmp = nums[0];
    for (var j=1;j<len,i<num;j++)
        {
            if (nums[j]>tmp)
                {
                    nums[i] = nums[j];
                    tmp = nums[j];
                    i++;
                }
        }
    return num;
});
//p100 是解函数数组
d100.push(function (){
    var data = document.getElementById('test_diy').value;
    var test_data = data.match(/\d+/g);
    for (var i=0;i<test_data.length;i++)
        test_data[i] = parseInt(test_data[i]);
    var result = 0;
    var std_res = 0;
    try{
        result = solution(test_data[0],test_data[1]);
        std_res = p100[0](test_data[0],test_data[1]);
    }
    catch(e){
        alert("Complie Error");
        alert("Standard Output: "+std_res);
        return;
    }
    alert("Standard Output: "+std_res +"\nYour Output: "+result);
})
d100.push(function (){
    var data = document.getElementById('test_diy').value;
    var test_data = data.match(/\d+/g);
    for (var i=0;i<test_data.length;i++)
        test_data[i] = parseInt(test_data[i]);
    var result = 0;
    var std_res = 0;
    try{
        result = solution(test_data[0],test_data[1]);
        std_res = p100[1](test_data[0],test_data[1]);
    }
    catch(e){
        alert("Complie Error");
        alert("Standard Output: "+std_res);
        return;
    }
    alert("Standard Output: "+std_res +"\nYour Output: "+result);
})
d100.push(function(){
    var data = document.getElementById('test_diy').value;
    var test_data = data.match(/\d+/g);
    for (var i=0;i<test_data.length;i++)
        test_data[i] = parseInt(test_data[i]);
    var result = 0;
    var std_res = 0;
    try{
        result = solution(test_data);
        std_res = p100[2](test_data);
    }
    catch(e){
        alert("Complie Error");
        alert("Standard Output: "+std_res);
        return;
    }
    alert("Standard Output: "+std_res +"\nYour Output: "+result);
})
d100.push(function(){
    var data = document.getElementById('test_diy').value;
    var test_data = data.match(/\d+/g);
    for (var i=0;i<test_data.length;i++)
        test_data[i] = parseInt(test_data[i]);
    var result = 0;
    var std_res = 0;
    try{
        result = solution(test_data);
        std_res = p100[3](test_data);
    }
    catch(e){
        alert("Complie Error");
        alert("Standard Output: "+std_res);
        return;
    }
    alert("Standard Output: "+std_res +"\nYour Output: "+result);
})
d100.push(function(){
    var data = document.getElementById('test_diy').value;
    var test_data = data.match(/\d+/g);
    for (var i=0;i<test_data.length;i++)
        test_data[i] = parseInt(test_data[i]);
    var result = 0;
    var std_res = 0;
    try{
        result = solution(test_data);
        std_res = p100[4](test_data);
    }
    catch(e){
        alert("Complie Error");
        alert("Standard Output: "+std_res);
        return;
    }
    alert("Standard Output: "+std_res +"\nYour Output: "+result);
})
d100.push(function(){
    var data = document.getElementById('test_diy').value;
    var test_data = data.match(/\d+/g);
    for (var i=0;i<test_data.length;i++)
        test_data[i] = parseInt(test_data[i]);
    var result = 0;
    var std_res = 0;
    try{
        result = solution(test_data);
        std_res = p100[5](test_data);
    }
    catch(e){
        alert("Complie Error");
        alert("Standard Output: "+std_res);
        return;
    }
    alert("Standard Output: "+std_res +"\nYour Output: "+result);
})
d100.push(function(){
    var data = document.getElementById('test_diy').value;
    var test_data = data.match(/\d+/g);
    for (var i=0;i<test_data.length;i++)
        test_data[i] = parseInt(test_data[i]);
    var result = 0;
    var std_res = 0;
    try{
        result = solution(test_data);
        std_res = p100[6](test_data);
    }
    catch(e){
        alert("Complie Error");
        alert("Standard Output: "+std_res);
        return;
    }
    alert("Standard Output: "+std_res +"\nYour Output: "+result);
})
d100.push(function(){
    var data = document.getElementById('test_diy').value;
    var test_data = data.match(/\d+/g);
    for (var i=0;i<test_data.length;i++)
        test_data[i] = parseInt(test_data[i]);
    var result = 0;
    var std_res = 0;
    try{
        result = solution(test_data);
        std_res = p100[7](test_data);
    }
    catch(e){
        alert("Complie Error");
        alert("Standard Output: "+std_res);
        return;
    }
    alert("Standard Output: "+std_res +"\nYour Output: "+result);
})
//d100 是获取数据的函数数组
for (var i=0;i<12;i++)
{
    problem[i] = new Array();
    results[i] = new Array();
}
for (var i=0;i<10;i++)
{
    var numarr = new Array();
    if (i%2==0){
        problem[0][i] = i+i%2;
        problem[1][i] = i+i%2;
        problem[2][i] = [7+i,1+i%2,5+i%3,3+i%4,6+i%5,4+i];
        problem[3][i] = [i+i%2,i+i%3,i+i,i+i*5,i/2,i*2,i%4,i%6,i%7];
        problem[4][i] = [i%8+1,7+i%3,1+i%2,5+i%3,3+i%4,6+i%4,4+i%6];
        problem[5][i] = [i,i,i+1,i+4,i+5,i+1,i+4,i+6,i+6,i+8,i+5,i+9,i+8];
        problem[6][i] = [i,i+1,i+2,i+3,i+10,i+11,i+23,i+43,i+54,i+656,i+324,i+45345,i+34,i+213,i+34,i+23432,i+325,i+123213,i+21312,i+21321,i+353,i+4324,i+78676,i+31234,i+3424234,i+543543,i+54,i+213123,i+454366,i+3424234677,i+235,i+6457456];
        problem[7][i] = problem[6][i].concat();
        results[0][i] = p100[0](i,problem[0][i]);
        results[1][i] = p100[1](i,problem[1][i]);
        numarr = problem[2][i].concat();
        results[2][i] = p100[2](numarr);
        numarr = problem[3][i].concat();
        results[3][i] = p100[3](numarr);
        numarr = problem[4][i].concat();
        results[4][i] = p100[4](numarr);
        numarr = problem[5][i].concat();
        results[5][i] = p100[5](numarr);
        numarr = problem[6][i].concat();
        results[6][i] = p100[6](numarr);
        numarr = problem[7][i].concat();
        results[7][i] = p100[7](numarr);
    }
    else{
        problem[0][i] = -(i%2);
        problem[1][i] = -(i%2);
        problem[2][i] = [7+i,1+i%5,5+i%4,3+i%3,6+i%2,4+i];
        problem[3][i] = [0,i,i+1,0,0,i%6,i%7];
        problem[4][i] = [i%9+1,i%8+i%2,i%7+i%3,i%5+i%5,i%3,i%2,i%2,i%4,i%6,i%7];
        problem[5][i] = [i+7,i+7,i+1,i+4,i+5,i+9,i+4,i+6,i+6,i+8,i+5,i+9,i+8];
        problem[6][i] = [i,i+1,i+2,i+3,i+10,i+11,i+23,i+43,i+54,i+656,i+324,i+45345,i+34,i+213,i+34,i+23432,i+325];
        problem[7][i] = problem[6][i].concat();
        results[0][i] = p100[0](i,problem[0][i]);
        results[1][i] = p100[1](i,problem[1][i]);
        numarr = problem[2][i].concat();
        results[2][i] = p100[2](numarr);
        numarr = problem[3][i].concat();
        results[3][i] = p100[3](numarr);
        numarr = problem[4][i].concat();
        results[4][i] = p100[4](numarr);
        numarr = problem[5][i].concat();
        results[5][i] = p100[5](numarr);
        numarr = problem[6][i].concat();
        results[6][i] = p100[6](numarr);
        numarr = problem[7][i].concat();
        results[7][i] = p100[7](numarr);
    }
}
function diy_test(num)
{
    var $reason = document.getElementById('text_font').value;
    document.getElementById("code").innerHTML = $reason;
    d100[num]();
}

function test_box(b){
    b=b-1;
    var str = test_box_content;
    if (flag==true)
    {
        for (var i=0;i<data[b].length;i++)
        {
            str = str + data[b][i] + " "; 
        }
        str = str + test_box_content2 + b + ')"></div>';
        document.getElementById('test_box').innerHTML = str;
    }
    else
    document.getElementById('test_box').innerHTML = "";
    flag = !flag;
}
function vaild_language(){
    var obj = document.getElementById('select');
    var index = obj.selectedIndex;
    var value = obj.options[index].value;
    if (value!="javascript")
        alert("Sorry,javascript is only supported at present!");
    obj.selectedIndex = 0;
}
function show(a){
    alert("judging");
    var $reason = document.getElementById('text_font').value;
    newwindow = window.open('',"judge",);
    newwindow.document.write('<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"> <link rel="stylesheet" type="text/css" href="../css/new_sheet.css" /><script src="../javascript/script.js"></script></head><body><script id = "test5">'+$reason+';test('+(a-1)+');</script></body></html>');
}
function test(a){
    var result = 0;
    var flag = true;
    var c=0;
    for (var i=0;i<problem[a].length;i++)
    {
        try{
            if (a!=0&&a!=1){
                var numarr = new Array();
                numarr = problem[a][i].concat();
                result = solution(numarr);
            }      
            else
                result = solution(i,problem[a][i]);
        }
        catch(e){
            alert("Complie Error");
            return;
        }
        if (result!=results[a][i])
        {
            alert("False");
            if (a!=0&&a!=1)
            {
                alert("Test Data: "+problem[a][i]+"\nYour Result: "+result+"\nExpected Result: "+results[a][i]);
            }
            else{
                alert("Test Data: "+i +" "+problem[a][i]+"\nYour Result: " + result+"\nExpected Result: "+results[a][i]);
            }
            flag=false;
            break;
        }
    }
    if (flag==true)
        alert("True");
    window.close();
}
window.onresize = function (){
    var lb = document.getElementById("login");
    lb.style.left = (getinner().width - 350)/2 +'px';
    lb.style.top = (getinner().height - 250)/2 +'px';
    var sc = document.getElementById("locksc");
    sc.style.width = getinner().width+'px';
    sc.style.height = getinner().height+'px';
}
function getinner(){
    return {width:window.innerWidth,height:window.innerHeight};
}
function lock(){
    var sc = document.getElementById("locksc");
    sc.style['display'] = "block";
    sc.style.width = getinner().width+'px';
    sc.style.height = getinner().height+'px';
    var lb = document.getElementById("login");
    lb.style['display'] = 'block';
    lb.style.left = (getinner().width - 350)/2 +'px';
    lb.style.top = (getinner().height - 250)/2 +'px';
}
function img_close(){
    var sc = document.getElementById("locksc");
    sc.style['display'] = "none";
    var lb = document.getElementById("login");
    lb.style['display'] = "none";
}
function login_account(){
    var ac = document.getElementById('account');
    if (localStorage.getItem(ac.value)){
        var pd = document.getElementById('password');
        if (pd.value == localStorage.getItem(ac.value))
        {
            if (ac.value=="ythy")
                window.location.href='user_act.html';
            else
                window.location.href='user_new.html';
        }
        else
            alert("Wrong password!");
    }
    else{
        alert("The account did not exits");
    }
}
function register(){
    var ac = document.getElementById('account');
    if (localStorage.getItem(ac.value)){
        alert("The account already exists");
    }
    else{
        var pd = document.getElementById('password');
        localStorage.setItem(ac.value,pd.value);
        alert("Register successfully");
    }
}