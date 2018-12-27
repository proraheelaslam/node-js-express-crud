var connection = require('../config/config');


exports.getAll = (req, res) => {
    var sql = `SELECT * from users`;
    connection.query(sql, (err, users) => {
        res.render(`../views/users/index`, {users});
    });
};

exports.getUserView = (req, res, view) => {
    let id = req.params['id'];
    let sql = `SELECT * FROM users WHERE id= ${id}`;
    connection.query(sql, (err, user) => {
        res.render(`../views/users/${view}`, {user: user[0]});
    });
};


exports.getView = (req, res, view) => {
    res.render(`../views/users/${view}`);
};

exports.updateUser = (req, res) => {
    let id = req.params['id'];
    let body = req.body;
    let sql = `UPDATE users SET first_name = '${body.firstName}', last_name = '${body.lastName}'  WHERE id = ${id} `;
    connection.query(sql, (err, message) => {
        res.redirect('/');
    });
};

exports.deleteUser = (req, res) => {
    let id = req.params['id'];
    let sql = `DELETE FROM users WHERE id= ${id}`;
    connection.query(sql, (err, data) => {
        if (err) throw err;
    });
    return res.redirect('/');
};

exports.createUser = (req, res) => {
    let body = req.body;
    let newUser = {
        firstName: body.firstName,
        lastName: body.lastName
    };
    var sql = `INSERT INTO users(first_name,last_name) VALUES('${newUser.firstName}','${newUser.lastName}')`;
    connection.query(sql, (err, result) => {
    });
    res.redirect('/');
};


