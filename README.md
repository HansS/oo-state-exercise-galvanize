# oo-state-exercise
Fun visual exercise for understanding state in javascript


-  Clone
-  npm install -g http-server
-  run `http-server`

Working solution:

```
function Bike() {
    this.pedaling = true;
    this.stopPedaling = function() {
        this.pedaling = false;
    }
}
var bike = new Bike();

bike.frameColor = 'red';
bike.seatColor = 'blue';
bike.handleBarColor = 'white';
// bike.stopPedaling();

```


Bike CSS from here, http://codepen.io/maximerabot/pen/krifz
