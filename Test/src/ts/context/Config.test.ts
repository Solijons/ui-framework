import assert from 'assert';
import Config from '../../../../src/context/Config';

import { appEnv } from '../../../../src/context/enums';
import { IAppConfig } from '../../../../src/context/interfaces';

const baseAppConfig: IAppConfig = { env: 'dev' };

describe('Context: Config Test', () => {
    describe('Create instance with baseAppConfig', () => {
        const config = new Config(baseAppConfig);

        it('Should create a new Config instance', () => {
            assert.strictEqual(config instanceof Config, true);
        });

        it('Should be able to get env', () => {
            assert.strictEqual(config.env, appEnv.dev);
        });
    });

    describe('Create instance with OAuth2 configuration', () => {
        const appConfig = Object.assign({}, baseAppConfig);

        appConfig.oauth2 = {
            clientId: 'test client id',
            clientSecret: 'test client secret',
            host: 'http://test.com'
        };

        const config = new Config(appConfig);

        it('Should create a new Config instance', () => {
            assert.strictEqual(config instanceof Config, true);
        });

        it('Should be able to get clientId', () => {
            assert.strictEqual(config.clientId, appConfig.oauth2.clientId);
        });

        it('Should be able to get clientSecret', () => {
            assert.strictEqual(config.clientSecret, appConfig.oauth2.clientSecret);
        });
    });

    describe('Create instance with service configuration', () => {
        const appConfig = Object.assign({}, baseAppConfig);

        appConfig.services = {
            testService: {
                url: 'http://localhost'
            }
        };

        const config = new Config(appConfig);

        it('Should create a new Config instance', () => {
            assert.strictEqual(config instanceof Config, true);
        });
    });

    describe('Create instance with OAuth2 and Service configuration', () => {
        const appConfig = Object.assign({}, baseAppConfig);

        appConfig.oauth2 = {
            clientId: 'test client id',
            clientSecret: 'test client secret',
            host: 'http://test.com'
        };

        appConfig.services = {
            testService: {
                url: 'http://localhost'
            }
        };

        const config = new Config(appConfig);

        it('Should create a new Config instance', () => {
            assert.strictEqual(config instanceof Config, true);
        });
    });

    describe('Get configured OAuth details.', () => {
        const appConfig = Object.assign({}, baseAppConfig);

        appConfig.oauth2 = {
            clientId: 'test client id',
            clientSecret: 'test client secret',
            host: 'http://test.com'
        };

        appConfig.services = {
            testService: {
                url: 'http://localhost'
            }
        };

        const config = new Config(appConfig);

        it('Should create a new Config instance', () => {
            assert.strictEqual(config instanceof Config, true);
        });
    });

    describe('Get Service configuration', () => {
        const appConfig = Object.assign({}, baseAppConfig);

        appConfig.services = {
            testService: {
                url: 'http://localhost'
            }
        };

        const config = new Config(appConfig);

        it('Should be able to get the Service config', () => {
            assert.strictEqual(
                JSON.stringify(config.getServiceConfig('testService')),
                JSON.stringify(appConfig.services.testService)
            );
        });
    });

    describe('Get Service URL', () => {
        const appConfig = Object.assign({}, baseAppConfig);

        appConfig.services = {
            testService: {
                url: 'http://localhost'
            }
        };

        const config = new Config(appConfig);

        it("Should be able to get a configured Service's URL", () => {
            assert.strictEqual(
                config.getServiceUrl('testService'),
                appConfig.services.testService.url,
            );
        });
    });

    describe('List configured Services', () => {
        const appConfig = Object.assign({}, baseAppConfig);

        appConfig.services = {
            testService: {
                url: 'http://localhost'
            }
        };

        appConfig.services = {
            testService2: {
                url: 'http://localhost'
            }
        };

        const config = new Config(appConfig);

        it('Should have correct number of Services', () => {
            assert.strictEqual(
                config.listOfServices().length,
                Object.keys(appConfig.services).length,
            );
        });

        it('Should have the correct list', () => {
            assert.strictEqual(
                config.listOfServices().every((srvc) => {
                    return Object.keys(appConfig.services).includes(srvc);
                }),
                true,
            );
        });
    });
});
