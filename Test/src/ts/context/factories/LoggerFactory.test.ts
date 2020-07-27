import assert from 'assert';
import LoggerFactory from '../../../../../src/context/factories/LoggerFactory';
import { isILogger } from '../../../../../src/context/Logger/typeguards';

describe('LoggerFactory Tests', () => {
    describe('LoggerFactory.getInstance()', () => {
        const logger = LoggerFactory.getInstance();

        it('Should get an ILogger instance', () => {
            assert.strictEqual(isILogger(logger), true);
        });
    });
});
