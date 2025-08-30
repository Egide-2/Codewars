// const arr = [1,2,3,4,4,5,5,6,6,7,8,11]
// const arr1 = arr.map(num => num%2 === 0)
// console.log(
// arr1)


// - `Object.keys(obj)` – returns an array of property names
// - `Object.values(obj)` – returns an array of property values
// - `Object.entries(obj)` – returns array of [key, value] pairs
// - `Object.assign(target, source)` – copies properties to a target object
// - `Object.freeze(obj)` – makes an object immutable
// - `Object.hasOwnProperty(prop)` – checks if a property exists directly on the object


const person ={
    name:"billy",
    age:67,
    adress:"kigale",
    eat:function(){
        console.log("hello my name is billy i love you")
    }
}

const person1 = Object.create(person)


// console.log(Object.entries(person))
