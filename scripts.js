function hitungkarakter(text) {
  let jumlahkarakter = {};

  for (let i = 0; i < text.length; i++) {
    let karakter = text[i];

    if (jumlahkarakter[karakter]) {
      jumlahkarakter[karakter]++;
    } else {
      jumlahkarakter[karakter] = 1;
    }
  }
  console.log(jumlahkarakter)
  return jumlahkarakter;
}

let input1 = "hello";
let input2 = "aabbbccd";
hitungkarakter(input2)
hitungkarakter(input1)



let hasil = hitungkarakter(input1);

for (let karakter in hasil) {
  console.log(`${karakter} = ${hasil[karakter]}`);
}

