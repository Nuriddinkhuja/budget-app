var budgetController = (function(){


})();


var UIController = (function(){

})();


//Global controller
var controller = (function(budgetCtrl, UICtrl){

    document.querySelector('.add__btn').addEventListener('click', function(){
        // 1. Get the field input data
        
    });

    document.addEventListener('click', function(event){

        if(event.keyCode === 13 || event.which){
            console.log('clicked enter');
            
        }
    });
   
})(budgetController, UIController);