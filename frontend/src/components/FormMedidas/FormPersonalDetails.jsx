import React, { useState } from 'react';
import * as C from "@chakra-ui/react";

const FormPersonalDetails = () => {

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
            type='text'
            name='nome' 
            placeholder="Nome Completo" 
            borderColor="blue.700" 
            onChange={handleChangeValues}/>
            <C.Input 
            type='text'
            name='cpf' 
            placeholder="CPF" 
            borderColor="blue.700"
            onChange={handleChangeValues} />
            <C.Input 
            type='text'
            name='celular' 
            placeholder="Celular" 
            borderColor="blue.700"
            onChange={handleChangeValues} />
        </C.VStack>
    );
};

export default FormPersonalDetails;