const mockQuery = jest.fn();

const Pool = jest.fn(() => ({
  connect: jest.fn(),
  end: jest.fn(),
  query: mockQuery,
}));

export { Pool, mockQuery };
