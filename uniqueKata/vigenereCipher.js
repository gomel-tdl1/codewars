function VigenèreCipher(key, abc) {
    this.encode = function (str) {
        return str.split('').map(function (v, i) {
            if (abc.indexOf(v) == -1) {
                return v;
            }
            return abc[(abc.indexOf(v) + abc.indexOf(key[i % key.length])) % abc.length];
        }).join('');
    };
    this.decode = function (str) {
        return str.split('').map(function (v, i) {
            if (abc.indexOf(v) == -1) {
                return v;
            }
            let ind = abc.indexOf(v) - abc.indexOf(key[i % key.length]);
            return abc[ind < 0 ? ind + abc.length : ind];
        }).join('');
    };
}

window.onload = () => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let bol=confirm("Encode?");
    if(bol){
        let word=prompt("Enter word","");
        let key=prompt("Enter key","");
        let c = new VigenèreCipher(key, alphabet);
        console.log(c.encode());
    }else{
        let word=prompt("Enter word","");
        let key=prompt("Enter key","");
        let c = new VigenèreCipher(key, alphabet);
        console.log(c.decode());
    }
};