import { useState, useEffect } from 'react';

function useForm(formInitialState, validator, callBack, updateValues) {

    const [values, setValues] = useState(formInitialState);

    const [errors, setErrors] = useState({});
    const [isSubmitForm, setIsSubmitForm] = useState(false);
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });

    }
    const onBlurHandler = (e) => {
        console.log("xyz");
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
        setErrors(validator(values));

    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        setErrors(validator(values));
        setIsSubmitForm(true);
    }

    useEffect(() => {
        if (updateValues) {
            setValues(formInitialState)
        }

    }, [updateValues])

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitForm) {
            callBack();
            setValues(formInitialState);
        }

    }, [errors])

    return { values, onChangeHandler, errors, onSubmitHandler, onBlurHandler }

}

export default useForm;