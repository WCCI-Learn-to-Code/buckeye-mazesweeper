function create() {
	var displayed = 0;

	var operationPending = false;
	var operation;
	var lval;

	return {
		display: function() { return "" + displayed; },
		press: function(pressed) {

			if(pressed == "=") {
				performOperation();
				return;
			}

			if(isNaN(pressed)) {
				if(operationPending) {
					performOperation();
				}

				lval = displayed;
				operationPending = true;
				operation = operationFor(pressed);
				return;
			}
			
			if(operationPending || displayed == "0") {
				displayed = "";
			}
			displayed += pressed;
		}
	};

	function operationFor(operator) {
		return (lval, rval) => ( displayed = eval("" + lval + operator + rval));
	}

	function performOperation() {
		operation(lval, displayed);
		operationPending = false;
	}
}

module.exports = create;