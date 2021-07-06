console.log('------------- # 4');
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
ask(
    "Вы согласны?",
    () => { console.log("Вы согласились."); },
    () => { console.log("Вы отменили выполнение."); }
);

console.log('------------- # 5');
let string5 = 'my-short-string';
let array5 = string5.split('-');
console.log(array5);

console.log('------------- # 6');
let array6 = ['JavaScript', 2015];
let string6 = array6.join(' ');
console.log(string6);

console.log('------------- # 7');
let users7 = [{id: 1, name: "Vic", age: 21},  {id: 2, name: "Petya", age: 30}, {id: 3, name: "Jon", age: 5}];
let filterUsers = users7.filter(user => user.age < 20);
console.log(filterUsers);

console.log('------------- # 8');
let users8 = [{id: 1, name: "Vic", age: 21},  {id: 2, name: "Petya", age: 30}, {id: 3, name: "Jon", age: 5}];
let names = users8.map(user => user.name);
console.log(names);


console.log('------------- # 9');
function filterRangeInPlace(arr, a, b) {
    for(let i = 0; i < arr.length; i++){
        arr[i] >= a && arr[i] <= b ? null : arr.splice(i, 1);
		// if(arr[i] >= a && arr[i] <= b){
		// 	continue;
		// } else {
        //    arr.splice(i, 1)
        // }
	}
}
let arr = [5, 3, 8, 1, 2, 6];
filterRangeInPlace(arr, 1, 4);
console.log(arr);

console.log('------------- # 10');
function stringToArray(string, separator) {
    return string.split(separator)
}

let test = 'test/func';
console.log(stringToArray(test, '/'));

console.log('------------- # 11');
function slArray(arr, startIndex, endIndex){
    return arr.slice(startIndex, endIndex);
}

let arr11 = [5, 3, 8, 1];
let range = slArray(arr11, 1, 4);
console.log(range);
console.log(arr11);

console.log('------------- # 12');
function sum(...args) {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}

console.log(sum(2, 5, 7, 9, 11))