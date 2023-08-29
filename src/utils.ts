export interface Duration {
	years?: number;
	months?: number;
	days?: number;
	hours?: number;
	minutes?: number;
	seconds?: number;
}

const SECONDS = 1000;
const MINUTES = SECONDS * 60;
const HOURS = MINUTES * 60;
const DAYS = HOURS * 24;
const WEEKS = DAYS * 7;
const YEARS = DAYS * 365.25;

const clone = (date: Date) => {
	return new Date(date.getTime());
};

const abs = Math.abs;
const sign = Math.sign;
const trunc = Math.trunc;

// date
export const intervalToDuration = (start: Date, end: Date): Required<Duration> => {
	let date = start;
	let count: number;

	return {
		years: (count = differenceInYears(start, end)),
		months: (count = differenceInMonths(end, (date = addYears(date, count)))),
		days: (count = differenceInDays(end, (date = addMonths(date, count)))),
		hours: (count = differenceInHours(end, (date = addDays(date, count)))),
		minutes: (count = differenceInMinutes(end, (date = addHours(date, count)))),
		seconds: (count = differenceInSeconds(end, (date = addMinutes(date, count)))),
	};
};

// years
export const addYears = (date: Date, years: number) => {
	const inst = clone(date);
	inst.setFullYear(inst.getFullYear() + years);

	return inst;
};

export const differenceInCalendarYears = (a: Date, b: Date) => {
	return a.getFullYear() - b.getFullYear();
};

export const differenceInYears = (a: Date, b: Date) => {
	const left = clone(a);
	const right = clone(b);

	const s = compareAsc(a, b);
	const d = abs(differenceInCalendarYears(a, b));

	left.setFullYear(1584);
	right.setFullYear(1584);

	const isLastYearNotFull = compareAsc(left, right) === -s;
	const result = s * (d - +isLastYearNotFull);

	return result === 0 ? 0 : result;
};

// months
export const addMonths = (date: Date, months: number) => {
	const inst = clone(date);
	inst.setMonth(inst.getMonth() + months);

	return inst;
};

export const endOfMonth = (date: Date) => {
	const inst = clone(date);
	const month = inst.getMonth();

	inst.setFullYear(inst.getFullYear(), month + 1, 0);
	inst.setHours(23, 59, 59, 999);

	return inst;
};

export const isLastDayOfMonth = (date: Date) => {
	return endOfDay(date).getTime() === endOfMonth(date).getTime();
};

export const differenceInCalendarMonths = (a: Date, b: Date) => {
	const yearDiff = a.getFullYear() - b.getFullYear();
	const monthDiff = a.getMonth() - b.getMonth();

	return yearDiff * 12 + monthDiff;
};

export const differenceInMonths = (a: Date, b: Date) => {
	const left = clone(a);

	const s = compareAsc(a, b);
	const d = abs(differenceInCalendarMonths(a, b));

	let result: number;

	if (d < 1) {
		result = 0;
	} else {
		if (left.getMonth() === 1 && left.getDate() > 27) {
			left.setDate(30);
		}

		left.setMonth(left.getMonth() - s * d);

		let isLastMonthNotFull = compareAsc(left, b) === -sign;

		// Check for cases of one full calendar month
		if (isLastDayOfMonth(left) && d === 1 && compareAsc(left, b) === 1) {
			isLastMonthNotFull = false;
		}

		result = s * (d - +isLastMonthNotFull);
	}

	return result === 0 ? 0 : result;
};

// days
export const addDays = (date: Date, days: number) => {
	const inst = clone(date);
	inst.setDate(inst.getDate() + days);

	return inst;
};

export const startOfDay = (date: Date) => {
	const inst = clone(date);
	inst.setHours(0, 0, 0, 0);

	return inst;
};

export const endOfDay = (date: Date) => {
	const inst = clone(date);
	inst.setHours(23, 59, 59, 999);

	return inst;
};

export const differenceInCalendarDays = (a: Date, b: Date) => {
	const left = a.getTime() - getTimezoneOffsetInMilliseconds(a);
	const right = b.getTime() - getTimezoneOffsetInMilliseconds(b);

	return Math.round((left - right) / DAYS);
};

export const differenceInDays = (a: Date, b: Date) => {
	const left = clone(a);

	const s = compareLocalAsc(a, b);
	const d = abs(differenceInCalendarDays(a, b));

	left.setDate(left.getDate() - s * d);

	const isLastDayNotFull = compareLocalAsc(left, b) === -s;
	const result = s * (d - +isLastDayNotFull);

	return result === 0 ? 0 : result;
};

// hours
export const getHours = (date: Date) => {
	return date.getHours();
};

export const addHours = (date: Date, hours: number) => {
	return setHours(date, date.getHours() + hours);
};

export const setHours = (date: Date, hours: number) => {
	const inst = clone(date);
	inst.setHours(hours);

	return inst;
};

export const startOfHour = (date: Date) => {
	const inst = clone(date);
	inst.setHours(inst.getHours(), 0, 0, 0);

	return inst;
};

export const differenceInHours = (a: Date, b: Date) => {
	return differenceInX(a, b, HOURS);
};

// minute
export const addMinutes = (date: Date, minutes: number) => {
	const inst = clone(date);
	inst.setMinutes(inst.getMinutes() + minutes);

	return inst;
};

export const differenceInMinutes = (a: Date, b: Date) => {
	return differenceInX(a, b, MINUTES);
};

// second
export const startOfSeconds = (date: Date) => {
	const inst = clone(date);
	inst.setMilliseconds(0);

	return inst;
};

export const addSeconds = (date: Date, seconds: number) => {
	const inst = clone(date);
	inst.setSeconds(inst.getSeconds() + seconds);

	return inst;
};

export const differenceInSeconds = (a: Date, b: Date) => {
	return differenceInX(a, b, SECONDS);
};

// utils
const compareAsc = (a: Date, b: Date) => {
	return sign(a.getTime() - b.getTime());
};

const compareLocalAsc = (a: Date, b: Date) => {
	const diff =
		a.getFullYear() - b.getFullYear() ||
		a.getMonth() - b.getMonth() ||
		a.getDate() - b.getDate() ||
		a.getHours() - b.getHours() ||
		a.getMinutes() - b.getMinutes() ||
		a.getSeconds() - b.getSeconds() ||
		a.getMilliseconds() - b.getMilliseconds();

	return sign(diff);
};

const differenceInX = (a: Date, b: Date, num: number) => {
	return trunc((a.getTime() - b.getTime()) / num);
};

const getTimezoneOffsetInMilliseconds = (date: Date) => {
	const utc = new Date(
		Date.UTC(
			date.getFullYear(),
			date.getMonth(),
			date.getDate(),
			date.getHours(),
			date.getMinutes(),
			date.getSeconds(),
			date.getMilliseconds(),
		),
	);

	utc.setUTCFullYear(date.getFullYear());
	return date.getTime() - utc.getTime();
};
