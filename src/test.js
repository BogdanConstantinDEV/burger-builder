const obj = {
    cheese: 0,
    salad: 2,
    meat: 0,
    bacon: 0
}
for (let key in obj) {
    obj[key] = obj[key] <= 0
}
console.log(obj)