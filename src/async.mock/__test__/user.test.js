import { register } from "../user";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    const res = await register("username", "password");
    expect(res).toEqual("success");
  });

  test("should reject with Error when username is invalid", async () => {
    verifyUsername.mockReturnValue(false);
    await expect(register("username", "password")).rejects.toThrow(
      "wrong username or password"
    );
  });
});
