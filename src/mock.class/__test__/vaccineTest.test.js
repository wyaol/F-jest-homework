import VaccineTest from "../vaccineTest";
import Covid19Vaccine from "../covid19Vaccine";

const mockFun = jest.fn(() => true);
const mockFun2 = jest.fn();

jest.mock("../recipient", () =>
  jest.fn(() => {
    return {
      getHasAntibodies: mockFun,
      acceptInjection: mockFun2,
    };
  })
);

beforeEach(() => {
  jest.resetModules();
});

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    const vaccineTest = new VaccineTest();
    vaccineTest.inject();
    expect(mockFun2).toHaveBeenCalledWith(expect.any(Covid19Vaccine));
  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    const vaccineTest = new VaccineTest();
    expect(vaccineTest.test()).toEqual("Vaccine Test Success");
  });

  test("should get Failed if recipient has no antibodies", () => {
    const vaccineTest = new VaccineTest();
    mockFun.mockImplementation(() => false);
    expect(vaccineTest.test()).toEqual("Vaccine Test Failed");
  });
});
