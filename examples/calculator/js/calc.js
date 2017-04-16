function create() {
	var displayed = "0";

	var operationPending = false;

	return {
		display: function() { return displayed; },
		press: function(pressed) {

			if(pressed == "=") {
				displayed = "11";
				return;
			}

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