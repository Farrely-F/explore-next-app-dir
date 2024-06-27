"use client";

export default function TriggerError() {
  const triggerError = () => {
    throw new Error("Error");
  };
  return (
    <>
      <button onClick={() => triggerError()}>Trigger Error</button>
    </>
  );
}
