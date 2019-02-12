const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const passport = require('passport');

const mobiles = require('./routes/api/mobiles');
// const repair = require('./routes/api/repair');
// const posts = require('./routes/api/posts');

const app = express();

// BodyParser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//connect to mongoDB
mongoose
	.connect(db)
	.then(() => console.log('mongoDB Connected'))
	.catch(err => console.log(err));

// passport middleware
// app.use(passport.initialize());

// passport config
// require('./config/passport')(passport);

// use Routes
app.use('/api/mobiles', mobiles);
// app.use('/api/repair', repair);
// app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));