export default class InputsService {
    public inputs: string[];
    public setInputs: (inputs: string[]) => void;

    public constructor(
        inputs: string[], 
        setInputs: (inputs: string[]) => void
    ) {
        this.inputs = inputs;
        this.setInputs = setInputs;
    }

    public changeInput = (index: number, value: string) => {
        const newInputs = [...this.inputs];
        newInputs[index] = value;
        this.setInputs(newInputs);
        return newInputs;
    };

    public removeInput = (index: number) => {
        const newInputs = [...this.inputs];
        newInputs.splice(index, 1);
        this.setInputs(newInputs);
        return newInputs;
    };    
}
