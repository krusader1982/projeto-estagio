import React, { useState } from 'react';
import * as C from "@chakra-ui/react";



const FormAccount = () => {
    const [values, setValues] = useState();
    console.log(values);

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    };


    return (
        <C.VStack spacing={5}>
            <C.Input
                type="email"                
                placeholder="E-mail"
                borderColor="blue.700" />
            <C.Input
                type="email"
                name="email"
                placeholder="Confirme seu E-mail"
                borderColor="blue.700"
                onChange={handleChangeValues}
            />
            <C.Input
                type="password"
                name="password"
                placeholder="Senha"
                borderColor="blue.700"
                onChange={handleChangeValues} />
        </C.VStack>
    );
};

export default FormAccount;