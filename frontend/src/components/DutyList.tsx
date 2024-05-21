import React, { useEffect, useState } from "react";
import { fetchDuties, createDuty, updateDuty } from "../services/api";
import { Duty } from "../types";
import DutyForm from "./DutyForm";

const DutyList: React.FC = () => {
  const [duties, setDuties] = useState<Duty[]>([]);
  const [editingDuty, setEditingDuty] = useState<Duty | null>(null);

  useEffect(() => {
    const getDuties = async () => {
      const fetchedDuties = await fetchDuties();
      setDuties(fetchedDuties);
    };
    getDuties();
  }, []);

  const handleAddDuty = async (name: string) => {
    const newDuty = await createDuty(name);
    setDuties([...duties, newDuty]);
  };

  const handleUpdateDuty = async (id: string, name: string) => {
    const updatedDuty = await updateDuty(id, name);
    setDuties(duties.map((duty) => (duty.id === id ? updatedDuty : duty)));
    setEditingDuty(null);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {duties.map((duty) => (
          <li key={duty.id}>
            {duty.name}
            <button onClick={() => setEditingDuty(duty)}>Edit</button>
          </li>
        ))}
      </ul>
      <DutyForm
        onSubmit={
          editingDuty
            ? (name) => handleUpdateDuty(editingDuty.id, name)
            : handleAddDuty
        }
        initialName={editingDuty?.name || ""}
        onCancel={() => setEditingDuty(null)}
      />
    </div>
  );
};

export default DutyList;
