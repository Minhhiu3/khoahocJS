// input
// Gợi ý dùng forEach hoặc reduce
const arrayString = ["name:John", "age:30", "city:NY"];

function convertArrayToObject(arr){
    arr.reduce((accumulator,currentValue,index,array) => {
        //console.log(accumulator);
        //console.log(currentValue);
        let obj = currentValue.fromEntries(array);
        console.log(obj);
       
    },{})
    
}
convertArrayToObject(arrayString);