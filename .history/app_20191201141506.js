var budgetController = (function(){


})();


var UIController = (function(){

})();


//Global controller
var controller = (function(budgetCtrl, UICtrl){

    document.querySelector('.add__btn').addEventListener('click', function(){
        console.log('Clicked');
        
    });
   
})(budgetController, UIController);