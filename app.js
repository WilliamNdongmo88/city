const express = require('express');
const bodyParse = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParse.json());

let tasks = [
    {id:1, description: 'Faire les courses'},
    {id:2, description: 'Apprendre Node.js'}
];

app.listen(port, () =>{
    console.log(`serveur écoutant sur le port ${port}`);
});

app.get('/tasks', (req, res) => {
    const taskReferences = tasks.map(task => `/task/${task.id}`);
    res.json(taskReferences);
});

app.get('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(task => task.id == taskId);
    
    if (task) {
        res.json(task);
    }else{
        res.status(404).json({error: 'Tache non trouvée'});
        }
});

app.post('/tasks', (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        description: req.body.description
    };
    tasks.push(newTask);
    res.status(201).json({message: 'Tâche ajouté avec succès', task: newTask});
});

app.put('/task/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        task.description = req.body.description;
        res.json({message: 'Tâche mise à jour avec succès', task});
    }else{
        res.status(404).json({error: 'Tâche non trouvée'});
    }
});

app.delete('/task/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter(task => task.id !== taskId);
    res.json({message: 'Tâche supprimée avec succès'});
})