const express = require("express");
const app = express();
app.use(express.json());

let customers=[{
    "customerID":"12345",
    "customerName":"Hyma",
   " Age":"27",
    "Location":"nellore",
    "PhoneNumber":9857462468
},
{
    "customerID":"12346",
    "customerName":"Prathap",
   " Age":"25",
    "Location":"kota",
    "PhoneNumber":"7893536187",

},
{
    "customerID":"12347",
    "customerName":"Haritha",
   " Age":"22",
     "Location":"hyderabad",
    "PhoneNumber":"7660985681",

},5
];
app.post('/customer',(req,res)=>{
    const customer=req.body;
    customers.push(customer);
    res.json({
        status:'added',
         result:customer
        })
});

app.get('/customer',(req,res)=>{
    res.json({
        status:"success",
        result:customers
    })
});

app.get('/customer/:customerID',(req,res)=>{
    const customerID=req.params.customerID;
    for(let customer of customers){
        if(customer.customerID===customerID){
            res.json(customer);
            return;
        }
    }
res.status(400).send('Customer is not found');
});
app.put('/customer/:custID',(req,res)=>{
    const customerID=req.params.customerID;
    const newCustomer=req.body;
    for(let i=0;i<customers.length;i++)
    {
        let customer=customers[i]
        if(customer.customerID===customerID){
            customers[i]=newCustomer;
        }
    }
    res.json(newCustomer);
});
app.delete('/customer/:customerID',(req,res)=>{
    const customerID=req.params.customerID;
    customers=customers.filter(i=>{
        if(i.customerID!==customerID){
            return true;
        }
        return false;
    });
    res.send('Customer is deleted');
});
const port=3000;
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

module.exports = app;
