import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './Header.html'

Template.UserInfo.events({
    'click .user-logout'(event) {
        // Prevent default browser form submit
        event.preventDefault();
        console.log('log out')
    },
});