function printTriangle(n, char) {
    for (let i = 1; i <= n; i++) {
      let spaces = "";  
      let chars = "";  
  
  
      for (let j = 0; j < n - i; j++) {
        spaces += " ";
      }
  

      for (let j = 0; j < 2 * i - 1; j++) {
        chars += char;
      }
  
      console.log(spaces + chars);
    }
  }
  

printTriangle(6, "*");
  

 
  