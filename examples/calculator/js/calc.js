function create() {
	var displayed = "0";

	var operationPending = false;

	return {
		display: function() { return displayed; },
		press: function(pressed) {
			
			if(isNaN(pressed)) {
				operationPending = true;
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