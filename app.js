//Budget Controller

var budgetController = (function(){

 // Some Code

})();



//UI Controller
var UIController = (function() {

    // Some code

})();




//Global App Controller
var controller = (function(budgetCtrl, UICtrl){

    var ctrlAddItem = function() {

         //1 Get teh filled input data

        //2. add the item to the budget controller

        // 3 . add the item to the UI

        //4. Calculate the budget

        //5. Display the budget

    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {

        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }

    })

})(budgetController, UIController);




