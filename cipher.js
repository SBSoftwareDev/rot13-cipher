// Or fher gb qevax lbhe binygvar!

function rot13(str) {
    const reg = /(?!_)\w/i;
    const decoded = "abcdefghijklmnopqrstuvwxyz";
    const encoded = "nopqrstuvwxyzabcdefghijklm";
    const result = [];

    //Go through all letters in the input string
    str.split('').map((elem) => {

      //If the letter I'm looking at is alphanumeric...
      if(reg.test(elem)) {

        //...return the character from the opposite key, at the same index (case-sensitive)
        if(elem.toUpperCase() === elem){
            const index = encoded.toUpperCase().indexOf(elem);
            result.push(decoded.toUpperCase().charAt(index));
        } else {
            const index = encoded.indexOf(elem);
            result.push(decoded.charAt(index));
        }
      
      //Otherwise, it must be punctuation or whitespace.
      } else {
        result.push(elem);
      }
    });
    
    return result.join('');
}

const example = "Live at Madison Square Garden!";
console.log(rot13(example));