import assert from 'assert';
import { isIConfig } from '../../../../../src/context/Config/typeguards';
import { isILogger } from '../../../../../src/context/Logger/typeguards';

import FactoryBase from '../../../../../src/context/factories/baseClasses/FactoryBase';

describe('FactoryBase Test', () => {
    describe('Test Child Class', () => {
        class Factory extends FactoryBase {
            constructor() {
                super();
                this.testConfig = this.testConfig.bind(this);
                this.testLogger = this.testLogger.bind(this);
            }

            public testConfig() {
                return isIConfig(this.config);
            }

            public testLogger() {
                return isILogger(this.logger);
            }
        }

        it('Should create a new child Factory', () => {
            const factory = new Factory();
            assert.strictEqual(factory instanceof Factory, true);
        });

        it('Should have access to the app config', () => {
            const factory = new Factory();
            assert.strictEqual(factory.testConfig(), true);
        });

        it('Should have access to the app logger', () => {
            const factory = new Factory();
            assert.strictEqual(factory.testLogger(), true);
        });
    });
});
