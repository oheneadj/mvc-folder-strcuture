 const welcome = (req, res) => {
    res.send("<h1>This is the home baby! 😅</h1>");
 }

 const greet = (req, res) => {
    res.send("Hello, MERN Stacker 😎");
 }

 const hello = (req, res) => {
     res.send("Hi Eunice, how are you?");
 }

 module.exports = {
     welcome,
     greet,
     hello
 }