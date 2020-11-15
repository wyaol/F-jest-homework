import getUsers from "../users";

jest.mock("axios");

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    const data = await getUsers();
    expect(data).toEqual("success");
  });
});
