'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, _Sequelize) {
        const salt = bcrypt.genSaltSync(10);

        await queryInterface.bulkInsert('users', [{
            email: 'demo@bancomail.com',
            username: 'demo-user',
            password: bcrypt.hashSync('password', salt)
        }], {});
    },

    async down(queryInterface, _Sequelize) {
        await queryInterface.bulkDelete('users', null, {});
    }
};