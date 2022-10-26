import { FormWrapper } from "./FormWrapper";

interface AddressData {
  street: string;
  city: string;
  state: string;
  cep: string;
}

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

export function AddressForm({cep, city, state, street, updateFields}: AddressFormProps) {
  return (
    <FormWrapper title="Address details">
      <label htmlFor="">Street</label>
      <input autoFocus required type="text" value={street} onChange={e => updateFields({street: e.target.value})} />
      <label htmlFor="">City</label>
      <input required type="text" value={city} onChange={e => updateFields({city: e.target.value})}  />
      <label htmlFor="">State</label>
      <input required max={2} type="text" value={state} onChange={e => updateFields({state: e.target.value})} />
      <label htmlFor="">Cep</label>
      <input required type="text" value={cep} onChange={e => updateFields({cep: e.target.value})} />
    </FormWrapper>
  );
}
