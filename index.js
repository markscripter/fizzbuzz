const fizzBuzz = (goTill) => {
  for (let i = 1; i <= goTill; i++) {
    let res =
      (i % 3 === 0) ?
        (i % 5 === 0 ?
          'fizzbuzz' :
          'fizz') :
        (i % 5 === 0) ?
          'buzz' :
          i;
    console.log(res);
  }
};

export default fizzBuzz;
