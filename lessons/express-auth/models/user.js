'use strict';
var bcrypt = require('bcrypt');
module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define('user', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    msg: "invalid email address"
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: [4, 32],
                    msg: "Password must be between 4 and 32 characters in length."
                },
                isAlphanumeric: {
                    msg: "No special characters allowed in password!"
                }
            }
        }
    }, {
        hooks: {
            beforeCreate: function(user, options, cb) {
                if (user && user.password) {
                    var hash = bcrypt.hashSync(user.password, 10); //this is your salt
                    user.password = hash; // changes the password value to the hash BEFORE inserting into the db
                }
                cb(null, user);
            }
        },
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        },
        instanceMethods: {
            isValidPassword: (function(passwordTyped) {
                return bcrypt.compareSync(passwordTyped, this.password);
            })
        },
        toJson: function() {
            var data = this.get();
            delete data.password;
            return data;
        },
        getFullName: function() {
            return this.firstname + "" + this.lastName;
        }

    });
    return user;
};
