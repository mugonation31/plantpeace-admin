'use strict';

/**
 * refresh controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::refresh.refresh');
