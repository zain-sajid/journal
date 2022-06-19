const { Sequelize } = require('sequelize-cockroachdb');
const sequelize = new Sequelize(process.env.DATABASE_URL);

// Model (Schema)
const Post = sequelize.define('posts', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  user: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  likes: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Post;
