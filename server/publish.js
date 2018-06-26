import { Meteor } from 'meteor/meteor';
import { Recipes } from '../collections/Recipes'

Meteor.publish('recipes', function () {
    return Recipes.find({ author: this.userId })
})