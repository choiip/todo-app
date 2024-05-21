import React, { useState } from "react";

interface DutyFormProps {
  onSubmit: (name: string) => void;
  initialName: string;
  onCancel: () => void;
}

const DutyForm: React.FC<DutyFormProps> = ({
  onSubmit,
  initialName,
  onCancel,
}) => {
  const [name, setName] = useState<string>(initialName);
  const [error, setError] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name.trim() === "") {
      setError("Duty name cannot be empty");
      return;
    }
    onSubmit(name);
    setName("");
  };

  const handleCancel = () => {
    setName("");
    setError("");
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="New duty"
      />
      <button type="submit">{initialName ? "Update" : "Add"}</button>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default DutyForm;
