'use strict';
// средство еsб: блок "левых" объявлений
const sentences = [
{ subject: 'JavaScript',verb:'is',object: 'great' },
{ subject: 'Elephants',verb:'are',object: 'large' },
]
//средство еsб: деструктуризация объекта
function say ({ subject, verb , object }) {
}
// средство еsб: строки шаблона
console.log ('${subject} ${verb} ${object}');
// средство еsб: for .. of
for (let s of sentences ) {
say(s) ;
}