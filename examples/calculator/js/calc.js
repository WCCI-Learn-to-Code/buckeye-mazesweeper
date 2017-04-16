function create() {
	var displayed = "0";

	return {
		display: function() { return displayed; },
		press: function(pressed) {
			displayed = (displayed == "0"? "": displayed);
			displayed += pressed;
		}
	};
}

module.exports = create;