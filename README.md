# ROT13 Cipher (a.k.a. Caesar Cipher)

**ROT13** is a simple application of an ancient algorithm. Because there 
are 26 letters in the alphabet, this algorithm is *its own inverse*. Applying 
the same method can reverse the process!

## My Implementation

This algorithm is based on the traditional A->N key, as security is most notably
**not** a concern. As a minimum requirment, this method preserves symbols and whitespace.
Preserving case was not an option on FCC's web editor, as the verification process 
*required* the output to be all uppercase letters. After submitting the project, I cleaned 
it up and added the case-preserving feature. Run the program twice to get your original input!

## Want to try it out?
Here are two ways to run my program:
1) Use my website
2) Use a live code editor (or whatever it's called)
2) Download the project yourself and build upon it! 
### My Website
[Click here]() to see what it's all about!
### Live Editor
Copy and paste my code into [this website]() and give it the beans!
### Advanced Users Only
Want to take a deeper dive into the Matrix? Here's how you can get set up with customizing 
this program and seeing what sort of mistakes you can make (it's all apart of the process!).
**You'll Need:**
* [**Visual Studio Code**]() (*An environment to write your own programs!*)
* **Node.JS** (*So you can execute JavaScript code on your machine, rather than through a web browser!*)

1) After installing the above programs, make a new folder in any directory for this project.
2) Make a new file inside called "main.js". This can be named anything but must have the '.js' file extension.
3) Open main.js in VS Code and feel free to paste the contents of 'cipher.js' from the repository.
4) In VS Code, open the integrated terminal with Ctrl+`, or open through the 'View' tab.
*Note: In the terminal, be sure you are pointing the directory of 'main.js'*
5) We need to install one package for Node to use (inquirer, which nicely handles user input) and 
    set up the package directory. In the terminal, run the commands
'''
npm init -y
npm i inquirer
'''
The first command lets Node know that you are using external dependencies in your project,
and makes a package.json file. The -y modifier populates the .json file with default options.
The second command installs the package [inquirer]() in the program directory, which is used by 
my program to gather user input.
6) Now that we've set up the environment and libraries, run the program like so
'''
node main.js
'''
> [See any issues? Let me know!](https://www.DeveloperSean.com)