function arr2bin(arr){
    let sum = 0;
    let containsNaN = false;
  
    arr.forEach(item => {
      if (typeof item === 'number' && !isNaN(item)) {
        sum += item;
      } else if (typeof item === 'number' && isNaN(item)) {
        containsNaN = true;
      }
    });
  
    if (containsNaN) {
      return 'NaN';
    }
  
    return sum.toString(2);
  }

  function arr2bin(arr){
    return arr.reduce((x,y)=>x+(typeof y=="number"?y:0),0).toString(2);
  }