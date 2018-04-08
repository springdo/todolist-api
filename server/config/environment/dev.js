'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://username:password@<YOUR_NAME>-dev.apps.<CLUSTER_DOMAIN>/todolist',
  },
  seedDB: true,
  port: process.env.PORT || 9000
};
