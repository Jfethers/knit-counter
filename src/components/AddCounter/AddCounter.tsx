import React, { FunctionComponent, useState, useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import * as validate from '../../utils/validations'

interface IAddCounterProps {
    setShowModal: Function
}

const AddCounter: FunctionComponent<IAddCounterProps> = (props: IAddCounterProps) => {
    const [ counters, setCounters ] = useState([]);
    const { setShowModal } = props;

    const onSubmit = (values: object) => {
        const allCounters = [];
        allCounters.push(values);
        localStorage.setItem("counters", JSON.stringify(allCounters));
        setShowModal(false);
    }

    return (
        <div className="form">
            <h1>Add Counter</h1>
            <Form
                onSubmit={onSubmit}
                subscription={{errors: true}}
                render={({ handleSubmit, form, submitting, pristine, values, errors }) => {
                    console.log('errors', errors);
                    return (
                    <form className="form-body" onSubmit={handleSubmit}>
                        <div className="field-group">
                            <label className="label">Counter Name</label>
                            <Field name="name" className="field" component="input" type="text">
                                {({ input, meta }) => (
                                <>
                                    <input {...input} type="text" placeholder="Name" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </>
                                )}
                            </Field>
                        </div>
                        <div className="field-group">
                            <label className="label">Starting Value</label> 
                            <Field name="startingValue" className="field" component="input" type="text">
                                {({ input, meta }) => (
                                <>
                                    <input {...input} type="text" placeholder="Starting Value" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </>
                                )}
                            </Field> 
                        </div>
                        <div className="field-group">
                            <label className="label">Color</label>
                            <Field name="color" className="field" validate={validate.hex} component="input" type="text">
                                {({ input, meta }) => (
                                <>
                                    <input {...input} type="text" placeholder="Color" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </>
                                )}
                            </Field>
                        </div>
                        <div className="submit">
                            <button type="submit">Submit</button>
                        </div>
                    </form>

                )
                }}
            >
            </Form>
        </div>
    )
}

export default AddCounter;