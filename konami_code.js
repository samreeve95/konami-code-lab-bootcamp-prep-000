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

function keyHand(e)
{
  if (e.key === 61)
    alert("spy triggered");
    console.log("a");
}