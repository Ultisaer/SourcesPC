// 
export function solution(json1 = {
    name: "Mr. Michi",
    food: "Pescado"
  }, json2 = {
    age: 12,
    color: "Blanco"}) {
    let merge = { ...json1, ...json2 }
    return merge
  }