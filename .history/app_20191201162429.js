var budgetController = (function(){


})();


var UIController = (function(){

    return {
        getInput: function(){
            var type = document.querySelector('.add__type').value;
            var description = document.querySelector('.add__description').value;
            var value = document.querySelector('.add__value').value;
        }
    }

})();


//Global controller
var controller = (function(budgetCtrl, UICtrl){

    var ctrlAddItem = function(){
        // 1. Get the field input data
        console.log('it works');
        
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event){

        if(event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }
    });
   
})(budgetController, UIController);