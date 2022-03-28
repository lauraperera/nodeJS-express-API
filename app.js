const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
//arquivo clientsData.json simula um database
const clientsData = require("./clientsData.json"); 

app.use(express.json());

app.get('/clients', (req, res)=>{
    res.json(clientsData);
});

//recebe 1 só client pelo id
app.get('/clients/:id', (req, res)=>{
    const {id} = req.params;
    const client = clientsData.find(client => client.id == id);
    res.json(client);
}); 

app.post('/clients', (req, res)=>{
    res.json(clientsData);
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