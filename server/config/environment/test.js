'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://username:password@<YOUR_NAME>-test.apps.<CLUSTER_DOMAIN>/todolist',
  },
  seedDB: false,
  port: process.env.PORT || 9000
};
