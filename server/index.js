const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`);
})
//middleverse
const bodyParser = require('body-parser');
app.use(bodyParser.json({limit:'10mb'})); //co the tu dieu chinh 
app.use(bodyParser.urlencoded({extended:true,limit:'10mb'})); //co the tu dieu chinh 
//apis
app.get('/hello',(req, res) => {
    res.json({message:'hello from server!'});
});
app.use('/api/customer', require('./api/customer.js'));
app.use('/api/admin', require('./api/admin.js'));
// deployment
const path = require('path');
// '/admin' serve the files at client-admin/build/* as static files
app.use('/admin', express.static(path.resolve(__dirname, '../client-admin/build')));
app.get('admin/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client-admin/build', 'index.html'))
});
// '/' serve the files at client-customer/build/* as static files
app.use('/', express.static(path.resolve(__dirname, '../client-customer/build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client-customer/build', 'index.html'));
});