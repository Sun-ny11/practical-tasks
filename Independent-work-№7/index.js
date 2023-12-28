//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
const repeatString = (str, quantity, delimiter) => {
   let a = ""
   for (let i = 0; i < quantity; i++) {
      i === quantity - 1 ? a += str : a += str + delimiter
   }
   console.log(a);
}
repeatString("yo", 3, " ") //"yo yo yo"
repeatString("yo", 3, ",") //=> "yo,yo,yo"/*  */
// for или str.repeat()

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
const checkStart = (str, comparison) => {
   console.log(str.toLowerCase().startsWith(comparison));
}
checkStart("Incubator", "inc")//  => true
checkStart("Incubator", "yo")//  => false
// str.startWith() slice indexOF

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
const truncateString = (str, quantity) => {
   if (str.length >= quantity) {
      console.log(str.slice(0, quantity) + "...");
   }
}

truncateString("Всем студентам инкубатора желаю удачи!", 15)// => "Всем студе..."

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
const getMinLengthWord = (str) => {
   if (str.length > 0) {
      const arr = str.split(' ')
      return arr.reduce((acc, current) => {
         return acc.length < current.length ? acc : acc = current

      })
   } else {
      return null
   }

}
console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!")); //=> "Всем"
console.log(getMinLengthWord("")); //=> null
// split()

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.

const setUpperCase = (str) => {
   const arr = str.toLowerCase().split(" ").map(el => el[0].toUpperCase() + el.slice(1))
   return arr

}

console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"));//=> "Всем Студентам Инкубатора Желаю Удачи!"

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

const isIncludes = (str, substr) => {
   const strToLower = str.toLowerCase()
   const substrToLower = substr.toLowerCase()

   let res
   for (i of substrToLower) {
      if (strToLower.includes(i) === false) {
         return false
      } else {
         res = strToLower.includes(i)
      }
   }
   return res
}

console.log(isIncludes("Incubator", "Cut")) //=> true
console.log(isIncludes("Incubator", "table")); //=> false
console.log(isIncludes("Incubator", "inbba")) //=> true
console.log(isIncludes("Incubator", "inba")) //=> true
console.log(isIncludes("Incubator", "Incubatorrr"))//=> true




