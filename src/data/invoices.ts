import {v4 as uuidv4} from "uuid";
import type {Invoice} from "../types";

export const invoices: Invoice[] = [
    {
        id: uuidv4(),
        type: "обучение",
        examName: "Иванов Иван",
        qualification: "A123456789",
        amount: 5000,
        customer: "ООО Ромашка",
        customerInn: "1234567890",
        executor: "Учебный центр №1",
        executorInn: "9876543210",
        purpose: "Обучение по программе повышения квалификации"
    },
    {
        id: uuidv4(),
        type: "пошлина",
        examName: "Петров Петр",
        qualification: "B987654321",
        amount: 7000,
        customer: "ООО Василёк",
        customerInn: "1231231231",
        executor: "Учебный центр №2",
        executorInn: "3213213210",
        purpose: "Государственная пошлина за проведение экзамена"
    },
    {
        id: uuidv4(),
        type: "обучение",
        examName: "Сидоров Сидор",
        qualification: "C111222333",
        amount: 6000,
        customer: "ООО Лотос",
        customerInn: "1122334455",
        executor: "Учебный центр №3",
        executorInn: "5544332211",
        purpose: "Обучение по курсу повышения квалификации"
    },
    {
        id: uuidv4(),
        type: "пошлина",
        examName: "Кузнецов Кузьма",
        qualification: "D444555666",
        amount: 4500,
        customer: "ООО Роза",
        customerInn: "6677889900",
        executor: "Учебный центр №4",
        executorInn: "0099887766",
        purpose: "Пошлина за проведение экзамена"
    },
    {
        id: uuidv4(),
        type: "обучение",
        examName: "Федоров Фёдор",
        qualification: "E777888999",
        amount: 8000,
        customer: "ООО Лилия",
        customerInn: "1010101010",
        executor: "Учебный центр №5",
        executorInn: "0101010101",
        purpose: "Обучение по дополнительной программе"
    },
    {
        id: uuidv4(),
        type: "пошлина",
        examName: "Николаев Николай",
        qualification: "F222333444",
        amount: 5500,
        customer: "ООО Ромашка 2",
        customerInn: "2233445566",
        executor: "Учебный центр №6",
        executorInn: "6655443322",
        purpose: "Пошлина за курс"
    },
    {
        id: uuidv4(),
        type: "обучение",
        examName: "Александров Александр",
        qualification: "G555666777",
        amount: 7200,
        customer: "ООО Василёк 2",
        customerInn: "3344556677",
        executor: "Учебный центр №7",
        executorInn: "7766554433",
        purpose: "Обучение по курсу"
    },
    {
        id: uuidv4(),
        type: "пошлина",
        examName: "Васильев Василий",
        qualification: "H888999000",
        amount: 4800,
        customer: "ООО Лотос 2",
        customerInn: "4455667788",
        executor: "Учебный центр №8",
        executorInn: "8877665544",
        purpose: "Пошлина за экзамен"
    },
    {
        id: uuidv4(),
        type: "обучение",
        examName: "Михайлов Михаил",
        qualification: "I111222333",
        amount: 8300,
        customer: "ООО Роза 2",
        customerInn: "5566778899",
        executor: "Учебный центр №9",
        executorInn: "9988776655",
        purpose: "Обучение по договору"
    },
];
