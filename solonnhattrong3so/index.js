function findMaxNubers(a,b,c){
    let a = parseFloat(prompt("Nhập a: "));
    let b = parseFloat(prompt("Nhập b: "));
    let c = parseFloat(prompt("Nhập c: "));
    if(a > b && a > c) alert(a);
    else if(b > a && b > c) alert(b);
    else alert(c);
}

findMaxNubers(5,10,15); // 15