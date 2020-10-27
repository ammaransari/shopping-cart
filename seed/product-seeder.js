var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
  .then(()=>console.log("connecting"))
  .catch(err=>console.error("no connection", err));


var products =[ new Product({
    imagePath : 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'gathic game',
    description: 'Awesome Game',
    price: 20
}),
new Product({
    imagePath : 'http://www.pngall.com/wp-content/uploads/2016/05/Laptop-Free-PNG-Image.png',
    title: 'Laptop ',
    description: 'Good Laptop',
    price: 100
}),
new Product({
    imagePath : 'http://www.pngall.com/wp-content/uploads/2/Rolls-Royce-Download-Free-PNG.png',
    title: 'Rolls Royce',
    description: 'Awesome',
    price: 53000
}),
new Product({
    imagePath : 'http://www.pngall.com/wp-content/uploads/5/Ripped-Men-Jeans.png',
    title: 'Jeans',
    description: 'Loafar Jeans',
    price: 17
}),
new Product({
    imagePath : 'http://www.pngall.com/wp-content/uploads/5/Ripped-Men-Jeans-PNG.png',
    title: 'Jeans',
    description: 'Loafar Jeans',
    price: 15
}),
new Product({
    imagePath : 'http://www.pngall.com/wp-content/uploads/5/Shirt-PNG-Image.png',
    title: 'Shirts',
    description: 'Fit Shirts',
    price: 20
})

];

var done=0;
for(var i=0; i<products.length; i++)
{
    products[i].save(function(err, result)
    {
        done++;
        if(done=== products.length)
        {
            exit();
        }
    });
}
function exit()
{
    mongoose.disconnect();
}