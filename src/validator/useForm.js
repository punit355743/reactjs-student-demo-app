import React, { useState } from 'react';

function useForm(formInitialState) {

    const [values, setValues] = useState(formInitialState)

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })

    }

    return { values, onChangeHandler }

}

export default useForm;