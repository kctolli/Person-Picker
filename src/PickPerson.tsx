import { useState } from 'react';
import { useContextService } from './Context';

export default function PickPerson() {
    const [person, setPerson] = useState('');
    const inputsService = useContextService();

    const inputs = inputsService.inputs;
    const setInputs = inputsService.setInputs;

    /**
     * Picks a random person from the inputs array.
     * If the random element is the same as the current person
     * Pick another random element
     *
     * @return {void} This function does not return anything.
     */
    const pickRandomPerson = (): void => {
        if (inputs.length === 0) {
            setPerson('');
            return;
        }
        if (inputs.length === 1) {
            if (inputs[0] !== '' && inputs[0] !== person) {
                setPerson(inputs[0]);
            }
            return;
        }
        const randomIndex = Math.floor(Math.random() * inputs.length);
        const randomElement = inputs[randomIndex];
        if (randomElement === person || randomElement === '') { 
            pickRandomPerson(); 
        } else { 
            setPerson(randomElement); 
        }
    }

    return (
        <>
            <section className="inputContainer">
                <button onClick={() => setInputs([...inputs, ''])}>Add</button>
                <button onClick={pickRandomPerson}>Pick Person</button>
            </section>
            <p><b>Picked person: {person}</b></p>
        </>
    );
}
