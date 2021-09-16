"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("images", [
      {
        title: "Dog",
        url: "https://www.google.com/search?q=dog&sxsrf=AOaemvIYuIACw7CwiRn0bi0Kar_TS2W-Xw:1631797770116&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiT5bqzyIPzAhXR6aQKHXsVA5cQ_AUoAXoECAEQAw&biw=920&bih=968&dpr=1#imgrc=zt4uNhWr-q4O7M",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Cat",
        url: "Cj0KCQjw1ouKBhC5ARIsAHXNMI_7G0ZipRhaACTf1AYqZf4vxbrv0cGO1eKP0jxX7aK8P1mxBn5nVGgaAu3TEALw_wcB",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
