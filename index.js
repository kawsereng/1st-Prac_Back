const express = require('express');
const app = express()
const port = 6000

app.use(express.json())

// ! Req hossey Front end thekey jeta ashey {post}
// *res many backend thekey front A pathabo

app.post('/registration',(req, res) => {
  let {name, email, password, gender} = req.body

  let errors = {name: "", email: "", password: "", gender: ""}

  if(!name){
    errors.name = "Name is required"
  }

  if(!email){
    errors.email = "Email is required"
  }

  if(!password){
    errors.password = "Password is required"
  }
  if(!gender){
    errors.gender = "Gender is required"
  }

  if(errors.name || errors.email || errors.password || errors.gender){
    return res.send(errors)
  }

   res.send('Registration successful')
  })



app.listen(port, () => {
  console.log('Example app listening on port 6000')
})