


  var arr1 = ["4","7",8,9]

  const numbers = arr1.map(Number).reduce((acc,curr)=> acc + curr , 0)

  console.log(numbers)