import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
 
import './Recipes.html';
import './NewRecipe.html';

Meteor.subscribe('recipes');

console.log(Meteor.settings.public.ga.account)