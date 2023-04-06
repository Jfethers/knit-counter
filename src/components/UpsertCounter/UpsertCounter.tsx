import React, { FunctionComponent, useState, useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import * as validate from '../../utils/validations'
import Button from '../Button/Button';
import { CounterType } from '../../types/Counter';
import { CountersType } from '../../types/Counters'

interface IUpsertCounterProps {
    setShowModal: Function,
    counters: CountersType,
    isNew: boolean,
    counter?: {},
    index?: number,
}

const UpsertCounter: FunctionComponent<IUpsertCounterProps> = (props: IUpsertCounterProps) => {
    const { setShowModal, counters, isNew, counter, index = 0 } = props;

    const onSubmit = (values: CounterType) => {
        const countersClone : object[] = [...counters];
        const parsedValue = parseInt(values.startingValue as string);
        values.startingValue = parsedValue as number;

        if (isNew) {
            countersClone.push(values);
            localStorage.setItem("counters", JSON.stringify(countersClone));
        } else {
            countersClone.splice(index, 1, values);
            localStorage.setItem("counters", JSON.stringify(countersClone));
        }
        setShowModal(false);
        window.dispatchEvent(new Event('storage'))
    }

    return (
        <div className="form">
            <h1>{isNew ? 'Add Counter' : 'Edit Counter'}</h1>
            <Form
                onSubmit={onSubmit}
                subscription={{errors: true, values: true, valid: true, pristine: true }}
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
                            <Button className="button" disabled={!valid} onClick={() => onSubmit(values)} type="submit">Submit</Button>
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