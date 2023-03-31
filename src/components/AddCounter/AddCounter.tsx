import React, { FunctionComponent, ReactNode, Ref, RefObject } from 'react';
import { Form, Field } from 'react-final-form';

interface IAddCounterProps {}

const AddCounter: FunctionComponent<IAddCounterProps> = (props: IAddCounterProps) => {

    const onSubmit = (values: object) => {
        console.log('values', values);
    }

    return (
        <div className="form">
            <h1>Add Counter</h1>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form className="form-body" onSubmit={handleSubmit}>
                        <div className="field-group">
                            <label className="label">Counter Name</label>
                            <Field className="field" name="name" component="input" type="text" placeholder="Counter Name"/>
                        </div>
                        <div className="field-group">
                            <label className="label">Starting Value</label>
                            <Field className="field" name="startingValue" component="input" type="text" placeholder="Starting Value"/>   
                        </div>
                        <div className="field-group">
                            <label className="label">Color</label>
                            <Field className="field" name="color" component="input" type="text" placeholder="Counter Color"/>
                        </div>

                        <div className="submit">
                            <button type="submit">Submit</button>
                        </div>
                    </form>

                )}
            >

            </Form>
        </div>
    )
}

export default AddCounter;