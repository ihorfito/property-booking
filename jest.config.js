module.exports = {
    globals: {
        "ts-jest": {
            tsConfig: "tsconfig.json"
        }
    },
    moduleFileExtensions: [
        "ts",
        "js",
        "json"
    ],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    modulePathIgnorePatterns: ["<rootDir>/dist/"],
    testMatch: [
        "**/test/**/*.test.(ts|js)"
    ],
    testEnvironment: "node"
};
