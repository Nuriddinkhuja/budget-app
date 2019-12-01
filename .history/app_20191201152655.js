var budgetController = (function(){


})();


var UIController = (function(){

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
            console.log('clicked enter');
            ctrlAddItem();
        }
    });
   
})(budgetController, UIController);