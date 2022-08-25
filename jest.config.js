const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/setup.ts"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  testRegex: "(<rootDir>/src/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/src/$1",
  },
};

module.exports = createJestConfig(customJestConfig);
