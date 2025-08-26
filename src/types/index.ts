// Общие поля для платежа и счета
export interface BaseTransaction {
    id: string;
    amount: number;
    customer: string;
    customerInn: string;
    executor: string;
    executorInn: string;
}

// Платеж
export interface Payment extends BaseTransaction {
    date: string;
    type: "электронный" | "наличный";
    examName: string;
    paymentComment: string;
    accountantComment: string;
}

// Счет
export interface Invoice extends BaseTransaction {
    type: "обучение" | "пошлина";
    examName: string;
    qualification: string;
    purpose: string;
}