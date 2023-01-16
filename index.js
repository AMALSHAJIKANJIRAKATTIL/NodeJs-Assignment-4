const express=require('express');

const body=require('body-parser');

const app=express();

app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(body.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.send('Hello world!');
});

app.post('/add',(req,res)=>{
    
    let num1=req.body.num1;
    let num2=req.body.num2;
    // console.log(req.body);
    // res.end()

    if(isNaN(num1) || isNaN(num2)){
        return res.status(200).json({ "status": "Failed",
        "message": "Invalid data types" }
       );
    }

    res.status(200).json({ "status": "success",
    "message": "The sum of given two numbers", 
   "sum": num1+num2 }
   );
    
})


app.post('/sub',(req,res)=>{
    
    let num1=req.body.num1;
    let num2=req.body.num2;
    // console.log(req.body);
    // res.end()
    if(isNaN(num1) || isNaN(num2)){
        return res.status(200).json({ "status": "Failed",
        "message": "Invalid data types" }
       );
    }
    res.status(200).json({
        "status": "success",
    "message": "The difference of given two numbers", 
    "Substraction":num1-num2});
    
})



app.post('/mul',(req,res)=>{
    
    let num1=req.body.num1;
    let num2=req.body.num2;
    // console.log(req.body);
    // res.end()
    if(isNaN(num1) || isNaN(num2)){
        return res.status(200).json({ "status": "Failed",
        "message": "Invalid data types" }
       );
    }
    res.status(200).json({
        "status": "Success",
    "message": "The product of given two numbers", 
    "Multiplication":num1*num2});
    
})


app.post('/divide',(req,res)=>{
    
    let num1=req.body.num1;
    let num2=req.body.num2;
    // console.log(req.body);
    // res.end()

    
    if(num1===0 || num2===0){
        return res.status(200).json({ "status": "Failed",
        "message": "Cannot divide by zero" }
       );
    }
    



    if(isNaN(num1) || isNaN(num2)){
        return res.status(200).json({ "status": "Failed",
        "message": "Invalid data types" }
       );
    }
    res.status(200).json({
        "status": "success",
    "message": "The division of given two numbers", 
    "Division":num1/num2});
    
})


app.listen(3000)