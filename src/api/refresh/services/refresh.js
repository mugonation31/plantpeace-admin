'use strict';

/**
 * refresh service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::refresh.refresh');
