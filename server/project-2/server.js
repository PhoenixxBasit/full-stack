const express = require('express');
const bodyParser = require("body-parser");

const { router: usersRoutes } = require('./routes/users.js')

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get("/", (req, res) => {
	res.send("Hello World");
})
			
     
app.listen(PORT, () => console.log(`Server Running`))