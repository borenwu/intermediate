import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'


// FlowRouter.triggers.enter([function (context, redirect) {
//     if (!Meteor.userId()) {
//         FlowRouter.go('login');
//     }
// }]);



FlowRouter.route('/login', {
    name: 'login',
    action() {
        BlazeLayout.render('LoginForm');
    }
});

FlowRouter.route('/register', {
    name: 'register',
    action() {
        BlazeLayout.render('Register');
    }
});

FlowRouter.route('/', {
    name: 'home',
    action() {
        if (Meteor.userId()) {
            FlowRouter.go('recipe-book');
        }
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/recipe-book', {
    name: 'recipe-book',
    action() {
        BlazeLayout.render('MainLayout', { main: 'Recipes' });
    }
});

FlowRouter.route('/recipe/:id', {
    name: 'recipe',
    action() {
        BlazeLayout.render('MainLayout', { main: 'RecipeSingle' });
    }
});

FlowRouter.route('/menu', {
    name: 'menu',
    action() {
        BlazeLayout.render('MainLayout', { main: 'Menu' });
    }
});

FlowRouter.route('/shopping-list', {
    name: 'shopping-list',
    action() {
        BlazeLayout.render('MainLayout', { main: 'ShoppingList' });
    }
});







