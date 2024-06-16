import { useState } from 'react';

import PickPerson from './PickPerson';
import InputContainer from './InputContainer';
import InputsService from './InputsService';
import { ContextProvider } from './Context';

export default function App() {  
  const [inputs, setInputs] = useState(['']);
  const inputsService = new InputsService(inputs, setInputs);

  return (
    <ContextProvider value={inputsService}>
      <main>
        {inputs.map((input, index) => (
          <InputContainer key={index} index={index} input={input} />
        ))}
        <br />
        <PickPerson />
      </main>
    </ContextProvider>
  );
}
