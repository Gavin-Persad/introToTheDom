const fs = require("node:fs");
const path = require("node:path");

// Read the HTML file
const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

// Read the JS file
const js = fs.readFileSync(path.resolve(__dirname, "./index.js"), "utf8");

describe("index.html", () => {
	beforeAll(() => {
		document.documentElement.innerHTML = html.toString();
	});

	test("should have a script tag linking to index.js", () => {
		const script = document.querySelector('script[src="index.js"]');
		expect(script).not.toBeNull();
	});
});

describe("index.js", () => {
	test('should contain console.log("Linked!")', () => {
		expect(js).toContain('console.log("Linked!")');
	});
});