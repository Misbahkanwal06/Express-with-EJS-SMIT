const express = require('express');  // import express
const app = express();  
const path = require('path');

app.set('view engine', 'ejs')     // import EJS
// console.log(app.get("view engine"));
const mainRouter = require('./routes/index');
app.use(mainRouter);

const apiKeymiddleware = require('./middleware/api');
app.use(apiKeymiddleware);

// app.get('/', (req,res)=>{
//     res.render('index',{
//        title: "myHomePage"
//     });
// });

// app.get('/about',(req,res)=>{
//     res.render('about',{
//         title: "myAboutPage"
//      });
// });


// app.get('/style',(req,res)=>{
//     res.sendFile(path.resolve(__dirname) + "/style.css" );
// })

 app.listen(3001, () => {
    console.log('Server is running on port 3001 ');
 });  //3001 is a local host

