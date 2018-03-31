'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://mongo.server/todolist-test'
  },
  seedDB: false,
  port: process.env.PORT || 9000
};
