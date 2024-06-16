import { useContextService } from './Context';

type InputType = {
    index: number;
    input: string;
}

export default function InputContainer({index, input}: InputType) {
    const inputsService = useContextService();

    return (
        <section key={index} className="inputContainer">
            <input
              type="text"
              value={input}
              onChange={e => inputsService.changeInput(index, e.target.value)}
            /> &nbsp;
            <button onClick={() => inputsService.removeInput(index)}>Remove</button>
        </section>
    );
}
