export const dateToAge = (date) => {
	const diff = new Date(date).getTime() - Date.now();
	return Math.abs(new Date(diff).getUTCFullYear() - 1970);
}
