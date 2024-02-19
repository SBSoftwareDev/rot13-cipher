import inquirer from "inquirer";

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

inquirer
    .prompt([
        {
            name: "inputText",
            message: "Enter message to encode OR decode: "
        }
    ])
    .then((answers) => {
        console.log("Translation: ", rot13(answers.inputText));
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.error("Unable to render question: ", code);
          } else {
            console.error("Error: ", code);
          }
    });