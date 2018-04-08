'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://username:password@mongodb.donal-test.svc.cluster.local/todolist',
  },
  seedDB: false,
  port: process.env.PORT || 9000
};
