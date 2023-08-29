import { type Accessor, createMemo, createRenderEffect, createSignal, onMount } from 'solid-js';
import { render } from 'solid-js/web';

import format from 'intl-dateformat';

import { type ScheduledEvent, events, getNextOccurence } from './events.ts';
import * as u from './utils.ts';

import './style.css';

const interval = (ms: number, signal: AbortSignal, callback: (time: number) => void) => {
	const start = document.timeline ? (document.timeline.currentTime! as number) : performance.now();

	const frame = (time: number) => {
		if (signal.aborted) {
			return;
		}

		callback(time);
		schedule(time);
	};

	const schedule = (time: number) => {
		const elapsed = time - start;
		const roundedElapsed = Math.round(elapsed / ms) * ms;
		const target = start + roundedElapsed + ms;
		const delay = target - performance.now();

		setTimeout(() => requestAnimationFrame(frame), delay);
	};

	schedule(start);
};

const calculateTime = (from: Date, time: Date, hours: number) => {
	let start = u.startOfHour(u.setHours(time, hours));

	if (start.getTime() <= time.getTime()) {
		start = u.addDays(start, 1);
	}

	return u.addSeconds(from, u.differenceInSeconds(start, time) / 30);
};

const leftpad = (value: any, pad: string, amount: number) => {
	return ('' + value).padStart(amount, pad);
};

const diffFormat = (start: Date, end: Date) => {
	const { days, hours, minutes, seconds } = u.intervalToDuration(start, end);
	let str = '';

	if (days !== undefined && days > 0) {
		str && (str += `:`);
		str += leftpad(days, '0', 2);
	}

	if (hours !== undefined && hours > 0) {
		str && (str += `:`);
		str += leftpad(hours, '0', 2);
	}

	str && (str += `:`);
	str += `${leftpad(minutes, '0', 2)}:${leftpad(seconds, '0', 2)}`;

	return str;
};

const utcToZonedTime = (date: Date, tz: number) => {
	const offset = -tz * 3600000;

	const d = new Date(date.getTime() - offset);
	const r = new Date(0);

	r.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
	r.setHours(d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds());

	return r;
};

const Occurence = ({ now, event }: { now: Accessor<Date>; event: ScheduledEvent }) => {
	const { name, start, occurence, sequence } = event;

	const next = createMemo((prev: ReturnType<typeof getNextOccurence> | undefined) => {
		const $now = now().getTime();

		if (prev && prev.date.getTime() > $now) {
			return prev;
		}

		return getNextOccurence($now, start, occurence);
	});

	return (
		<tr>
			<th>
				<span>{name}</span>
				{sequence && <span>: {sequence[next().index % sequence.length]}</span>}
			</th>
			<td>in {diffFormat(now(), next().date)}</td>
		</tr>
	);
};

const App = () => {
	const [now, setNow] = createSignal(new Date());

	const [time, setTime] = createSignal(new Date(0));
	const [morning, setMorning] = createSignal(new Date(0));
	const [night, setNight] = createSignal(new Date(0));
	const [icon, setIcon] = createSignal('#icon-sun');

	createRenderEffect(() => {
		const _now = now();

		const zoned = utcToZonedTime(_now, -7);
		const diff = u.differenceInSeconds(zoned, u.addMinutes(u.startOfDay(zoned), -38));

		const ingame = u.addSeconds(u.startOfDay(zoned), (diff % 2880) * 30);
		const hour = u.getHours(ingame);

		setTime(ingame);
		setMorning(calculateTime(_now, ingame, 6));
		setNight(calculateTime(_now, ingame, 20));
		setIcon(hour < 6 || hour >= 20 ? '#icon-moon' : '#icon-sun');
	});

	onMount(() => {
		const controller = new AbortController();
		interval(1000, controller.signal, () => {
			const next = new Date();
			next.setMilliseconds(0);

			setNow(next);
		});

		return () => controller.abort();
	});

	return (
		<div>
			<h3>NGS World Time</h3>

			<table>
				<thead>
					<tr>
						<th>Current time:</th>
						<td>
							<span>{format(time(), 'hh:mm A', { locale: 'en' })}</span>
							<svg>
								<use href={icon()} />
							</svg>
						</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>Day (06:00 AM):</th>
						<td>
							<small>(in {diffFormat(now(), morning())})</small>
							<span>{format(morning(), 'hh:mm A', { locale: 'en' })}</span>
						</td>
					</tr>
					<tr>
						<th>Night (08:00 PM):</th>
						<td>
							<small>(in {diffFormat(now(), night())})</small>
							<span>{format(night(), 'hh:mm A', { locale: 'en' })}</span>
						</td>
					</tr>
				</tbody>
			</table>

			<hr />

			<h4>Reset timers</h4>

			<table>
				<tbody>
					{events.map((event) => (
						<Occurence now={now} event={event} />
					))}
				</tbody>
			</table>

			<hr />

			<a href="https://codeberg.org/intrnl/ngs-world-time" target="_blank">
				source code
			</a>

			<svg>
				<symbol id="icon-sun" viewBox="0 0 20 20" fill="currentColor">
					<path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
				</symbol>
				<symbol id="icon-moon" viewBox="0 0 20 20" fill="currentColor">
					<path
						fill-rule="evenodd"
						d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z"
						clip-rule="evenodd"
					/>
				</symbol>
			</svg>
		</div>
	);
};

render(() => <App />, document.body);
