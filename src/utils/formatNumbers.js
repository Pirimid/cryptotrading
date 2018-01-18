export function getFormattedNumber(number) {
  const num = number.toString();
  const num_splitted = num.split('.')[1];
  const num_length = num.split('.')[1].length;
  const final_num = 0;
  if( num_length < 8 ) {
  	var appendZero = calculateZero.appendZero;
  	return '0.'+appendZero(num_splitted);
  } else {
  	return number;
  }
}

const calculateZero = {
	appendZero: function(num) {
		let that = this;
		if( num.length < 8 ) {
			num = num + 0;
			return calculateZero.appendZero(num);
		}
		return num;
	}
}