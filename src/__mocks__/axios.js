export default {
  get: jest.fn(() => Promise.resolve({ data: "success" })),
  post: jest.fn(() => Promise.resolve({ data: "success" })),
};
