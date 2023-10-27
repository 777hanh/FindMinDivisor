function minResult(A, B) {
    // Hàm tìm ước số chung lớn nhất (UCLN)
    function ucln(a, b) {
        if (b == 0) return a;
        return ucln(b, a % b);
    }

    // Tìm UCLN của A và B
    let uclnResult = ucln(A, B); // 1

    // Nếu UCLN bằng B, không cần trả đồng xu
    if (uclnResult == B) {
        return { minResult: 0, temp: 0 };
    }

    // Tìm số nguyên dương mà A chia hết
    let divisors = [];
    for (let i = 1; i <= Math.sqrt(A); i++) {
        if (A % i == 0) {
            // Nếu các ước số không phải là căn bậc hai
            if (A / i == i) {
                divisors.push(i);
            } else {
                // Nếu không, thêm cả i và A/i
                divisors.push(i);
                divisors.push(A / i);
            }
        }
    }

    // Tìm giá trị ít nhất cần trả về
    let minResult = A + B;
    let temp = minResult;
    for (let i = 0; i < divisors.length; i++) {
        minResult = Math.min(minResult, Math.abs(B - divisors[i]));
        if (minResult === Math.abs(B - divisors[i])) {
            temp = divisors[i];
        }
    }

    return { minResult, temp };
}

// console.log(minResult(51, 5)); // Kết quả: 2
// console.log(minResult(12, 7)); // Kết quả: 1
// console.log(minResult(49, 5)); // Kết quả: 2
// console.log(minResult(12, 6)); // Kết quả: 0
// console.log(minResult(6, 12)); // Kết quả: 6
// console.log(minResult(30, 11)); // Kết quả: 1

const $ = document.querySelector.bind(document);

const numA = $('#a');
const numB = $('#b');
const resultEle = $('#result');
const btn = $('#btn');
const p = $('#paragraph');
const p1 = $('#paragraph1');

btn.addEventListener('click', () => {
    const a = parseInt(numA.value);
    const b = parseInt(numB.value);
    if (isNaN(a) || isNaN(b)) {
        return;
    } else {
        const result = minResult(a, b);
        resultEle.value = result.minResult;
        p.innerText =
            (result.temp !== 0 && `Giải thích:  ${a} % ${result.temp} = 0`) || `Giải thích:  ${a} % ${b} = 0`;
        p1.innerText =
            (result.temp < b && `${b} (số B) cần giảm ${result.minResult} đơn vị`) ||
            `${b} (số B) cần tăng ${result.minResult} đơn vị!`;

        numA.focus();
    }
});
