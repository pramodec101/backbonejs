"use strict";

APP.NoteNewView = Backbone.View.extend({
  // functions to fire on events
  // here we are blocking the submission of the form, and handling it ourself
  events: {
    "click button.save": "save",
    "keyup input": "validate",
    "keyup select": "validate"
  },
  
  template: _.template($('#formTemplate').html()),

  initialize: function (options) {
    this.model.bind('invalid', APP.helpers.showErrors, APP.helpers);
  },

  save: function (event) {
    event.stopPropagation();
    event.preventDefault();

    // update our model with values from the form
    this.model.set({
       name: this.$el.find('input[name=name]').val(),
      sname: this.$el.find('input[name=sname]').val(),
      gender: this.$el.find('select[name=gender]').val(),
      city: this.$el.find('select[name=city]').val()
    });
    
    if (this.model.isValid()) {
      // save it
      this.collection.add(this.model);
      this.model.save();
      // add it to the collection
      // redirect back to the index
      Backbone.history.navigate("notes/index", {trigger: true});
    }
  },

  // populate the html to the dom
  render: function () {
    this.$el.html(
    	this.template(this.model.toJSON())
    );
    return this;
  }
});
