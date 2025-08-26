import {DataGrid, type GridColDef} from '@mui/x-data-grid';
import type {Payment} from "../types";

type PropsType = {
    data: Payment[]

}

const columns: GridColDef[] = [
    {field: "id", headerName: "№", width: 80},
    {field: "date", headerName: "Дата", width: 120},
    {field: "type", headerName: "Тип", width: 150},
    {field: "amount", headerName: "Сумма", width: 120},
    {field: "customer", headerName: "Заказчик", width: 200},
    {field: "customerInn", headerName: "Заказчик ИНН", width: 150},
    {field: "executor", headerName: "Исполнитель", width: 200},
    {field: "executorInn", headerName: "Исполнитель ИНН", width: 150},
    {field: "examName", headerName: "ФИО экзаменуемого", width: 200},
    {field: "paymentComment", headerName: "Комментарий платежа", width: 250},
    {field: "accountantComment", headerName: "Комментарий бухгалтера", width: 250},
];

export const PaymentsTable = (props: PropsType) => {
    return (
        <div style={{height: 400, width: "100%"}}>
            <DataGrid
                rows={props.data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </div>
    );
}
