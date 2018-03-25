'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://mongo.server/todolist-dev'
  },
  mocks: {
    api: true
  },
  seedDB: true
};
