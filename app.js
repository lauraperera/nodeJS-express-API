const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const data = require("./data.json"); 

app.use(express.json());

app.get('/clients', (req, res)=>{
    res.json(data);
});
//recebe 1 só client pelo id
app.get('/clients/:id', (req, res)=>{
    const {id} = req.params
    res.json(data);
}); 
app.post('/clients', (req, res)=>{

});
//só pode atualizar 1 client
app.put('/clients/:id', (req, res)=>{

}); 
//só pode deletar 1 client
app.delete('/clients/:id', (req, res)=>{

}); 

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});