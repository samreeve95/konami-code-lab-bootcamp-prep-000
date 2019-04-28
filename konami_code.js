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

function init() {
  // your code here
  
  document.addEventListener('keydown', keyHand);
  
}

function keyHand(e)
{
  if (e.key === "a")
    console.log("a");
}