export default function convertDateFormat(dateString: string) {
	var parts = dateString.split("-");
	if (parts.length !== 3) {
		throw new Error("Invalid date format. Expected format: yyyy-MM-dd");
	}

	var year = parts[0];
	var month = parts[1];
	var day = parts[2];

	return day + "." + month + "." + year;
}
