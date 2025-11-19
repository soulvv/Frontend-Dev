let count = 0;

function increment(){
  count++;
  console.log(count);
  function nested(){ console.log(count); }
  nested();
}

function decrement(){
  count--;
  console.log(count);
}

increment();
increment();
decrement();