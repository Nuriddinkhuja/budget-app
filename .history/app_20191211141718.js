var budgetController = (function(){

    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, des, val){
            var newItem, ID;
            
            //Create new ID
            ID = data.allItems[type][data.allItems[type].lenght - 1].id + 1;

            //Create new item based on 'inc' or 'exp' type
            if(type === 'exp'){
                newItem = new Expense(ID, des, val);
            }else if(type === 'inc'){
                newItem = new Income(ID, des, val)
            }

            // push it into data structure
            data.allItems[type].push(newItem);
            return newItem;
        }
    }

})();


var UIController = (function(){

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            }
        },

        getDomStrings: function(){
            return DOMstrings;
        }
    }

})();


//Global controller
var controller = (function(budgetCtrl, UICtrl){

    var setupEventListeners = function(){
        var DOM = UICtrl.getDomStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event){
    
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        });

    }


    var ctrlAddItem = function(){

        // 1. Get the field input data
        var input = UICtrl.getInput();

        // 2. Add the item to the budget Controller
        budgetCtrl.addItem(input.type, input.description, input.value);

    };

    return {
        init: function(){
            setupEventListeners();
            
        }
    }
   
})(budgetController, UIController);

controller.init();