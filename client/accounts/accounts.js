import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
// import './register.js'
import './LoginForm.html'
import './register.html'

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

        Meteor.loginWithPassword(username, password, function (error) {
            if (error) {
                console.log(error)
            }
            FlowRouter.go('recipe-book');
        })
    },

    'click .register'(event) {
        event.preventDefault();

        FlowRouter.go('register');
    }
});


Template.Register.events({
    'submit .register'(event) {
        // Prevent default browser form submit
        event.preventDefault();

        console.log('register')

        // Get value from form element
        const target = event.target;
        const username = target.usernameValue.value;
        const password = target.passwordValue.value;
        const role = target.roleValue.value

        console.log(username)
        console.log(password)
        console.log(role)

        let userData = {
            username: username,
            password: password,
            profile: {
                role: role
            }
        }

        Accounts.createUser(userData, function (error) {
            if (error) {
                console.log(error)
            }
            else {
                Meteor.logout()
                console.log('success')
            }
        })
    }
});

