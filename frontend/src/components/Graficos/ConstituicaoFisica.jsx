import React from 'react'
import { Card, CardHeader, CardBody, CardTitle } from 'reactstrap';


const ConstituicaoFisica = (props) => {
    return (
        <div>
            <div>
                <Card
                    className="text-center"
                    color="success"
                    inverse
                    style={{
                        width: '18rem'
                    }}>
                    <CardHeader>
                        Escalada da Constituição Física
                    </CardHeader>
                    <CardBody>
                        <CardTitle tag="h1">
                            {props.constituicao}
                        </CardTitle>
                    </CardBody>
                </Card>





            </div>
        </div>
    )
}

export default ConstituicaoFisica