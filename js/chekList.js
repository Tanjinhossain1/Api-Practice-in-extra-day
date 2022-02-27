const read = {
    class: 'vercity',
    roll: '02'
}
const age = [18,20,13]
const detail = {
    name: 'tanjin Hossain',
    Gender: 'Male',
    study: read.class,
    age: age,
    hoby:{main:'web developer',
            extra:'pegion',
},
    combine: function(){
        const result ='Name:'+ this.name + ' Gender: '+ this.Gender + ' Study: '+ this.study+ 'age'+ this.age;
        return result;
    }
}
const main = detail.combine();
// console.log(main)
// main()
// console.log(detail)
const usingTample = `
   hoby: ${detail.hoby.main} age: ${detail.age[1]} extraHoby: ${detail.hoby.extra}
`
// console.log(usingTample)
const numbers = () => 80+9;
// 3.2 
const divited = number =>number/7;
// 3.3 
const sam = (num,num1) => (num+num1)/2;
// 3.4 
const multiline = (number, numbers) =>{
    const fixNumber = 7;
    const sam = number + fixNumber;
    const sams = numbers + fixNumber;
    const result = sam + sams;
    return result;
}
const number = [21,30,40,50,6,7,8,9,1]
const eacth = number.map(number => number/7) ;
// console.log(eacth)
number.forEach(element => {
    
});
const ele = number.filter(number => number)
const eless = number.find(number=>number)
// console.log(eless)
// map: eta holo loop throw kore ebong kono condition dite chaile dite parbe 
// forEach eta holo loop kore abong multiline e o kora jai peramiter soho 
//filter eta map er mot loop kore but kono conditon dewa jai na 
// find eta sudo kono conditon er 1st er tai output a dekhai
const name = detail.name;
const balance = number[2]
console.log(name,balance)