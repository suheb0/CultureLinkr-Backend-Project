const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000

app.get('/',(req,res)=>{
  res.send("Hello Everyone!")
})

app.use(bodyParser.json())

app.post('/api/total-value', (req, res) => {
  const productList = req.body.products;

  if (!product.price || !product.quantity) {
      return res.send({ error: `Invalid data for product: ${product.name}` });
  }

  let total = productList.reduce((accumulator, product) => {
      if (product.price && product.quantity) {
          return accumulator + (product.price * product.quantity);
      }
      return accumulator; 
  }, 0);

  res.json({ totalValue: total });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})


//    WITH HARDCODED VALUE + USING GET NOT POST FOR CHECKING PURPOSE
// const express = require('express')
// const app = express()
// const PORT = 3000
// app.use(express.json())

// const products = [
//     { "name": "Product A", "price": 100, "quantity": 2 },
//     { "name": "Product B", "price": 150, "quantity": 3 },
//     { "name": "Product C", "price": 200, "quantity": 1 }
// ];

// app.get('/api/total-value', (req, res) => {
//     const totalValue = products.reduce((acc, product) => acc + (product.price * product.quantity), 0);
//     res.json({ totalValue })
// })

// app.listen(PORT, () => {
//     console.log(`App running on port ${PORT}`)
// })
