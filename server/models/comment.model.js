const { Sequelize } = require('sequelize-cockroachdb');
const sequelize = new Sequelize(process.env.DATABASE_URL);

// Model (Schema)
const Comment = sequelize.define('comments', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  user: {
    type: Sequelize.STRING,
  },
  text: {
    type: Sequelize.STRING,
  },
  post: {
    type: Sequelize.UUID,
  },
});

module.exports = Comment;
