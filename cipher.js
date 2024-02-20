// Or fher gb qevax lbhe binygvar!

function rot13(str) {
    const reg = /(?!_)\w/i;
    const decoded = "abcdefghijklmnopqrstuvwxyz";
    const encoded = "nopqrstuvwxyzabcdefghijklm";
    const result = [];
    str.split('').map((elem) => {
      if(reg.test(elem)) {
        if(elem.toUpperCase() === elem){
            const index = encoded.toUpperCase().indexOf(elem);
            result.push(decoded.toUpperCase().charAt(index));
        } else {
            const index = encoded.indexOf(elem);
            result.push(decoded.charAt(index));
        }
      } else {
        result.push(elem);
      }
    });
    
    return result.join('');
}

const example = "Live at Madison Square Garden!";
console.log(rot13(example));