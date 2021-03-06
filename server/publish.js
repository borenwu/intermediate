import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check'
import { Recipes } from '../collections/Recipes'
import {WechatUsers} from '../collections/WechatUsers'

Meteor.publish('test',function(){
    return Recipes.find({})
})

Meteor.publish('recipes', function () {
    return Recipes.find({ author: this.userId })
})

Meteor.publish('singleRecipe', function (id) {
    check(id,String)
    return Recipes.find({ _id: id })
})

Meteor.publish('wechatusers',function(){
    return WechatUsers.find({})
})

