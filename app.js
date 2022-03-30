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

//guardas informações
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

    const {name, email} = req.body;

    //client.name é igual ao novo nome que eu peguei do body
    client.name = name;
    client.email = email;

    res.json(client);
}); 

//só pode deletar 1 client
app.delete('/clients/:id', (req, res)=>{
    const {id} = req.params;
    const clientFiltered = clientsData.filter(client => client.id != id);

    res.json(clientFiltered);
}); 

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});