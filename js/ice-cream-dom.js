const flavors = document.querySelectorAll(".iceCreamFlavor:checked");
const containers = document.querySelectorAll(".iceCreamContainer:checked");
const toppings = document.querySelectorAll(".iceCreamTopping:checked");
const price = document.querySelector(".iceCreamPriceDisplay");
const calculateBtn = document.querySelector(".iceCreamCalculateBtn")

let instance = IceCreamCalculator();

var templateSource = document.querySelector(".iceCreamTemplate").innerHTML;
var iceCreamTemplate = Handlebars.compile(templateSource);

function totalCalculateBtn(){
  alert("yaaah")
    var iceCreamOptions = price.nodeValue.toFixed(2);

    if(iceCreamOptions !== true){
      return "mesasge"
    }
}

function priceDisplay() {
  var iceCreamData = { flavor: flavor, container: container, topping: topping };
  var iceCreamDataHTML = regTemplate(iceCreamData);
  console.log(iceCreamDataHTML);
  price.innerHTML = iceCreamDataHTML;
}

calculateBtn.addEventListener("click", totalCalculateBtn);

// const iceCream = [
//   { flavor: "chocolate", container: "plainCone", topping: "caramelDip" },
//   { flavor: "vanilla", container: "paperCup", topping: "crumbedPeanuts" }
// ];

// const iceCreamPrice = iceCream.find(function(option){
//     return option.iceCream == "eng";
//  });
