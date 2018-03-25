'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://mongo.server/todolist-ci'
  },
  mocks: {
    api: true
  },
  seedDB: true,
  port: process.env.PORT || 9001
};
