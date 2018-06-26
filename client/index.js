import './layouts/HomeLayout.html'
import './layouts/MainLayout.html'
import './partials/Header.html'
import './partials/SideNav.html'
import './recipes/Recipes.js'
import '../lib/routes'

import {Recipes} from '../collections/Recipes'
window.Recipes = Recipes


// FlowRouter.route('/',{
//     name:'home',
//     action(){
//         BlazeLayout.render('HomeLayout');
//     }
// })