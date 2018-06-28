import { Accounts } from 'meteor/accounts-base'
import './layouts/HomeLayout.html'
import './layouts/MainLayout.html'
import './partials/Header.js'
import './partials/SideNav.html'
import './recipes/Recipes.js'
import './accounts/accounts.js'
import './menu/Menu.js'
import './shopping-list/ShoppingList.js'
import '../lib/routes'

import { Recipes } from '../collections/Recipes'
window.Recipes = Recipes


Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});