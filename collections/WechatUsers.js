import { Mongo } from 'meteor/mongo';

export const WechatUsers = new Mongo.Collection('wechatusers');

Meteor.methods({
    'wechatusers.insert'(userInfo){
        WechatUsers.insert(userInfo)
    }
})