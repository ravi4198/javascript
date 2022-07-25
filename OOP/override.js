// Demonstration of override
    class Cake {
        constructor(lyr) {
            this.layers = lyr;
        }

        getLayers() {
            return this.layers;
        }
    }

    class WeddingCake extends Cake {
        constructor() {
            super(2);
        }

        getLayers() {
            return super.getLayers() * 5;
        }
    }

    var result = new WeddingCake();
    console.log(result.getLayers());

    // output : 10

    /**
     * That's correct! The WeddingCake constructor stores the amount of layers as 2. However, WeddingCake overrides the  getLayers()  function to multiple the result by 5.
     *  Therefore,  10  is outcome.
     */