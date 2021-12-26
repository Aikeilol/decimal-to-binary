function addBinary(a, b) {
  let sum = a + b,
    binary = [],
    ost,
    neOst,
    end = '';

  do {
    ost = sum % 2;
    binary.push(ost);
    neOst = Math.floor(sum / 2);
    sum = neOst;
    if (sum == 1) {
      binary.push(sum);
    }
  } while (sum > 1);
  binary.reverse();
  
  for (let i = 0; i < binary.length; i++) {
    end += binary[i];
  }
  console.log(end);
}

addBinary(6,6);