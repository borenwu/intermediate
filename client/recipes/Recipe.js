import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './Recipe.html'

Template.Recipe.onCreated(function(){
    this.editMode = new ReactiveVar(false)
})

Template.Recipe.events({
    'click .toggle-menu'() {
        Meteor.call('toggleMenuItem', this._id, this.inMenu)
    },
    'click .fa-trash'() {
        Meteor.call('deleteRecipe', this._id);
    },
    'click .fa-pencil'(event,template) {
       template.editMode.set(!template.editMode.get())
    }
});

Template.Recipe.helpers({
    updateRecipeId: function () {
        return this._id
    },
    editMode:function(){
        return Template.instance().editMode.get();
    }
})