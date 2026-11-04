const express = require('express');
const app = express()

const mongoose = require('mongoose');
const khata = require('./Model/todo_model')

app.use(express.json())



mongoose.connect('mongodb+srv://iamkawsermia_db_user:y5BubgWN64vevx28@cluster0.jiyx2fq.mongodb.net/todo')
  .then(() => console.log('DataBase Connected ✅'));

app.post('/todo',(req, res) => {
 let{task,prioty}= req.body;

 console.log(task,prioty);

//  !Database Add Data
 let todo = new khata({
  taskAdd:task,
  priority:prioty
  
 })
    todo.save()
 
});


// ! data base Thekey Data ana 
app.get('/todo/creat', async (req,res) => {

let data = await khata.find({ })

 res.send(data);
})

// ! data base Thekey Delet kora
app.delete('/delete/:id',async (req,res)=>{
  let {id}=req.params
  await khata.findByIdAndDelete(id)
  res.send('delet')

})

app.post('/update/:id',async (req,res)=>{
  let {id}=req.params
  let update= await khata.findByIdAndUpdate({_id: id},req.body)
  res.send('update')

})


app.listen(6000, () => {
  console.log('server is running on port 6000')
})