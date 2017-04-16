function create() {
	var displayed = 0;

	var operationPending = false;
	var operation;

	var operationsByOperator = {
		"+": function() { displayed = 11 },
		"-": function() { displayed = 5 }
	}

	return {
		display: function() { return "" + displayed; },
		press: function(pressed) {

			if(pressed == "=") {
				operation();
				return;
			}

			if(isNaN(pressed)) {
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