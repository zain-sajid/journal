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
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
});
Comment.belongsTo(Post);

module.exports = { Post, Comment };
