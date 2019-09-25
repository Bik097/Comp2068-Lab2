'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {

    var Xresult = parseInt(req.query.x);
    var Yresult = parseInt(req.query.y);

    //res.render('index', { title: 'Express' });
    if (req.query.method == 'add' && Xresult && Yresult) {


        res.send(Xresult + " + " + Yresult + " = " + ((Xresult + Yresult)).toString());
    }

    if (req.query.method == 'subtract' && Xresult && Xresult) {


        res.send(Xresult + " - " + Yresult + " = " + ((Xresult - Yresult)).toString());
    }

    if (req.query.method == 'multiply' && Xresult && Xresult) {


        res.send(Xresult + " * " + Yresult + " = " + ((Xresult * Yresult)).toString());
    }

    if (req.query.method == 'divide' && Xresult && Xresult) {


        res.send(Xresult + " / " + Yresult + " = " + ((Xresult / Yresult)).toString());
    }



    else {

        res.send("Incorrect Input");
    }
});

module.exports = router;