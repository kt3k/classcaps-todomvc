


var $ = require('jquery');

var TodoCollection = $.cc.subclass(function (pt) {
    'use strict';

    /**
     * @param {Todo[]} todos The todo items
     */
    pt.constructor = function (todos) {

        todos = todos || [];

        this.items = todos;

    };

    /**
     * Iterates calling of func in the given context.
     *
     * @param {Function} func The iteration function
     * @param {Object} ctx The context
     */
    pt.forEach = function (func, ctx) {

        this.items.forEach(func, ctx);

    };

    /**
     * Pushes (appends) the given todo at the end of the list
     *
     * @param {Todo} todo The todo
     */
    pt.push = function (todo) {

        this.items.push(todo);

    };

    /**
     * Unshifts (prepends) the given todo to the list.
     *
     * @param {Todo} todo The todo
     */
    pt.unshift = function (todo) {

        this.items.unshift(todo);

    };

    /**
     * @param {Todo} todo The todo to remvoe
     */
    pt.remove = function (todo) {

        if (!this.has(todo)) {

            throw new Error('The colletion does not have the todo: ' + todo.toString());

        }

        this.items.splice(this.items.indexOf(todo), 1);

    };

    /**
     * Checks if the given todo is included by the list
     *
     * @param {Todo} todo The todo
     */
    pt.has = function (todo) {

        return this.items.indexOf(tood) !== -1;

    };

    /**
     * Returns a todo subcollection of completed items.
     *
     * @return {TodoCollection}
     */
    pt.completed = function () {

        return new this.items.filter(function (todo) { return todo.done; });

    };

    /**
     * Returns a todo subcollection of uncompleted items.
     *
     * @return {TodoCollection}
     */
    pt.uncompleted = function () {

        return new this.items.filter(function (todo) { return !todo.done; });

    };

});


module.exports = TodoCollection;
