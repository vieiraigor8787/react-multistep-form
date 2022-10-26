import { FormEvent, useState } from "react";
import { AccountForm } from "./AccountForm";
import { AddressForm } from "./AddresForm";
import { useMultistepForm } from "./useMultistepForm";
import { UserForm } from "./UserForm";

interface FormData {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  cep: string;
  email: string;
  password: string;
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  cep: "",
  email: "",
  password: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, firstStep, back, next, lastStep } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields}/>,
      <AccountForm {...data} updateFields={updateFields}/>,
    ]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!lastStep) return next()
    alert('Successfully account created')

    setData(INITIAL_DATA)
  }

  return (
    <div
      style={{
        position: "relative",
        background: "#fff",
        border: "1px solid #000",
        padding: "2rem",
        margin: "2rem",
        borderRadius: "1rem",
        fontFamily: "Arial",
        maxWidth: 'max-content'
      }}
    >
      <form action="" onSubmit={handleSubmit}>
        <div
          style={{
            position: "absolute",
            top: "0.5rem",
            right: "0.5rem",
          }}
        >
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: "0.5rem",
            justifyContent: "flex-end",
          }}
        >
          {!firstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{lastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
