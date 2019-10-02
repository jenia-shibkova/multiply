module.exports = function multiply(first, second) {
  const firstNum = first.split('').reverse();
  const secondNum = second.split('').reverse();
  const stack = [];

  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {      
      let mul = firstNum[i] * secondNum[j];
      stack[i + j] = (stack[i + j]) ? stack[i + j] + mul : mul;
    }
  }  

  for (let i = 0; i < stack.length; i++) {
    let num = stack[i] % 10;
    let move = Math.floor(stack[i] / 10);
    stack[i] = num;

    if (stack[i + 1]) {
      stack[i + 1] = stack[i + 1] + move;
    } else if (move > 0) {
      stack[i + 1] = move;
    } 
  }  
  
  return stack.reverse().join('');
}
