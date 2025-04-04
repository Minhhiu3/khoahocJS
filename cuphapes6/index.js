const in4 = { name: "hieu", age: 21 };
const adress = { name: "hn", distric: "soc son" };
const phoneNumber = [1, 2, , , 3];
const in5 = {
    ...in4,
    ...adress,
    ...phoneNumber,
    job: "developer",
    skills: ["js"],
    email: "admin@",
    password: "password",

};
const {password: matkhau,...other} = in5


//console.log(matkhau);
//other lấy được do áp dụng rest gom phần còn lại thành object/arrayarray
//console.log(other);
function sum(...rest) {
    //console.log(rest);
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
        total += rest[i];
    }
    return total;

}

//console.log(sum(1, 2, 3, 4, 5,"a"));

const people = [
    {name: "John", scale: 60},
    {name: "Alice", scale: 80},
    {name: "Bob", scale: 70},
    {name: "Charlie", scale: 90},
    {name: "David", scale: 50},
    {name: "Eve", scale: 75},
    {name: "Frank", scale: 85},
    {name: "Grace", scale: 65},
    {name: "Henry", scale: 78},
    {name: "Isabella", scale: 82},
    {name: "Jack", scale: 73},
    {name: "Karen", scale: 68},
    {name: "Lisa", scale: 87},
    {name: "Michael", scale: 76},
    {name: "Nancy", scale: 69},
    {name: "Olivia", scale: 84},
    {name: "Peter", scale: 71},
]
function elevatorScale(...people){
    let max = 750;
    let total = 0;
    for(let i = 0 ; i < people.length ; i++){
        total += people[i].scale;
        // if(total > max){
        //      console.log(`khong the chay vi qua ${max}`);
        //     return false;
        // }
    }
    console.log(total);
    return total <= max;

}

//elevatorScale(...people);
const obj1 = {
    name: "hieu",
    age : 30,
    city : 'New York',
    country : 'USA',
    sayHello: function(){
        console.log(`Hello, my name is ${this.name}`);
    }

}
//const obj2 = structuredClone(obj1);
//console.log(obj2);

// flat
const arr1 = [1,2,3,/*0*/ 
                [4,5,6,/*1*/
                    [7,8,/*2*/
                        [9,10],/*3*/
                        [11,12]
                    ]
                ]
            ] 
const arr2 = arr1.flat(0);
const arr3 = arr1.flat(1);
const arr4 = arr1.flat(2);
const arr5 = arr1.flat(3);
const arr6 = arr1.flat(Infinity);
// console.log(arr1);

// console.log(arr2);

// console.log(arr3);

// console.log(arr4);

// console.log(arr5);

// console.log(arr6);

const myArr1 = [
                 [1, 2],
                 [3, 4],
                 [5, 6],
                 [7, 8,
                    [-1,-4,-6]
                ],
                ];

                
function maxValueInArray(myArr1) {
    const myArr2 = myArr1.flat(Infinity);
    let max = myArr2[0];
    for(let i = 1 ; i < myArr2.length ; i++){
        if(myArr2[i] > max){
            max = myArr2[i];
        }
    }
    console.log(max);

}
const myArr3 = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8,
       [-1,-4,-6]
   ],
   [9, 10],
   [11, 12],
   [13, 14],
   [15, 16],
   [17, 18],
   [19,,,null,, 20],
   [21, 22],
   [23, 24],
   [25, 26],
   [27, 28,,,,
   ],
   ];
//maxValueInArray(myArr3);

function flat(arr, depth =1){
    const newArr = [];
    for(let i = 0; i<arr.length; i++){
        if(Array.isArray(arr[i]) && depth > 0 ){
            newArr.push(...flat(arr[i], depth - 1));
        }else {
            newArr.push(arr[i]);
        }
        // return newArr;
    }
    return newArr.filter(Boolean);

}
// console.log(flat(myArr3, 2));
function printNumber(n){
    
    if(n < 1) return;
    printNumber(n-1);
    console.log(n);
}
//printNumber(5);
///////////////////////////////////////////////////////////////////////////////////
// <li>${index}: ${item}</li>
const animal = ["dog", "cat", "fish", "bird", "lizard", "human"];
const aaa = ["dog", "cat", "fish", "bird", "lizard", "humann"];
// const result =  animal.forEach(
//     (item, index , aaa ) => {
//         console.log(item);

//         console.log(index);

//         console.log(aaa);

//         return "hi";
//     }
// );
function printAnimal(animal) {
    let content = `
    <table border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
    `;

    animal.forEach((item, index) => {
        content += `
            <tr>
                <td>${index}</td>
                <td>${item}</td>
            </tr>
        `;
    });

    content += `</tbody></table>`; // Kết thúc bảng

    document.body.innerHTML = content; // Hiển thị bảng lên trang web
}

// Dữ liệu mẫu

printAnimal(aaa);
//find
function findAnimal(arr) {
   const result =  arr.findIndex((item, index) => {
        
        if(item == "fish") return index;
    })
console.log (result);
    
    }

    const content = [
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
        { id: 3, name: "Bob" },
        { id: 4, name: "Alice" },
        { id: 5, name: "Charlie" },
    ];
function findIndexx(arr){
return arr.isArray(arr) && arr.findIndex((item)=> item.name == "Bob");
 
}

function findLastIndex(arr){
    
}
//findIndexx(content);
    //findAnimal(animal);
//filterr luôn trả về mảng rỗng hoặc đáp ứng điều kiện ----------------------------------------------------------------------------
const bbb = [1,2,3,4,5,6,7,8,9,10];

function filterNumber(arr){
    return arr.filter((item) => item % 2 === 0);
}
//console.log(filterNumber(bbb));

const student = [
    { name: "John", age: 18 },
    { name: "Alice", age: 20 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 },
    { name: "David", age: 21 },
    { name: "Eve", age: 16 },
    { name: "Frank", age: 22 },
    { name: "Grace", age: 23 },
];
function filterStudentAge(arr){
    return arr.filter((item) => item.age <= 18);

}
//console.log(filterStudentAge(student));
////map trả về mảng mới với các giá trị đã được biến đổi từ mảng ban đầu--
function addRoleStudent(arr){
    return arr.map((item) => {
        return {
            ...item,
            role: "student",
        };
    });
}
//console.log(addRoleStudent(student));
//console.log(student);
const product = [
    { name: "Product 1", price: 100 , quantity: 2},
    { name: "Product 2", price: 200 , quantity: 3},
    { name: "Product 3", price: 300  , quantity: 4},
    { name: "Product 4", price: 400  , quantity: 5},
    { name: "Product 5", price: 500  , quantity: 6},
];
function totalPrice(arr){
     arr.map((item) => {
        last = item.price * item.quantity;
        console.log(last);
    })
    return last;
    
}
//console.log(totalPrice(product));
//some-every--------------------------------------------------------
const students = [
    { name: "hieu", sex : "male" },
    { name: "minh", sex : "male" },
    { name: "an", sex : "male" },
    { name: "tuan", sex : "male" },
    { name: "long", sex : "malee" },
]
function testSome(arr){
    return arr.some((item) => item.sex === "female");

}
function testEvery(arr){
    return arr.every((item) => item.sex === "male");

}
console.log(testEvery(students));
//console.log(testSome(students));