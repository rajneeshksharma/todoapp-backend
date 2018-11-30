const Todo = require('../models/todo.model');

exports.getTodo = async (req, res) => {
        try {
            if (Object.keys(req.body).length === 0) {
                return res.status(400).json({
                    code: 400,
                    message: "Body is empty",
                    data: []
                });
            } else {
                const findTodo = await Todo.find({
                    user: req.body.user,
                    isdelete: false
                });
                if (findTodo.length == 0) {
                    res.status(404).json({
                        code: 404,
                        message: "no Todo Found",
                        data: []
                    });
                } else {
                    res.json({
                        code: 200,
                        message: "success",
                        data: [findTodo]
                    });
                }
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },
    exports.addTodo = async (req, res) => {
            try {
                if (Object.keys(req.body).length === 0) {
                    return res.status(400).json({
                        code: 400,
                        message: "Body is empty",
                        data: []
                    });
                } else {
                    console.log(req.body);
                    const doneSaving = await Todo.create({
                        todo: req.body.todo,
                        user: req.body.user
                    });
                    if (!doneSaving) {
                        return res.status(404).json({
                            code: 404,
                            message: "Something went wrong",
                            data: []
                        });
                    } else if (doneSaving) {
                        return res.json({
                            code: 200,
                            message: "data added",
                            data: [doneSaving]
                        });
                    } else {
                        console.log('error');
                    }
                }
            } catch (err) {
                res.status(500).json(err);
            }
        },
        exports.rmTodo = async (req, res) => {
                try {
                    const delTodo = await Todo.findOneAndUpdate({
                        _id: req.params.id
                    }, {
                        $set: {
                            isdelete: true
                        }
                    }, {
                        new: true
                    });
                    if (delTodo) {
                        return res.json({
                            code: 200,
                            message: "data Delete",
                            data: [delTodo]
                        });
                    } else {
                        return res.status(404).json({
                            code: 404,
                            message: "Could not find Todo",
                            data: []
                        });

                    }
                } catch (err) {
                    res.status(500).json(err);
                }
            },
            exports.iscomplete = async (req, res) => {
                try {
                    const updateTodo = await Todo.findOneAndUpdate({
                        _id: req.params.id
                    }, {
                        $set: {
                            complete: true
                        }
                    }, {
                        new: true
                    });
                    // console.log(updateTodo);
                    if (updateTodo) {
                        return res.json({
                            code: 200,
                            message: "data Delete",
                            data: [updateTodo]
                        });
                    } else {
                        return res.status(404).json({
                            code: 404,
                            message: "Could not find Todo",
                            data: []
                        });

                    }
                } catch (err) {
                    res.status(500).json(err);
                }

            };