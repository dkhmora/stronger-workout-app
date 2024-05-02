"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Daryl Kiel Mora",
          email: "daryl@dkhmora.com",
          password:
            "$2a$10$uyg5veSXErMB7fiZ8EKM3.Aiiux2A9zOV7EmRGxq.6xzog1R9wnqG",
          birth_date: "1996-10-09",
          body_weight: 73,
          height: 173,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
