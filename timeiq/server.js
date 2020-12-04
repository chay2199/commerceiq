const express = require('express')
const app = express()
const port = 3000
// use date to get hours
let date = new Date()
let curHr = date.getHours()
let printString;
// store wish according to hours based on GMT 
if (curHr < 12) {
  printString = '<h1>Good Morning</h1>'
} else if (curHr < 18) {
  printString = '<h1>Good Afternoon</h1>'
} else {
  printString = '<h1>Good Evening</h1>'
}
// send the wish as response to get request
app.get('/', (req, res) => {
  res.send(printString)
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})

