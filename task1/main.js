
const firstRow = 'Slow and steady wins the race';
const secondRow = 'You can say that again';

function countLetter(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}

function getRow(firstRow, secondRow, letter = 'a') {
    const count1 = countLetter(firstRow, letter);
    const count2 = countLetter(secondRow, letter);

    if (count1 > count2) {
        return firstRow;
    } else if (count2 > count1) {
        return secondRow;
    } else {
        return "Кількість літер однакова або відсутня в обох рядках.";
    }
}

console.log('Результат getRow():', getRow(firstRow, secondRow));

function runTask1() {
    const r1 = prompt("Введіть перший рядок:", firstRow) || firstRow;
    const r2 = prompt("Введіть другий рядок:", secondRow) || secondRow;
    const letterToFind = prompt("Введіть літеру, яку потрібно порахувати:", "a");

    if (letterToFind && letterToFind.length === 1) {
        const result = getRow(r1, r2, letterToFind);
        alert(`Рядок, у якому літер '${letterToFind}' більше:\n"${result}"`);
    } else {
        alert("Будь ласка, введіть рівно одну літеру.");
    }
}
