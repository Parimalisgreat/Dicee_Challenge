let randomNumber1=Math.ceil(Math.random()*6);
let randomNumber2=Math.ceil(Math.random()*6);

document.querySelectorAll(".dice img")[0].setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelectorAll(".dice img")[1].setAttribute("src","images/dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="Player1 Wins";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML="Player2 Wins";
}
else {
  document.querySelector("h1").innerHTML="Draw";
}
