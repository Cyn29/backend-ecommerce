import Sequelize from "sequelize";

const db = new Sequelize("products_app", "root", "passwordcyn2993", {
    host: "localhost",
    dialect: "mysql"
});

export default db;