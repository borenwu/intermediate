import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './ShoppingList.html'

Template.ShoppingList.onCreated(function(){
    let self = this;
    self.autorun(function(){
        self.subscribe('recipes')
    })
})

Template.ShoppingList.helpers({
    shoppingList: ()=>{
        return Recipes.find({inMenu:true})
    }
})