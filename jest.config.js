module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1',
    },
}
