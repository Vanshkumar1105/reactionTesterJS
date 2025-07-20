var start= new Date().getTime();
function getRandomColor() {
  
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function move(){
  var left;
  var top;
  var wh;
  left = Math.random()*200;
  top = Math.random()*200;
  wh = ((Math.random()*400)+100);

  document.getElementById("box").style.left=left +"px";
  document.getElementById("box").style.top=top +"px";
  document.getElementById("box").style.height=wh +"px";
  document.getElementById("box").style.width=wh +"px";
  document.getElementById("box").style.backgroundColor= getRandomColor();
  document.getElementById("box").style.display="block";
  start= new Date().getTime();

}



function startGame() {
  document.getElementById("box").style.display="none";
  document.getElementById("reaction-time").textContent = "Wait for the box...";
  
 
  const delay = Math.random() * 2000 + 1000; 
timer = setTimeout(move, delay);
 }

function boxClicked() {
  const box = document.getElementById("box");
  box.style.display = "none";

  const end = new Date().getTime();
  const timeTaken = (end - start) / 1000;

    document.getElementById("box").style.display="none";

  document.getElementById("reaction-time").textContent =
    "Your reaction time: " + timeTaken.toFixed(3) + " seconds";

  
}