function taxSalary(){
    let salary = parseFloat(prompt("Nhập lương cần tính thuế: "));
    if(salary <= 11000000){
        alert("nghèo nên o bị thuế ");
    }
    else if(salary <= 25000000){
        alert("Thuế 5% của " + salary + " là: " + salary * 0.05);
    }
    else if(salary <= 50000000){
        alert("Thuế 10% của " + salary + " là: " + salary * 0.10);
    }
    else if(salary <= 80000000){
        alert("Thuế 20% của " + salary + " là: " + salary * 0.20);
    }
    else {
    alert("Thuế 30% của " + salary + " là: " + salary * 0.30);
    }

   
}
taxSalary()