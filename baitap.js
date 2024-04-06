//Assignment:
const initialArray = ["a", "b", "c"];
const initialObject = {
  giaiA: "hello world",
  giaiB: "javascript",
  giaiC: "not pass",
};
let resultArr = [];
let resultObject = {};

// 1. Trả về một array bằng initialArray và có thêm 1 object chứa initialObject
// 2. Trả về một object có key initialArrayClone có giá trị initialArray
// 3. Trả về một object chỉ có 2 key giaiA, giaiB và có key arrayAB là giá trị 'a', 'b' trong array ban đầu
// 4. Trả về một array có thêm key 'd' thay thế cho 'b'
// 5. Trả về một array chỉ tồn tại key 'a'
// 6. Trả về một array nhưng giá trị mong muốn là ['a', {giaiB: 'javascript'}, 'c']
// 7. Viết một function có giá trị truyền vào, nếu giá trị truyền vào bằng 'a', 'b' hoặc 'c' thì trả về value tương ứng của Object giaiA, giaiB, giaiC
const funcTest = (giatri) => {
  return;
};
funcTest("a");

//bait1:
resultArr = initialArray.concat([initialObject]);
console.log("Result Array:", resultArray);

//baitp2:
resultArr = { initialArrayClone: initialArray };
console.log("Result Object:", resultObject);

//baitap3:
resultObject = {
  giaiA: initialObject.giaiA,
  giaiB: initialObject.giaiB,
  arrayAB: initialArray.slice(0, 2),
};
console.log("Result Object:", resultObject);

//baitap4:
resultArr = initialArray.map((item) => (item === "b" ? "d" : item));
console.log("Result Array:", resultArray);

//baitap5:
resultArr = initialArray
  .map((item) => (item === "a" ? item : null))
  .filter(Boolean);
console.log("Result Array:", resultArray);

//baitap6:
resultArr = [
  initialArray[0], // 'a'
  { giaiB: initialObject.giaiB }, // { giaiB: 'javascript' }
  initialArray[2], // 'c'
];
console.log("Result Array:", resultArray);

//baitap7:

funcTest = (giatri) => {
  const initialObject = {
    giaiA: "hello world",
    giaiB: "javascript",
    giaiC: "not pass",
  };

  switch (giatri) {
    case "a":
      return initialObject.giaiA;
    case "b":
      return initialObject.giaiB;
    case "c":
      return initialObject.giaiC;
    default:
      return "Invalid input. Please provide 'a', 'b', or 'c'.";
  }
};

console.log(funcTest("a")); // Output: "hello world"
