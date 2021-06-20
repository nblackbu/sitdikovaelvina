// Заполнить массив нулями, кроме первого и последнего элементов, которые должны быть равны единице.

var array = [1,2,3,3];
y = array.length - 1;
for (let i = 0; i <= length; i++) {
    if (i % 2) {
      array[i] = '0';
    } else {
      array[i] = '1';
    }
  }
console.log(array);

// Заполнить массив нулями и единицами, при этом данные значения чередуются, начиная с нуля

function foo2() {
    const len = 10;
    let arr = [];
  
    for (let i = 0; i <= len; i++) {
      if (i % 2) {
        arr.push(0);
      } else {
        arr.push(1)
      }
    }
    return arr;
  }
  
  console.log(foo2());

//   Создать массив, который одинаково читается как слева направо, так и справа налево

  function foo2(item) {
    let arr = [1, 2, 3, 4, 5];
    let result = [];
    let y = arr.length - 1;

    for (let elem of arr) {
    result.push(elem);
}
for (let i = arr.length - 1; i >= 0; i--) {
result.push(arr[i]);
}
}

console.log(foo2());

