module.exports = {
    roots: ['<rootDir>/src', '<rootDir>/tests'],
    testRegex: '/tests/((?!\\.integration|e2e).)*\\.test.js$',
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    coveragePathIgnorePatterns: ['(tests/.*.mock).(js)$', 'src/api'],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    setupFilesAfterEnv: ['<rootDir>/tests/setup-tests.js'],
    globalSetup: '<rootDir>/tests/global-setup.js',
    clearMocks: true,
    coverageDirectory: 'coverage',
    testEnvironment: 'node',
    verbose: true,
};
