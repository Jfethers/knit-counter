import React, { FunctionComponent, useState, useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import * as validate from '../../utils/validations'
import Button from '../Button/Button';

interface IAddCounterProps {
    setShowModal: Function,
    counters: [],
}

const AddCounter: FunctionComponent<IAddCounterProps> = (props: IAddCounterProps) => {
    const { setShowModal, counters } = props;

    const onSubmit = (values: object) => {
        const countersClone : object[] = [...counters];
        countersClone.push(values);
        localStorage.setItem("counters", JSON.stringify(countersClone));
        setShowModal(false);
    }

    return (
        <div className="form">
            <h1>Add Counter</h1>
            <Form
                onSubmit={onSubmit}
                subscription={{errors: true, values: true }}
                render={({ handleSubmit, form, submitting, pristine, values, errors, valid }) => {
                    console.log('values', values);
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
                            <Button className="button" disabled={!valid || pristine} onClick={() => onSubmit(values)} type="submit">Submit</Button>
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