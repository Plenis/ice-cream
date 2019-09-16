function IceCreamCalculator() {
  let flavor;
  let container;
  let topping;
  let price = 0;

  function flavorSelected() {
    var iceCreamFlavor = flavor;

    // for (let index = 0; index < iceCreamFlavor.length; index++) {
    //   var flavorOption = iceCreamFlavor[index];
    // }

    if (iceCreamFlavor === "chocolate") {
      return "Chocolate flavor: " + "R" + "9.50";
    }

    if (iceCreamFlavor === "strawberry") {
      return "Stawberry flavor: " + "R" + "8.50";
    }

    if (iceCreamFlavor === "vanilla") {
      return "Vanilla flavor: " + "R" + "8.00";
    }
  }

  function containerSelected() {
    var iceCreamContainer = container;

    // for (let index = 0; index < iceCreamContainer.length; index++) {
    //   var containerOption = iceCreamContainer[index];
    // }

    if (iceCreamContainer === "plainCone") {
      return "Plain Cone container: " + "R" + "5.00";
    }

    if (iceCreamContainer === "sugarCone") {
      return "Sugar Cone container: " + "R" + "8.50";
    }

    if (iceCreamContainer === "paperCup") {
      return "Paper Cup container: " + "R" + "10.00";
    }
  }

  function toppingSelected() {
    var iceCreamTopping = topping;

    // for (let index = 0; index < iceCreamTopping.length; index++) {
    //   var toppingOption = iceCreamTopping[index];
    // }

    if (iceCreamTopping === "crumbedPeanuts") {
      return "Crumbed Peanuts topping: " + "R" + "5.00";
    }

    if (iceCreamTopping === "strawberryGliter") {
      return "Strawberry Gliter topping: " + "R" + "8.50";
    }

    if (iceCreamTopping === "caramelDip") {
      return "Caramel Dip topping: " + "R" + "5.00";
    }

    if (iceCreamTopping === "chocolateDip") {
      return "Chocolate Dip topping: " + "R" + "5.00";
    }

    if (iceCreamTopping === "oreos") {
      return "Oreos topping: " + "R" + "11.00";
    }

    if (iceCreamTopping === "smarties") {
      return "Smarties topping: " + "R" + "9.50";
    }
  }

  function iceCreamTotal() {
      var totalPrice = price;
      price.iceCreamFlavor + price.iceCreamContainer + price.iceCreamTopping;
      return "R" + totalPrice.toFixed(2);
  }

  return {
    flavorSelected,
    containerSelected,
    toppingSelected,
    iceCreamTotal
  };
}
