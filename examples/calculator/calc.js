var operations = {
	add: function(lval, rval) { return lval + rval },
	subtract: function(lval, rval) { return lval - rval },
	multiply: function(lval, rval) { return lval * rval },
	divide: function(lval, rval) { return lval / rval }
};

$(function() {

	var display = $("#display");

	var initDisplay = function() {
		show("0");
	}

	var show = function(value) {
		display.text(removeLeadingZeroes(value));
	}

	var removeLeadingZeroes = function(value) {
		return value.replace(/^0(\d+)/,"$1");
	}

	var displayed = function() {
		return display.text();
	}

	var displayedValue = function() {
		return parseFloat(displayed());
	}

	initDisplay();

	var lval;
	var selectedOperation;

	var clearAnd = function(operation, context) {}
	$(".numeral").click(function() {
		var numberClicked = this.id.split("-")[1];

		show(displayed() + numberClicked);
	});

	$(".operator").click(function() {
		lval = displayedValue();
		selectedOperation = operations[this.id];
	});

	$("#equals").click(function() {
		var rval = displayedValue();
		lval = selectedOperation(lval, rval);
		show("" + lval);
	});
});