import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './LoginForm.html'

Template.LoginForm.events({
    'submit .login'(event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        const target = event.target;
        const username = target.username.value;
        const password = target.password.value;

        console.log(username)
        console.log(password)

        Meteor.loginWithPassword(username, password, function(error){
            if(error){
                console.log(error)
            }
            FlowRouter.go('recipe-book');
        })
    },
});