const AS_NEW = "As new";
const EXCELLENT = "Excellent";
const GOOD = "Good";
const FAIR = "Fair";
const ACCEPTABLE = "Acceptable";

function isValidCondition(inputString) {
	switch(inputString) {
		case AS_NEW:
			return true;
		case EXCELLENT:
			return true;
		case GOOD:
			return true;
		case FAIR:
			return true;
		case ACCEPTABLE:
			return true;
		default:
			return false;
	}
}

module.exports = isValidCondition;