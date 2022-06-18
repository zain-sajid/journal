// imports 

const express = require('express')
require('dotenv')

// declaring
const app = express()
const port = 5000;
const host = '127.0.0.1';

// middleware
app.use(express.json());

const { Sequelize } = require('sequelize-cockroachdb')
const sequelize = new Sequelize(process.env.DATABASE_URL);

// Model (Schema)
const User = sequelize.define("users", {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
    },
    tweet: {
        type: Sequelize.STRING,
    },
    likes: {
        type: Sequelize.INTEGER,
    }
})

// Get request
app.get('/list', async (req, res) => {
    // this (sync) ??? important for some reason
    await User.sync({
        force: false,
    })
    try{
        const users = await User.findAll()
        res.json({body: users})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

// Post request
app.post('/', async (req, res) => {
    await User.sync({
        force: false,
    })
    const user = new User({
      id: req.body.id,
      name: req.body.name,
      tweet: req.body.tweet,
      likes: req.body.likes
    })
    try {
      const newUser = await user.save()
      res.status(201).json(newUser)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
})


// Check if port is listening
app.listen(port, host, () => {
    console.log(`Server started at host ${host} and ${port}`)
})