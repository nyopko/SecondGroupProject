var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", {});
  });

  // Load home page
  app.get("/profile", function(req, res) {
    res.render("profile", {});
  });

  // Load index page
  app.get("/equipment", function(req, res) {
    res.render("equipment", {});
  });

  // Load index page
  app.get("/edit-equipment", function(req, res) {
    res.render("edit-equipment", {});
  });

  // Load index page
  app.get("/edit-crew", function(req, res) {
    res.render("edit-crew", {});
  });
  // Load index page
  app.get("/edit-certs", function(req, res) {
    res.render("edit-certs", {});
  });

  // Load index page
  app.get("/crew", function(req, res) {
    db.Personnel.findAll({
      include: [{ model: db.Certification }]
    }).then(function(dbPersonnel) {
      res.render("crew", {
        Personnel: dbPersonnel
      });
    });
  });

  // Load index page
  app.get("/home", function(req, res) {
    res.render("home", {});
  });
  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
