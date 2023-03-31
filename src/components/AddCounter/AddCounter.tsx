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
                initialValues={{
                    name: '',
                    startingValue: 0,
                    color: '#00000',
                }}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Name</label>
                            <Field name="name" component="input" type="text" placeholder="Counter Name"/>
                            <label>Starting Value</label>
                            <Field name="startingValue" component="input" type="text" placeholder="Starting Value"/>
                            <label>Color</label>
                            <Field name="color" component="input" type="text" placeholder="Counter Color"/>
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