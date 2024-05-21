import { render, screen, fireEvent } from "@testing-library/react";
import DutyForm from "./DutyForm";

describe("DutyForm", () => {
  const onSubmit = jest.fn();
  const onCancel = jest.fn();

  beforeEach(() => {
    onSubmit.mockClear();
    onCancel.mockClear();
  });

  it("should render with initial values", () => {
    render(
      <DutyForm
        onSubmit={onSubmit}
        initialName="Initial Duty"
        onCancel={onCancel}
      />
    );
    expect(screen.getByPlaceholderText("New duty")).toHaveValue("Initial Duty");
  });

  it("should call onSubmit with the duty name when submitted", () => {
    render(<DutyForm onSubmit={onSubmit} initialName="" onCancel={onCancel} />);
    const input = screen.getByPlaceholderText("New duty");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Duty" } });
    fireEvent.click(button);

    expect(onSubmit).toHaveBeenCalledWith("New Duty");
  });

  it("should show an error message if the input is empty and submit is clicked", () => {
    render(<DutyForm onSubmit={onSubmit} initialName="" onCancel={onCancel} />);
    const button = screen.getByText("Add");

    fireEvent.click(button);

    expect(screen.getByText("Duty name cannot be empty")).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("should call onCancel and clear the input when cancel is clicked", () => {
    render(
      <DutyForm
        onSubmit={onSubmit}
        initialName="Initial Duty"
        onCancel={onCancel}
      />
    );
    const button = screen.getByText("Cancel");
    const input = screen.getByPlaceholderText("New duty");

    fireEvent.click(button);

    expect(onCancel).toHaveBeenCalled();
    expect(input).toHaveValue("");
  });

  it('should update the button text to "Update" when initialName is provided', () => {
    render(
      <DutyForm
        onSubmit={onSubmit}
        initialName="Update Duty"
        onCancel={onCancel}
      />
    );
    expect(screen.getByText("Update")).toBeInTheDocument();
  });

  it("should reset the form after submit", () => {
    render(<DutyForm onSubmit={onSubmit} initialName="" onCancel={onCancel} />);
    const input = screen.getByPlaceholderText("New duty");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Duty" } });
    fireEvent.click(button);

    expect(input).toHaveValue("");
  });
});
