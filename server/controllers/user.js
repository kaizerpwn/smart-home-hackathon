import * as dotenv from 'dotenv'
import { db } from "../db/database.js";
import bcrypt from "bcryptjs"

dotenv.config();

export const registerUser = (req, res) => {

    const checkUserExistsQuery = `SELECT COUNT(*) as count FROM korisnici WHERE email = ?`;
    db.query(checkUserExistsQuery, [req.body.email, req.body.username], (err, data) => {
        if (data[0].count === 0) {
            bcrypt.genSalt(10, function (err, salt) {
                if (err) {
                    throw err
                } else {
                    bcrypt.hash(req.body.password, salt, function (err, hash) {
                        if (err) {
                            throw err
                        } else {
                            const inserNewUserQuery = `INSERT INTO korisnici(ime, prezime, email, lozinka, grad) VALUES(?, ?, ?, ?, ?)`;
                            db.query(inserNewUserQuery, [req.body.name, req.body.surname, req.body.email, hash, req.body.city], (err, data) => {
                                return res.send({ message: 200 });
                            });
                        }
                    })
                }
            })
        } else {
            return res.send({ message: 302 });
        }
    })
}

export const loginUser = (req, res) => {

    const checkUserExistsQuery = 'SELECT * FROM korisnici WHERE email = ?';
    db.query(checkUserExistsQuery, [req.body.email], (err, data) => {
        if (data.length === 0) {
            return res.status(404).json('User with that email not found');
        } else {
            bcrypt.compare(req.body.password, data[0].lozinka, function (err, isMatch) {
                if (err) {
                    throw err
                } else if (!isMatch) {
                    return res.status(404).json('Password is not valid.');
                } else {
                    const { password, ...other } = data[0];
                    return res.status(200).json(other);
                }
            })
        }
    })
} 