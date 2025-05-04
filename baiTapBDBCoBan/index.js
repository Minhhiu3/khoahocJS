function getDataCallback(callback) {
    setTimeout(() => {
        const data = [1, 2, 3, 4];
        callback(data);
    }, 1000);
}
getDataCallback((data) => {
    console.log(data);

})

//bai 2
function getDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4])
        }, 2000);
    })
}
// Sử dụng

setTimeout(() => {
    getDataPromise()
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
}, 1000); // Sau 1 giây in ra: [1, 2, 3, 4]


//bai3
async function getDataAsyncAwait() {
    try {
        const data = await getDataPromise();
        console.log("3", data);


    }
    catch (error) {
        console.log("co loi", error);

    }
}

getDataAsyncAwait();