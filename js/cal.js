(function() {

    "use strict";

                // create boolean for operator
            var operator_clicked = false;

                //  create getElementById for inputs
            var left_operand = document.getElementById("left_operand");
            var middle_operator= document.getElementById("middle_operator");
            var right_operand = document.getElementById("right_operand");
            var output = document.getElementById("output"); 
        
            
                // listener for left input (numbers)
            function numListener() {
                var input = this.getAttribute('data-value');

                if (operator_clicked == false) {
                    left_operand.value += input;
                }
                else {
                    right_operand.value += input;
                }
            }
            
            var numBtn = document.getElementsByClassName("num")

            for (var i = 0; i < numBtn.length; i++) {
                numBtn[i].addEventListener("click", numListener);
            };


                // listener for middle input (operators)
            function opListener() {
                var input = this.getAttribute('data-value');
                middle_operator.value = input;
                operator_clicked = true;
            }
            
            var opBtn = document.getElementsByClassName("op")

            for (var i = 0; i < opBtn.length; i++) {
                opBtn[i].addEventListener("click", opListener);
            }

                // switch for op value
            var total = document.getElementById("output")
            var result = function (event) {
                switch (middle_operator.value) {
                    case "+":
                        output.value = (parseInt(left_operand.value)) + (parseInt(right_operand.value));
                            break;
                    case "-":
                        output.value = (parseInt(left_operand.value)) - (parseInt(right_operand.value));
                            break;
                    case "*":
                        output.value = (parseInt(left_operand.value)) * (parseInt(right_operand.value));
                            break;
                    case "/":
                        output.value = (parseInt(left_operand.value)) / (parseInt(right_operand.value));
                            break;
                    }

                    operator_clicked = false;
            }

                 // equals w/ hidden div function
            var equals = document.getElementById("btnEval");
            
            equals.addEventListener("click", function() {
                 result();
                 var gif = document.getElementById("matrixGif")
                 gif.style.display = 'block';
                 var delay = 1100; 
                 var timeoutId = setTimeout(function () {
                 gif.style.display = 'none';
                 }, delay);
             });

                // clear btn function
            function clear() {
                left_operand.value = "";
                middle_operator.value = "";
                right_operand.value = "";
                output.value = "";

                operator_clicked = false;
            }

            var btnClr = document.getElementById("btnClr");
            btnClr.addEventListener("click", clear);

                // bcksp btn function
            function bckSp() {
                if(operator_clicked == false) {
                    left_operand.value = left_operand.value.substr(0, left_operand.value.length - 1);
                }
                else {
                    right_operand.value = right_operand.value.substr(0, right_operand.value.length - 1);
                }
            }

            var btnBck = document.getElementById("btnBck");
            btnBck.addEventListener("click", bckSp)
               
})();
    