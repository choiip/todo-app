import request from "supertest";
import app from "../app";
import { mockQuery } from "../../__mocks__/pg";

beforeEach(() => {
  mockQuery.mockClear();
});

describe("API Tests", () => {
  it("should fetch all duties", async () => {
    const duties = [
      { id: 1, name: "Sample Duty 1" },
      { id: 2, name: "Sample Duty 2" },
    ];
    mockQuery.mockResolvedValueOnce({ rows: duties });

    const res = await request(app).get("/api/duties");
    expect(res.status).toBe(200);
    expect(res.body).toEqual(duties);
  });

  it("should create a new duty", async () => {
    const newDuty = { id: 3, name: "Test Duty" };
    mockQuery.mockResolvedValueOnce({ rows: [newDuty] });

    const res = await request(app)
      .post("/api/duties")
      .send({ name: "Test Duty" });
    expect(res.status).toBe(201);
    expect(res.body).toEqual(newDuty);
  });

  it("should update an existing duty", async () => {
    const updatedDuty = { id: 1, name: "Updated Duty" };
    mockQuery.mockResolvedValueOnce({ rows: [updatedDuty] });

    const res = await request(app)
      .put("/api/duties/1")
      .send({ name: "Updated Duty" });
    expect(res.status).toBe(200);
    expect(res.body).toEqual(updatedDuty);
  });
});
