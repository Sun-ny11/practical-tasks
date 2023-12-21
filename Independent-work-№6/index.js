//Файл с задачами по занятию №6. 

const students = [
   {
      id: 1,
      name: "Bob",
      age: 22,
      isMarried: true,
      scores: 85,
      // к 14 задаче: friends: ["Alex", "Nick", "John", "Helen", "Ann"]
   },
   {
      id: 2,
      name: "Alex",
      age: 21,
      isMarried: true,
      scores: 90,
   },
   {
      id: 3,
      name: "Nick",
      age: 20,
      isMarried: false,
      scores: 120
   },
   {
      id: 4,
      name: "John",
      age: 19,
      isMarried: false,
      scores: 100
   },
   {
      id: 5,
      name: "Helen",
      age: 20,
      isMarried: false,
      scores: 110
   },
   {
      id: 6,
      name: "Ann",
      age: 20,
      isMarried: false,
      scores: 105
   },
];

const user = {
   name: "Bob",
   age: 23,
   friends: ["Alex", "Nick", "John"]
}

const superUser = {
   name: "Bob",
   age: 23,
   friends: [
      {
         id: 1,
         name: "Ann",
         age: 22,
         isMarried: true,
         scores: 85
      },
      {
         id: 2,
         name: "Alex",
         age: 21,
         isMarried: true,
         scores: 90,
      },
      {
         id: 4,
         name: "John",
         age: 19,
         isMarried: false,
         scores: 100
      }
   ]
}
// NB!!! Все преобразования выполняем иммьютабельно, если не сказано иное

//1. Создайте полную (глубокую) копию объекта user
let deepCopyUser = { ...user, friends: [...user.friends] };

//2. Создайте полную (глубокую) массива students
let deepCopyStudents = students.map(el => ({ ...el }));

//3. Создайте полную (глубокую) копию объекта superUser
let deepCopySuperUser = { ...superUser, friends: superUser.friends.map(el => ({ ...el })) };

//4. Отсортируйте students по успеваемости (лучший идёт первым)(sort)
let sortedByScores = students.map(el => ({ ...el })).sort((a, b) => b.scores - a.scores)
console.log(sortedByScores);

//5. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = students.filter(el => el.scores >= 100);
console.log(bestStudents)

//6. Сформируйте массив имён студентов (map)
let studentsNames = students.map(el => el.name);
console.log(studentsNames)

//7. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = students.map(el => ({ ...el, isStudent: true }));
console.log(trueStudents)

//8. Nick женился. Выполните соответствующие преобразование массива
// students (map)
let studentsWithMarriedNick = students.map(el => el.name === "Nick" ? { ...el, isMarried: true, } : el);
console.log(studentsWithMarriedNick)

// Внесите  следующие изменения в объект superUser:
// NB!!! Все преобразования выполняем иммьютабельно, если не сказано иное

//9.Удалите объект с id=1 из массива  friends
let superUserCorrect1 = { ...superUser, friends: superUser.friends.filter(el => el.id !== 1) };

//10. поменяйте объекту с id=2 из массива  friends значение св-ва name на
// "Donald"
let superUserCorrect2 = { ...superUser, friends: superUser.friends.map(el => el.id === 2 ? { ...el, name: "Donald" } : el) };

//11. добавьте в список друзей нового друга
const newFriend = {
   id: 5,
   name: "Nick",
   age: 27,
   isMarried: false,
   scores: 99
}
let superUserCorrect3 = { ...superUser, friends: [...superUser.friends, newFriend] };

// И поднимаем руку!!!!

//12. Найдите студента с самым высоким баллом не используя методы массивов и
// Math.max()*
let bestStudent = 0;

for (let j = 1; j < superUser.friends.length; j++) {
   const temp = superUser.friends[j].scores
   if (superUser.friends[j - 1].scores > superUser.friends[j].scores) {
      superUser[j].scores = superUser[j - 1].scores
      superUser[j - 1].scores = temp
   }
   bestStudent = temp
}

for (let i = 0; i < superUser.friends.length; i++) {
   if (superUser.friends[i].scores === bestStudent) {
      console.log(superUser.friends[i])
   }
}


//13. Найдите сумму баллов всех студентов (reduce)*
let scoresSum = superUser.friends.reduce((acc, cur) => {
   acc += cur.scores
   return acc
}, 0);
console.log(scoresSum)

// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
   //..............................
   return students.map(el => ({ ...el, friends: students.filter(friend => el.name !== friend.name).map(name => name.name) }))
}
console.log(addFriends(students));

// 15. Д.З.: Напишите функцию getBestStudents, которая принимает параметром
// массив students  и количество лучших студентов, которое надо получить в
// новом массиве. Если второго параметра нет, то по умолчанию возвращает лучшего студента

const getBestStudents = (students, quantity) => {
   const best = students.map(el => ({ ...el })).sort((a, b) => b.scores - a.scores)
   if (quantity === undefined) {
      return best[0]
   } else {
      const a = best.slice(0, quantity)

      let qwes = quantity - best.length

      for (let i = 0; i < qwes; i++) {
         a.push(null)
      }

      return a

   }
}
console.log(getBestStudents(students, 10));
// getBestStudents(students) => {name: "Nick", age: 20, isMarried: false, scores: 120}
// getBestStudents(students, 3) => [{...}, {...}, {...}]
// getBestStudents(students, 10) => [{}, {}, ...., {}, null, null, null, null ]




// return best.filter((item, index, arr) => index <quantity)



