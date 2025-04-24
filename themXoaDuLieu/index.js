const array = [
    { id: 1, name: 'item1' },
    { id: 2, name: 'item2' },
    { id: 3, name: 'item3' },
];

function showData(arr) {
    const table = document.getElementById('list');
    for (let i = 0; i < array.length; i++) {
        const data = document.createElement('div');
        data.innerHTML = `
             <div class="item">${arr[i].id} | ${arr[i].name}</div>
            `;
        table.appendChild(data);
    }
}

// function addItem(arr) {
//     const addBtn = document.addEventListener('click', (event) => {
//         for (let i = 0; i < array.length; i++) {
//             const data = document.createElement('div');
//             data.innerHTML = `
//                  <div class="item">${arr[i].id++} | ${arr[i].name++}</div>
//                 `;
//             addBtn.appendChild(data);
//         }
//     })


// }
function renderList() {
    const list = document.getElementById('list');
    list.innerHTML = arr.map(item => `<div>${item}</div>`).join('');
}
function removeItem(arr) {
    //arr.pop()
    const removeBtn = document.addEventListener('click', (event) => {
        console.log(arr.length);
        console.log(arr);

        arr.splice(-1, 1);
        renderList();

    });
}
//addItem(array);
showData(array);
removeItem(array);

