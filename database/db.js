import Sequelize from "sequelize";

const db = new Sequelize("products_app", "root", "angustias080664", {
    host: "localhost",
    dialect: "mysql"
});

export default db;