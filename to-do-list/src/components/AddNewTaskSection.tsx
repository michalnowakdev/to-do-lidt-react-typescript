import React, { FunctionComponent, useState } from 'react';

interface IProps {
    addNew: (description: string) => void
}

const AddNewTaskSection: FunctionComponent<IProps> = ({ addNew }) => {
    const initialValue: string = "";

    const [value, setvalue] = useState<string>(initialValue);

    const addNewItem = (): void => {
        if (!!value) {
            addNew(value.trim());
            setvalue(initialValue);
        }
    }
    return (
        <div className="jumbotron">
            <div className="row mb-2">
                <div className="col">Task description</div>
            </div>
            <div className="row">
                <div className="col-9">
                    <input
                        className="w-100 h-100"
                        value={value}
                        onChange={e => setvalue(e.target.value)}
                    />
                </div>
                <div className="col-3">
                    <button
                        type="button"
                        className="btn btn-primary w-100"
                        onClick={() => addNewItem()}
                    >Add</button>
                </div>
            </div>
        </div>
    );
}

export default AddNewTaskSection;