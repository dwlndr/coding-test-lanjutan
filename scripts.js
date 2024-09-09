function hitungkarakter(text) {
    let jumlahkarakter = {}
    
    for (let i = 0; i < text.length; i++) {
        let karakter = text[i];

        if (jumlahkarakter[karakter]) {
            jumlahkarakter[karakter]++;
        }else {
            jumlahkarakter[karakter] = 1;
        }
    }

    return jumlahkarakter
}

let coba = "hello";


// 