const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

document.addEventListener('DOMContentLoaded', init);

function init() {
  // your code here
  
  document.addEventListener('keydown', keyHand);
  
}
alert();
function keyHand(e)
{
  if (e.key === "a")
  {
    console.log("a pressed");
  }
  console.log(e.key);
}