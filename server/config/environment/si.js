'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://mongo.server/todolist-si'
  },
  seedDB: true,
  port: process.env.PORT || 9002
};
