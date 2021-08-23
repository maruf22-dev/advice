async function updateAdviceOnSite()
{
    document.getElementById("mainText").innerHTML ="Loading . . ."
    await getNewAdvice();
    document.getElementById("advBtn").disabled = true;
    
}
async function getNewAdvice()
{
    fetch('https://api.adviceslip.com/advice').
    then(res => res.text()).then(data=> changeGlobalAdvice(data));
}
async function changeGlobalAdvice(res)
{    console.log(res);
     var globalAdvice = JSON.parse(res).slip.advice;
     document.getElementById("mainText").innerHTML = '"' + globalAdvice + '"';    
}

 function buttonControl()
{
    document.getElementById("advBtn").disabled = true;
    updateAdviceOnSite();
}
