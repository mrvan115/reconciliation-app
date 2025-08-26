import {Button} from "@mui/material";
import {PaymentsTable} from "../components/PaymentsTable.tsx";
import {InvoicesTable} from "../components/InvoicesTable.tsx";
import {payments} from "../data/payments.ts";
import {invoices} from "../data/invoices.ts";
import {useState} from "react";

type PropsType = {}


export const ReconciliationPage = (props: PropsType) => {
    const [selectedPaymentId, setSelectedPaymentId] = useState<string | null>(null);
    const [selectedInvoiceId, setSelectedInvoiceId] = useState<string | null>(null);

    const handleClick = () => {
        if (!selectedPaymentId || !selectedInvoiceId) {
            alert("Пожалуйста, выберите платеж и счет для сопоставления")
        }
    }

    return (
        <div>
            <div>
                <div>
                    <PaymentsTable data={payments}/>

                </div>
                <div>
                    <InvoicesTable data={invoices}/>
                </div>
            </div>

            <div style={{textAlign: "center", marginTop: "1rem"}}>
                <Button variant="contained" color="primary" onClick={handleClick}>
                    Сопоставить
                </Button>
            </div>
        </div>
    );
}
