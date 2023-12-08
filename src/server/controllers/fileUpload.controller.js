"use strict";
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const FileUpload = require('../models/fileUpload.model');

exports.uploadFiles = (req, res) => {
    upload.fields([{ name: 'fileInput1', maxCount: 1 }, { name: 'fileInput2', maxCount: 1 }, { name: 'fileInput3', maxCount: 1 }])(req, res, (err) => {
        upload.array('files')(req, res, (err) => {
            if (err) {
                console.log("error: ", err);
                res.send(err);
            } else {
                const newFiles = req.files.map(file => new FileUpload(file));
                FileUpload.create(newFiles, (err, files) => {
                    if (err) {
                        console.log("error: ", err);
                        res.send(err);
                    } else {
                        res.json({ error: false, message: "Files uploaded successfully!", data: files });
                    }
                });
            }
        });
    });
};