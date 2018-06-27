import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './Recipes.html';
import './NewRecipe.html';
import './Recipe.html';
import './RecipeSingle.js'


Template.Recipes.onCreated(function(){
    let self = this;
    self.autorun(function(){
        self.subscribe('recipes')
    })
})

Template.Recipes.helpers({
    recipes: ()=>{
        return Recipes.find({})
    }
})