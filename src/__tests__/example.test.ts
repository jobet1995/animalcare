// A simple test to verify Jest is working
function sum(a: number, b: number): number {
  return a + b;
}

describe("sum function", () => {
  it("should add two numbers correctly", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 5)).toBe(4);
    expect(sum(0, 0)).toBe(0);
  });
});
