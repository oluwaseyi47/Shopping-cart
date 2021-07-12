var removeCartItemButtons = document.getElementsByClassName(" btn-danger");
for (var i=0; i < removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(){
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}

function updateCartTotal(){
   var cartItemContainer =document.getElementsByTagName("tbody")[0]
   var cartRows = cartItemContainer.getElementsByTagName("tr")

  var total = 0
   for (var i = 0; i<cartRows.length; i++){
       var cartRow= cartRows[i]
       var priceElement = cartRow.getElementsByClassName("price")[0]
       var quantityElement = cartRow.getElementsByClassName("amount")[0]
       var quantity = quantityElement.innerText
       var price = priceElement.value
       total= total + (price * quantity)
       
   } 
   console.log(total)

}