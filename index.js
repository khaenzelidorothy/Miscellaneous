let x =["milk", "bread"]
function additem(){
x.push('eggs','salt')
return x
}
additem()
console.log(x)

l = ["wash dishes", "do homework", "read"]
function removeItem(){
    l.pop()
    return l
}
removeItem()
console.log(l)

y =["burger", "fries"] 
z =["soda", "salad"]
 
function combineLists(){
   f = y.concat(z)
   return f
}
console.log(combineLists())

c = [56, 75, 89, 90, 43, 30]
function filterOut(){
    let f = c.filter(item => item<50)
    return f
}
console.log(filterOut())

y =  ["banana", "orange", "apple"]
function searchItem(){
    return(y.includes("apple"))
    // return("apple" in y)
}
console.log(searchItem())

h =[200, 500, 300]
function getTotal(){
    let total = h.reduce((acc,prev) =>
        acc+prev,0)
        return total
}
console.log(getTotal());

k =["Alice", "Bob", "Charlie"]
function getItem(){
    k.shift()
    return k
}
console.log(getItem());

g =[10, 20, 30]
