import React from "react";

const TableComponent = ({personas}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    {personas.map((persona) => (
                        <tr key={persona.id}>
                            <td>{persona.Id}</td>
                            <td>{persona.Nombre}</td>
                            <td>{persona.Descripcion}</td>

                        </tr>

                    )
                    )
                    }
                </tbody>


            </table>

        </div>
    )
}
export default TableComponent
