 // app/routes.js
    var express = require('express')
        app = express();

    var Partner = require('./models/data');

    module.exports = function(app) {

        // create our router
        var router = express.Router();

        // middleware to use for all requests
        router.use(function(req, res, next) {
            // do logging
            console.log(res.req.method + " Request Made To: " + res.req.url);
            next();
        });

        //ROUTES THAT END INT /partners
        // ----------------------------------------------------
        router.route('/partners')

            //CREATE A NEW PARTNER
            .post(function(req, res) {
                
                var partnerData = new Partner();        // create a new instance of the Bear model
                partnerData.name = req.body.name;  // set the bears name (comes from the request)

                partnerData.save(function(err) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'Partner created!' });
                });

                
            })

            //GET ALL OF THE PARTNERS
            .get(function(req, res) {
                Partner.find(function(err, partnerData) {
                    if (err)
                        res.send(err);

                    res.json(partnerData);
                });
            });

        //ROUTES THAT END IN /parnter/:partner_ID
        // ----------------------------------------------------
        router.route('/partners/:partner_id')

            //GET THE PARTNER WITH THIS ID
            .get(function(req, res) {
                Partner.findById(req.params.partner_id, function(err, partnerData) {
                    if (err)
                        res.send(err);
                    res.json(partnerData);
                });
            })

            //UPDATE THE PARTNER WITH THIS ID
            .put(function(req, res) {
                Partner.findById(req.params.partner_id, function(err, partnerData) {

                    if (err)
                        res.send(err);

                    partnerData.name = req.body.name;
                    partnerData.save(function(err) {
                        if (err)
                            res.send(err);

                        res.json({ message: 'Partner updated!' });
                    });

                });
            })

            //DELETE THE PARTNER WITH THIS ID
            .delete(function(req, res) {
                Partner.remove({
                    _id: req.params.partner_id
                }, function(err, partnerData) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'Partner Successfully deleted' });
                });
            });


        //REGISTER OUR ROUTES
        app.use('/api', router);

        app.get('/search/:tagId', function(req, res) {
          res.send("tagId is set to " + req.param("tagId"));
        });

        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });
    };