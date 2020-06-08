const pool = require('../database');


pool.query(`
    CREATE TABLE IF NOT EXISTS cars (
        id int(9) NOT NULL, 
        name varchar(255) DEFAULT NULL, 
        brand varchar(255) DEFAULT NULL,
        PRIMARY KEY(id)
    )  ENGINE = InnoDB DEFAULT CHARSET = latin1;
`);


const getAllCars = () => {
    return pool.query('SELECT * FROM cars');
}

const addCar = (car) => {
    return pool.query('SELECT * FROM cars');
}

const deleteCar = () => {
    return pool.query('SELECT * FROM cars');
}


module.exports = {
    getAllCars,
    addCar,
    deleteCar
}