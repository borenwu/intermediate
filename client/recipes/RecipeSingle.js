import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './RecipeSingle.html';

Template.RecipeSingle.onCreated(function () {
    let self = this;
    self.autorun(function () {
        let id = FlowRouter.getParam('id')
        self.subscribe('singleRecipe', id)
    })
})

Template.RecipeSingle.helpers({
    recipe: () => {
        let id = FlowRouter.getParam('id')
        return Recipes.findOne({ _id: id })
    }
})