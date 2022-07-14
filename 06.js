function rangef(num1, num2) {
    let result = '';
    while(num1 <= num2) {
        result += `${num1} `;
        num1++;
    }
    return result;
}

input1 = 4;
input2 = 8;
console.log(rangef(input1, input2));