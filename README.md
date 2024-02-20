# ROT13 Cipher (a.k.a. Caesar Cipher)

**ROT13** is a simple application of an ancient, equally simple algorithm. It shifts the alphabet by 13 letters. Because there 
are 26 letters in the alphabet, this algorithm is *its own inverse*. Applying 
the same method twice can reverse the process!

## My Implementation

This algorithm is based on the traditional A -> N key, as security is most notably
**not** a concern. The program shifts strings of text to or from their coded state. As a minimum requirment, this project preserves symbols and whitespace.
Preserving case was considered, but put on the back burner. After success I cleaned 
it up and added the case-preserving feature. Run the program twice to get your original input!

## Want to try it out?
Here are three ways to run my program, in order of complexity:

1) Use my website! [Click here](https://www.DeveloperSean.com) to see what it's all about!

2) Use an online JavaScript compiler.
    - Copy and paste my code into [Programiz](https://www.programiz.com/javascript/online-compiler/) and give it the beans!

3) Download the project yourself and build upon it! 

---

### Option 3: Advanced Users Only
Want to take a deeper dive into the Matrix? Here's how you can get set up with customizing 
this program and see what sort of mistakes you can make (it's all apart of the process!)  

**You'll Need:**

* [**Visual Studio Code**](https://code.visualstudio.com/) (*An environment to write your own programs! It's free!*)

* [**Node.JS**](https://nodejs.org/en) (*So you can execute JavaScript code on your machine, rather than through a web browser! Also free!*)

After installing the above programs, make a new folder in any directory for this project.  

Download *cipher.js* into the new project folder, and open the file in VS Code.  

In VS, open the integrated terminal with Ctrl+`, or open through the 'View' tab. **Alternatively, you can open your local command line (CMD on Windows).**  
- *In EITHER terminal, be sure you are working in the directory of 'main.js'*  

Entering the following command will run the program. Huzzah!

```
node main.js
```

Thanks for reading, and good luck out there!
---
> See any issues? [Let me know!](https://www.DeveloperSean.com)