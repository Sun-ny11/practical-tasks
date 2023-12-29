// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    // console.log(nums)
    //...здесь пишем код.
    return nums.reduce((acc, cur) => {
        return acc += cur
    })
    // В return стоит "заглушка", чтоб typescript не ругался
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    //...здесь пишем код.
    if (a < (b + c) && c < (a + c) && c < (a + b)) {
        if (a === b && b === c) {
            return "10"
        } else if (a === b || b === c || a === c) {
            return "01"
        } else if (a !== b && b !== c && a !== c) {
            return "11"
        }
    } else {
        return "00"
    }

    // В return стоит "заглушка", чтоб typescript не ругался

}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    //...здесь пишем код.
    return number.toString().split('').map(str => parseInt(str)).reduce((acc, cur) => {
        acc = acc + cur
        return acc
    })
    // В return стоит "заглушка", чтоб typescript не ругался

}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    //...здесь пишем код.
    const even = arr.filter((el, i) => i % 2 === 0).reduce((acc, cur) => acc += cur)
    const notEven = arr.filter((el, i) => i % 2 !== 0).reduce((acc, cur) => acc += cur)
    // В return стоит "заглушка", чтоб typescript не ругался
    return even > notEven
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    //...здесь пишем код.
    return array.filter(el => Number.isInteger(el) && el > 0).map(el => Math.pow(el, 2))

    // В return стоит "заглушка", чтоб typescript не ругался
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    //...здесь пишем код.
    if (N === 0) {
        return 0
    } else {
        return N + sumFirstNumbers(N - 1)
    }
    // В return стоит "заглушка", чтоб typescript не ругался
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    //...здесь пишем код.
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    const result = []

    for (let i = 0; i < banknotes.length; i++) {
        const banknote = banknotes[i];
        while (amountOfMoney - banknote >= 0) {
            amountOfMoney = amountOfMoney - banknote
            result.push(banknote)
        }
    }

    // В return стоит "заглушка", чтоб typescript не ругался
    return result
}