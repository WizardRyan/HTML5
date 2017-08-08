var sub = document.getElementById('tri-submit');

sub.onclick = function () {
    "use strict";
    var A = document.getElementById('A').value;
    var B = document.getElementById('B').value;
    var C = document.getElementById('C').value;

    
    if (C === undefined) {
        calcHyp(A, B);
    }
};

function calcHyp(A, B) {
    var a = A;
    var b = B;

}

function calcOther(a, c) {
    
}