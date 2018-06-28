import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './Header.html'

Template.UserInfo.events({
    'click .user-logout'(event) {
        // Prevent default browser form submit
        event.preventDefault();
        console.log('log out')
        Meteor.logout(function () {
            FlowRouter.go('home');
        })
    },
});

Template.UserInfo.onCreated(function () {

})

Template.UserInfo.helpers({
    
})