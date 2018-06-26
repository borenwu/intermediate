import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

export const Recipes = new Mongo.Collection('recipes');

Recipes.allow({
    insert: function (userId, doc) {
        return !!userId;
    }
})

Ingredient = new SimpleSchema({
    name: {
        type: String
    },
    amount: {
        type: String
    }
})



RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: 'Name'
    },

    desc: {
        type: String,
        label: 'Description'
    },

    igredients: {
        type: Array,
        optional: true,
      },
    'igredients.$': Ingredient,

    inMenu:{
        type: Boolean,
        defaultValue:false,
        optional:true,
        autoform:{
            type:"hidden"
        }
    },

    author: {
        type: String,
        label: 'Author',
        autoValue: function () {
            return this.userId
        },
        autoform: {
            type: "hidden"
        }
    },

    createAt: {
        type: Date,
        label: 'Create At',
        autoValue: function () {
            return new Date()
        },
        autoform: {
            type: "hidden"
        }
    }
})

Recipes.attachSchema(RecipeSchema);

