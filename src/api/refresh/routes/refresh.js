'use strict';

/**
 * refresh router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::refresh.refresh');
