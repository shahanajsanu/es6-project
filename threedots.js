const ages1 = [11, 15, 21, 10, 20, 25]
const ages2 = [ 12, 23, 10, 26, 17, 14]
const ages3 = [ 12, 23, 17, 14]
const allAges = ages1.concat(ages2).concat([8]).concat(ages3);
const allAges2 = [...ages1, ...ages2, 8, ...ages3]
console.log(allAges2);


const bus = 650;
const min = 450;
const soch = 350;
const totalTaka = [650, 450, 350]
//const maximum = Math.max(bus, min, soch);
const maximum = Math.max(...totalTaka);
console.log(maximum);
