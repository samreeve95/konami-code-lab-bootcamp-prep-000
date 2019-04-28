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
  
  buf.push(e.key);
  if (buf.length === codes.length)
  {
    verify(buf);
  }
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
    alert("Code Entered");
    
  buf = [];
}