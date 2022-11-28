import React, { useState } from 'react';
import * as C from "@chakra-ui/react";

const FormAddress = () => {
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
            name='cidade' 
            placeholder="Cidade, UF" 
            borderColor="blue.700" 
            onChange={handleChangeValues}/>
            <C.Input
            type='text'
            name='rua' 
            placeholder="Rua" 
            borderColor="blue.700" 
            onChange={handleChangeValues}/>
            <C.Input 
            type='text'
            name='cep'
            placeholder="CEP" 
            borderColor="blue.700" 
            onChange={handleChangeValues}/>
        </C.VStack>
    );
};

export default FormAddress;