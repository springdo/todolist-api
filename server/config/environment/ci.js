'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  //  TODO change this to the new service in the OpenShift namespace
  mongo: {
    uri: 'mongodb://localhost/todolist-ci'
  },
  mocks: {
    // api: true
    api: false
  },
  seedDB: true
};
