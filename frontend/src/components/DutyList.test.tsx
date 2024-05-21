import { render, screen, fireEvent } from "@testing-library/react";
import DutyList from "./DutyList";
import { fetchDuties, createDuty, updateDuty } from "../services/api";
import { Duty } from "../types";

jest.mock("../services/api");

const mockDuties: Duty[] = [
  { id: "1", name: "Sample Duty 1" },
  { id: "2", name: "Sample Duty 2" },
];

describe("DutyList", () => {
  beforeEach(() => {
    (fetchDuties as jest.Mock).mockResolvedValue(mockDuties);
    (createDuty as jest.Mock).mockImplementation((name) => ({ id: "3", name }));
    (updateDuty as jest.Mock).mockImplementation((id, name) => ({ id, name }));
  });

  it("should render the duties", async () => {
    render(<DutyList />);
    expect(await screen.findByText("Sample Duty 1")).toBeInTheDocument();
    expect(await screen.findByText("Sample Duty 2")).toBeInTheDocument();
  });

  it("should add a new duty", async () => {
    render(<DutyList />);
    const input = screen.getByPlaceholderText("New duty");
    fireEvent.change(input, { target: { value: "New Duty" } });
    fireEvent.click(screen.getByText("Add"));
    expect(await screen.findByText("New Duty")).toBeInTheDocument();
  });

  it("should update an existing duty", async () => {
    render(<DutyList />);
    expect(await screen.findByText("Sample Duty 1")).toBeInTheDocument();
    expect(await screen.findByText("Sample Duty 2")).toBeInTheDocument();
    const editButtons = screen.getAllByText("Edit", { selector: "button" });
    editButtons.forEach((button, index) => {
      if (index === 0) {
        fireEvent.click(button);
        const input = screen.getByPlaceholderText("New duty");
        fireEvent.change(input, { target: { value: `Updated Duty ${index}` } });
        fireEvent.click(screen.getByText("Update"));
      }
    })
    expect(await screen.findByText("Updated Duty 0")).toBeInTheDocument();
  });
});
