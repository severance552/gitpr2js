
function formattedPhone(phone) {
    if (!phone) return "Формат функції неправильний";

    let cleaned = phone.replace(/[\s\-\(\)]/g, '');
    let nationalNumber = "";

    if (cleaned.startsWith('+380') && cleaned.length === 13) {
        nationalNumber = cleaned.substring(3);
    } else if (cleaned.startsWith('+80') && cleaned.length === 12) {
        nationalNumber = cleaned.substring(2);
    } else if (cleaned.startsWith('80') && cleaned.length === 11) {
        nationalNumber = cleaned.substring(1);
    } else if (cleaned.startsWith('0') && cleaned.length === 10) {
        nationalNumber = cleaned;
    } else {
        return "Формат функції неправильний";
    }

    const code = nationalNumber.substring(0, 3);
    const part1 = nationalNumber.substring(3, 6);
    const part2 = nationalNumber.substring(6, 8);
    const part3 = nationalNumber.substring(8, 10);

    return `+38 (${code}) ${part1}-${part2}-${part3}`;
}

console.log(formattedPhone('+80664567890'));
console.log(formattedPhone('80971234567'));
console.log(formattedPhone('0671234567'));
console.log(formattedPhone('12345'));

function runTask2() {
    const inputPhone = prompt("Введіть номер телефону (наприклад: +80664567890, 80971234567 або 0671234567):");
    if (inputPhone !== null) {
        const result = formattedPhone(inputPhone.trim());
        alert(result);
    }
}
