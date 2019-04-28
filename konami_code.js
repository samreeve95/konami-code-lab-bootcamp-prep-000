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

var buf = [];

//document.addEventListener('DOMContentLoaded', init);

function init() {
  // your code here
  
  document.addEventListener('keydown', keyHand);
  
}

function keyHand(e)
{
  console.log(e.key);
  
  buf.push(e.key);
  if (buf.length === codes.length)
  {
    console.log("Lengths");
    verify(buf);
  }
  
  console.log(buf.length);
}

function verify(buffer)
{
  var b = true;
  
  for (var i=0;i<buffer.length;i++)
  {
      if (buf[i] !== codes[i])
      {
        b = false;
      }
  }
  
  if (b)
    window.alert("Code Entered");
    
  buf = [];
}