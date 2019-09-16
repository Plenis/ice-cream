describe('Ice-Cream Calculator tests', function () {

    it('should return the price for ice-cream flavor selected', function () {
        let instance = IceCreamCalculator();
        instance.flavorSelected("chocolate")
        instance.flavorSelected("strawberry")
        assert.equal(instance.flavorSelected("chocolate"), ["Chocolate flavor: R9.50"])
    })

    it('should return the price for ice-cream container selected', function () {
        let instance = IceCreamCalculator();
        instance.containerSelected("paperCup")
        instance.containerSelected("plainCone")
        instance.containerSelected("sugarCone")
        assert.equal(instance.flavorSelected("paperCup"), ["Paper Cup container: R10.00"])
    })

    it('should return the price for ice-cream topping selected', function () {
        let instance = IceCreamCalculator();
        instance.toppingSelected("crumbedPeanuts")
        instance.toppingSelected("strawberryGliter")
        instance.toppingSelected("caramelDip")
        instance.toppingSelected("chocolateDip")
        instance.toppingSelected("oreos")
        instance.toppingSelected("smarties")
        assert.equal(instance.toppingSelected("crumbedPeanuts"), ["Crumbed Peanuts topping: R5.00"])
    })

    it('should return the price for flavor, container and toppings', function(){
        let instance = IceCreamCalculator();
        const iceCream = [  { flavor: "vanilla", container: "paperCup", topping: "crumbedPeanuts" }
    ];
    assert.deepEqual(instance.iceCreamTotal(iceCream), "23.00")
    })
});
