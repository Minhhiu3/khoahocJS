function taxiBill(){
    let km = parseFloat(prompt("Nhập a: "));
    if (km <= 1){
        alert(`Thanh toán ${km*10000}`);
    }
    else if (km > 1 && km <= 30){
        alert(`Thanh toán ${(1*10000) + (km-1)*8000}`);
    }
    else if (km > 30){
        alert(`Thanh toán ${(1*10000) + (30*8000) + (km-30)*7000}`);
    }
}
taxiBill();