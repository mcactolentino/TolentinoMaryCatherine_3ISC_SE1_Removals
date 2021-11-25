function middle(array){
    if (array.length % 2 != 0){
      return array[(array.length/2)];
    }
    else{
      return "-1";
    }
  }
  
  console.log (middle('hi','hello','help', 'java'))