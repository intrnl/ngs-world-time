export interface ScheduledEvent {
	name: string;
	start: number;
	occurence: number;
	sequence?: string[];
}

const utc = Date.UTC;

export const getNextOccurence = (now: number, start: number, occurence: number) => {
	const diff = now - start;
	const index = Math.ceil(diff / occurence);

	const date = new Date(start + index * occurence);

	return { index, date };
};

const enum Occurence {
	DAILY = 86400000,
	WEEKLY = 604800000,
}

export const events: ScheduledEvent[] = [
	// Dailies
	{
		name: 'Daily tasks',
		start: utc(2023, 7, 29, 12),
		occurence: Occurence.DAILY,
		sequence: ['Stia', 'Retem', 'Aelio', 'Kvaris'],
	},
	{
		name: 'GP Tree',
		start: utc(2022, 8, 3, 12),
		occurence: Occurence.DAILY,
		sequence: [
			'GPID4 (315pts)',
			'GPID1 (625pts)',
			'GPID8 (315pts)',
			'GPID5 (315pts)',
			'GPID2 (625pts)',
			'GPID7 (315pts)',
			'GPID6 (315pts)',
			'GPID3 (625pts)',
			'GPID6 (315pts)',
			'GPID7 (315pts)',
			'GPID0 & 4 (315pts & 625pts)',
			'GPID5 (315pts)',
			'GPID3 & 8 (315pts & 315pts)',
			'GPID5 (625pts)',
			'GPID4 (315pts)',
			'GPID9 (315pts)',
			'GPID6 (625pts)',
			'GPID3 (315pts)',
			'GPID0 (315pts)',
			'GPID7 (625pts)',
			'GPID2 (315pts)',
			'GPID1 (315pts)',
			'GPID8 (625pts)',
			'GPID1 (315pts)',
			'GPID2 (315pts)',
			'GPID9 (625pts)',
			'GPID0 (625pts)',
			'GPID9 (315pts)',
		],
	},
	{
		name: 'Daily free SG scratch',
		start: utc(2023, 7, 29, 8),
		occurence: Occurence.DAILY,
	},
	{
		name: 'Lookbook SG',
		start: utc(2023, 7, 29, 15),
		occurence: Occurence.DAILY,
	},
	{
		name: 'Leciel Exploration buffs',
		start: utc(2023, 7, 29, 19),
		occurence: Occurence.DAILY,
	},
	{
		name: 'Treasure Shop',
		start: utc(2023, 7, 29, 3),
		occurence: Occurence.DAILY,
	},

	// Weeklies
	{
		name: 'Weekly tasks',
		start: utc(2023, 7, 23, 3),
		occurence: Occurence.WEEKLY,
	},
	{
		name: 'ARKS Records',
		start: utc(2023, 7, 23, 2),
		occurence: Occurence.WEEKLY,
	},
];
