var budgetController = (function(){

    var Expense = function(id, description, value){
        this.id = id,
        this.description = description,
        this.value = value
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
        var input = UIController.getInput();
        // console.log(input);      
    }

    return {
        init: function(){
            setupEventListeners();
            
        }
    }
   
})(budgetController, UIController);

controller.init();