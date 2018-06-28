import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './NewRecipe.html'

Template.NewRecipe.events({
    'click .fa-close'(){
        Session.set('newRecipe',false);
    },

})