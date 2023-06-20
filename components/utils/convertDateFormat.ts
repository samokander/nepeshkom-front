export default function convertDateFormat(dateString: string) {
	const parts = dateString.split(".");
	if (parts.length !== 3) {
		throw new Error("Invalid date format. Expected format: yyyy-MM-dd");
	}

	const year = parts[2];
	const month = parts[1];
	const day = parts[0];

	return year + "-" + month + "-" + day;
}
