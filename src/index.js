const app = require('./app');

// start the server
app.listen(app.get('PORT'), ()=>{
    console.log(`server run on port ${app.get('PORT')}`)
});