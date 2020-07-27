import appRoot from 'app-root-path';
import assert from 'assert';
import fs from 'fs';

import { isIConfig } from '../../../../../src/context/Config/typeguards';
import ConfigFactory from '../../../../../src/context/factories/ConfigFactory';

describe('ConfigFactory Tests', () => {
    describe('ConfigFactory Requirements', () => {
        it('Should have a default.json config file', () => {
            assert.strictEqual(
                fs.existsSync(appRoot + '/src/config/default.json'),
                true,
            );
        });

        it('Should have a dev.config.json config file', () => {
            assert.strictEqual(
                fs.existsSync(appRoot + '/src/config/dev.config.json'),
                true,
            );
        });
    });

    describe('ConfigFactory.getInstance().', () => {
        const config = ConfigFactory.getInstance();

        if ( // Requirement met?
            fs.existsSync(appRoot + '/src/config/default.json')
            && fs.existsSync(appRoot + '/src/config/dev.config.json')
        ) {
            it('Should get an IConfig instance', () => {
                assert.strictEqual(isIConfig(config), true);
            });
        }
    });
});
