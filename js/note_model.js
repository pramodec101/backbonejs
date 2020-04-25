
"use strict";
APP.NoteModel = Backbone.Model.extend({
  // you can set any defaults you would like here
  defaults: {
    name: "",
    sname: "",
    gender: "",
    city: "",
    // just setting random number for id would set as primary key from server
    id: _.random(0, 10000)
  },

  validate: function (attrs) {
    var errors = {};
    if (!attrs.name) errors.name = "Missing name.";
    if (!attrs.sname) errors.name = "Missing sname, ";
    if (!attrs.gender) errors.gender = "Missing gender, ";
        if (!attrs.city) errors.city = "Missing city, ";
    if (!_.isEmpty(errors)) return errors;
  }
});

APP.NoteCollection = Backbone.Collection.extend({
  // Reference to this collection's model.
  localStorage: new Backbone.LocalStorage("NoteCollection"),
  model: APP.NoteModel,
});
