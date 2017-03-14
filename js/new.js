
    if (side1 === side2 && side2 === side3) {
        $("#output").text("Equilateral");
    } else if (side1 ===  side2 && side1 !== side3) {
      $("#output").text("Isoscolese");
    } else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
      $("#output").text("Scalene");
    }
  });
});

var first = function(side1, side2) {
  return side1 + side2;
};
var second = function(number1, number3) {
  return side1 + side3;
};
var threed = function(number2, number3) {
  return side2 + side3;
};

if (side1 >= side2 && side1 >= side3) {
  if (threed <= side3){
  $("#output").text("not a tri");
  }
}
