# array (mảng)
- có thể thêm phần tử vào mảng: arr[1]="hieu";
- độ dài của mảng sẽ bằng index(mã số) phần tử cuối cùng +1
* pop()
- xóa 1 phần tử ở cuối cùng mảng.
- thay đổi mảng gốc.
- trả về phần tử bị xóa
- sắp xếp tăng và giảm dần theo (a-b là tăng dần b-a là giảm dần)

# push()
- push() trả về độ dài của mảng.
- push(1,2,3) thêm 1 hoặc nhiều tham số vào mảng ví dụ : 
arr = ["a", "b", "c",]; -> arr = ["a", "b", "c", "1","2","3"];
 trả về độ dài mới của mảng.

# unshift()
- thêm 1 or nhiều phần tử ở đầu mảng .
- thay đổi mảng gốc
- trả về độ dài mới của mảng

### các phương thức của array 
* Thêm/Xóa: push(), pop(), unshift(), shift(), splice()

* Duyệt & Biến đổi: map(), filter(), reduce(), forEach()

* Tìm kiếm: indexOf(), includes(), find(), findIndex()

* Sắp xếp & Đảo ngược: sort(), reverse()

* Trích xuất & Sao chép: slice(), concat(), join()

* Kiểm tra kiểu mảng: Array.isArray()

# object (chuỗi)
* object[key] = value; là gán trực tiếp 1 cặp key value vào trong chuỗi

# map 
map là phương thức của mảng (Array)
Dùng để duyệt qua từng phần tử của mảng
và tạo ra một mảng mới có cùng độ dài,
với các phần tử đã được biến đổi theo hàm callback.
arr.map((phần tử trong mảng, vị trí của phần tử trong mảng, mảng gốc) => phần tử trong mảng |and| điều kiện)

# filter 
filter là 1 phương thức của array tạo ra 1 bản sao của mảng gốc
chứa các phần tử của mảng gốc đã vượt qua điều kiện của hàm kiểm tra 
filter không thay đổi mảng gốc mà trả về mảng mới chứa các phần tử của mảng gốc đã thỏa điều kiện 
arr.filter((phần tử trong mảng) => điều kiện lặp )

# include 
include là 1 phương thức của array & string dùng để kiểm tra xem mảng hoặc chuỗi có chứa giá trị đã chuyênf vào hay không
duyệt qua từng phần tử của mảng và trả về true/false 
 arr.includes("giá trị cần tìm", vị trí)

# split 
+ split là phương thức của string(chuỗi)
  giúp chia 1 chuỗi lớn "a b c d e" thành các chuỗi nhỏ "a", "b", "c", "d", "e" theo kí tự phân tách split(" ")
+ sau đó trả về 1 mảng mới chứa các phần của chỗi đã bị phân tách .
+ có thể giới hạn số lượng phần tử được trả về trong mảng kết quả split(" ", number);

# foreach : 
+ element: phần tử hiện tại đang được duyệt.
+ index: chỉ số của phần tử đó trong mảng.
+ array: chính mảng gốc đang duyệt.
+ Muốn làm gì đó cho từng phần tử → dùng forEach().

# reduce  : 
+ giá trị return của reduce là giá trị ở vòng lặp cuối cùng.
+ accumulator: giá trị tích lũy qua mỗi vòng lặp.
+ currentValue: phần tử hiện tại.
+ index: chỉ số hiện tại (tùy chọn).
+ array: mảng gốc (tùy chọn).
+ initialValue: giá trị khởi tạo cho accumulator (nên có!).
+ Muốn rút gọn, gom lại → dùng reduce().
+ cấu trúc .reduce((acc,cur,index,arr) => {
  xử lí
  return acc;
},{giá trị khởi tạo cho acc}[giá trị khởi tạo cho acc])

# flat
* flat là phương thức của array giúp làm phẳng mảng và tạo ra 1 mảng mới với tất cả các mảng con,phần tử của mảng cũ.
* .flat(độ sâu);
* ví dụ: [1,[2,3],4,[5,[6]]].flat(1) thì sẽ ra [1,2,3,4,5,[6]]