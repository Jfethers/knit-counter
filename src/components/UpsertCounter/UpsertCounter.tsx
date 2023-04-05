import React, { FunctionComponent, useState, useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import * as validate from '../../utils/validations'
import Button from '../Button/Button';

interface IUpsertCounterProps {
    setShowModal: Function,
    counters: Array<object>,
    isNew: boolean,
    counter?: {},
}

const UpsertCounter: FunctionComponent<IUpsertCounterProps> = (props: IUpsertCounterProps) => {
    const { setShowModal, counters, isNew, counter } = props;

    console.log('counter', counter);
    const onSubmit = (values: object) => {
        // isNew
        const countersClone : object[] = [...counters];
        countersClone.push(values);
        localStorage.setItem("counters", JSON.stringify(countersClone));
        setShowModal(false);

        // !isNew

        // find specific counter
        // remove that counter from counters
        // insert this counter at same index
        // setItems with new counter array
    }

    return (
        <div className="form">
            <h1>{isNew ? 'Add Counter' : 'Edit Counter'}</h1>
            <Form
                onSubmit={onSubmit}
                subscription={{errors: true, values: true }}
                initialValues={counter}
                render={({ handleSubmit, form, submitting, pristine, values, errors, valid }) => {
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

export default UpsertCounter;