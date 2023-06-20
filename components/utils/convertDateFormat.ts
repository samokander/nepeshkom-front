export default function convertDateFormat(dateString: string) {
	const parts = dateString.split(".");
	if (parts.length !== 3) {
		return " " // fast fix    problem with throw error
	}

	const year = parts[2];
	const month = parts[1];
	const day = parts[0];

	return year + "-" + month + "-" + day;
}
