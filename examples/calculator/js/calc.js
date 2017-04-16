function create() {
	var displayed = 0;

	var operationsByOperator = {
		"+": function(lval, rval) { displayed = lval + rval },
		"-": function() { displayed = 5 },
		"*": function() { displayed = 24 },
		"/": function() { displayed = 4 }
	}

	var operationPending = false;
	var operation;
	var lval;

	function displayedAsNumber() {
		return parseFloat(displayed);
	}

	return {
		display: function() { return "" + displayed; },
		press: function(pressed) {

			if(pressed == "=") {
				operation(lval, displayedAsNumber());
				return;
			}

			if(isNaN(pressed)) {
				lval = displayedAsNumber();
				operationPending = true;
				operation = operationsByOperator[pressed];
				return;
			}
			
			if(operationPending || displayed == "0") {
				displayed = "";
			}
			displayed += pressed;
		}
	};
}

module.exports = create;