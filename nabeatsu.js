
for(let i = 1; i <= 100; i++) {
    const num = i;
    const str = String(i);
  if(num % 3 === 0) {
    console.log(num + '!');
  }else if (str.indexOf(3) !== -1){
    console.log(str + '!');
  }else {
    console.log(num);
  }
};