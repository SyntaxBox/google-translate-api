import assert from 'assert';
import { speak } from '../index.cjs';

// const EN1 = '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';
// const ES1 = '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ADEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq';
// const ES2 = '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ADEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExHUAAANIAcAAADEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq';
// const JA1 = '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';
const SOUND_START = '//NExAA';

describe('speak()', function () {
	this.timeout(5000);

	xit('should speak with defaults', async () => {
		const res = await speak('1');

		assert.equal(res.slice(0, 7), SOUND_START);
	});

	xit('should speak via custom tld', async () => {
		const res = await speak('1', {tld: 'hk'});

		assert.equal(res.slice(0, 7), SOUND_START);
	});

	it('should pass request options', async () => {
		const abortController = new AbortController();
		const requestOptions = {
			signal: abortController.signal
		};
		abortController.abort();
		await assert.rejects(speak('test', {requestOptions}), 'AbortError');
	});

	xit('should speak array input', async () => {
		const res = await speak(['1', '2'], {to: 'es'});

		assert.equal(res.length, 2);
		assert.equal(res[0].slice(0, 7), SOUND_START);
		assert.equal(res[1].slice(0, 7), SOUND_START);
	});

	xit('should speak object input', async () => {
		const res = await speak({one: '1', two: '2'}, {to: 'es'});

		assert.equal(res.one.slice(0, 7), SOUND_START);
		assert.equal(res.two.slice(0, 7), SOUND_START);
	});

	xit('should option query speak different languages', async () => {
		const res = await speak([{text: '1', to: 'ja'}, '2'], {to: 'es'});
	
		assert.equal(res[0].slice(0, 7), SOUND_START);
		assert.equal(res[1].slice(0, 7), SOUND_START);
	});

	xit('should translate large batch', async () => {
		const sources = [];
		const targets = [];
		for (let i = 0; i < 1000; i++) {
			const mod = i % 4;
			if (mod === 0) {
				sources.push('1');
				targets.push(SOUND_START);
			} else if (mod === 1) {
				sources.push('2');
				targets.push(SOUND_START);
			} else if (mod === 2) {
				sources.push({text: '1', to: 'en'});
				targets.push(SOUND_START);
			} else {
				sources.push({text: '1', to: 'ja'});
				targets.push(SOUND_START);
			}
		}

		const res = await speak(sources, {to: 'es'});
		const spoken = res.map(x => x.slice(0, 7));

		assert.deepEqual(spoken, targets);
	});

	it('should error on other incorrect isos forced', async () => {
		await assert.rejects(speak('This is a test', {to: 'abc', forceTo: true}));
	});

	it('should reject on incorrect iso not forced', async () => {
		await assert.rejects(speak('This is a test', {to: 'abc'}));
	});

	it('should error on too long request', async () => {
		await assert.rejects(speak('A'.repeat(201), {to: 'en'}));
	});

	it('should reject on partial fail true', async () => {
		const sources = [];
		const targets = [];
		for (let i = 0; i < 1000; i++) {
			const mod = i % 3;
			if (mod === 0) {
				sources.push('uno');
				targets.push('one');
			} else if (mod === 1) {
				sources.push('dos');
				targets.push('two');
			} else {
				sources.push('tres');
				targets.push('three');
			}
		}

		speak(sources, {to: 'es', rejectOnPartialFail: true}).then(res => {
			for (let spoken of res) {
				assert(spoken !== null);
			}
		}).catch(()=>{});

	});
});