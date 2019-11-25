var problem = new Array();
var results = new Array();
function maxProfit(prices) 
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
}
for (var i=0;i<12;i++)
{
    problem[i] = new Array();
    results[i] = new Array();
}
for (var i=0;i<10;i++)
{
    if (i%2==0){
        problem[0][i] = i+i%2;
        problem[1][i] = i+i%2;
        problem[2][i] = [7+i,1+i%2,5+i%3,3+i%4,6+i%5,4+i];
        results[0][i] = i+problem[0][i];
        results[1][i] = i-problem[1][i];
        results[2][i] = maxProfit(problem[2][i]);
    }
    else{
        problem[0][i] = -(i%2);
        problem[1][i] = -(i%2);
        problem[2][i] = [7+i,1+i%5,5+i%4,3+i%3,6+i%2,4+i];
        results[0][i] = i+problem[0][i];
        results[1][i] = i-problem[1][i];
        results[2][i] = maxProfit(problem[2][i]);
    } 
}
function vaild_language(a){
    var obj = document.getElementById('select');
    var index = obj.selectedIndex;
    var value = obj.options[index].value;
    if (value!="javascript")
        alert("Sorry,javascript is only supported at present!");
    else
        show(a);
}
function show(a){
    alert("judging");
    var $reason = document.getElementById('text_font').value;
    document.getElementById("demo").innerHTML = $reason;
    test(a-1);
}
function test(a){
    var result = 0;
    var flag = true;
    for (var i=0;i<problem[a].length;i++)
    {
        try{
            if (a==2)
                result = solution(problem[a][i]);
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
            if (a==2)
            {
                alert("Test Data: "+problem[a][i]+"\nYour Result: "+result+"\nExpected Result: "+results[a][i]);
            }
            else{
                alert("Test Data: "+i+" "+problem[a][i]+"\nYour Result: " + result+"\nExpected Result: "+results[a][i]);
            }
            flag=false;
            break;
        }
    }
    if (flag==true)
        alert("True");
    window.location.reload();
}