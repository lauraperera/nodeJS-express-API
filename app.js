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

    //caso nao encontre o id retorna o status 204
    if(!client) return res.status(204).json();

    res.json(client);
}); 

//envia informações
app.post('/clients', (req, res)=>{
    const {name, email} = req.body;
    //aqui vai a lógica pra salvar

    //resposta
    res.json({name, email});
});

//só pode atualizar 1 client
app.put('/clients/:id', (req, res)=>{
    const {id} = req.params;
    const client = clientsData.find(client => client.id == id);

    //caso não tenha achado o cliente pra atualizar
    if(!client) return res.status(204).json();

    const {name} = req.body;

    //client.name é igual ao novo nome que eu peguei do body
    client.name = name;

    res.json(client);
}); 
//só pode deletar 1 client
app.delete('/clients/:id', (req, res)=>{

}); 

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});