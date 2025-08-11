

const isVow = (arr) => {
  return arr.map(num => {
    if (num === 97) return "a";
    else if (num === 101) return "e";
    else if (num === 105) return "i";
    else if (num === 111) return "o"; 
    else if (num === 117) return "u";
    else return num;
  });
};
