const obg = {
     name:"tanjin",
     age: '18+',
     adress:{
         city: 'narayangonj',
         village: 'bikrompur'
     },
     function (){
        const man = this.name
        return man;
     }
}
// const seeName = Object.keys(obg)
// const seeNames = Object.values(obg)
const senaem = Object.entries(obg)
console.log(senaem);
for(const name in obg){
    console.log(name)
}
const obj ={a:1, b:7, c:3, length:2};
console.log(Object.keys(obj).length);
const obj1= {module: 35, video:2}; const obj2= {module: 35, video:2};
console.log(obj1 === obj2);
const getGirlFriend= (name = "chokina")=>"name"; console.log(getGirlFriend());