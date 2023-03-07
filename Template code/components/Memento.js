import React from 'react'

//Memento implementation for updating food item fields
//Example 1: Food restock (after inflation), want to return fields to original values
//Example 2: Sale on item finishes, want to restore original price
//Example 3: User removes item from cart, want to return items to store (update availability)

var foodItem = function (name, price, availability, type){
    this.name = name;
    this.price = price;
    this.availability = availability;
    this.type = type;
}

foodItem.prototype = {

    saveState: function(){
        var memento = JSON.stringify(this);
        return memento;
    },

    loadState: function(){

        var savedState = JSON.parse(memento);
        this.name = savedState.name;
        this.price = savedState.price;
        this.availability = savedState.availability;
        this.type = savedState.type;

    },

    loadPrice: function(){
        var savedState = JSON.parse(memento);
        this.price = savedState.price;
    },

    loadAvailability: function(){
            var savedState = JSON.parse(memento);
            this.availability = savedState.availability;
    }

};

var careTaker = function(){

    this.mementos = {};

    this.add = function(itemName, memento){
        this.mementos[itemName] = memento;
    },

    this.get = function (itemName){
        return this.mementos[itemName];
    }

}

export default Memento