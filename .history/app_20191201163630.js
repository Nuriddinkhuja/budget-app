var budgetController = (function(){


})();


var UIController = (function(){

    var DOMstrings = {
        inputType: '.add__type',
        description: '.add__description',
        value: '.add__value'
    }

    return {
        getInput: function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.description).value,
                value: document.querySelector(DOMstrings.value).value,
            }
            
        }
    }

})();


//Global controller
var controller = (function(budgetCtrl, UICtrl){

    var ctrlAddItem = function(){
        // 1. Get the field input data
        var input = UIController.getInput();
        console.log(input);      
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event){

        if(event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }
    });
   
})(budgetController, UIController);