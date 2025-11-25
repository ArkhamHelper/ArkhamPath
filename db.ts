/**
 * @description Описание таблиц БД
 */

/**
 * @description Будем хранить данные для отображения схемы,
 * чтобы не запрашивать данные за все время.
 * Будем делать запрос для кампаний в промежутке от последней даты обновления схемы.
 * Нужно изменять дату обновления схемы, при каждой загрузке приложения. 
 */
interface CycleSchema {
    userId: number
    cycleCode: string
    data: JSON //Храним весь объект кампании
    dateUpdate: Date
    dateCreate: Date
    dateLastFetchArkhamCards: Date //Последняя дата синхронизации с ArkhamCards

    //ID - userId + cycleCode
}

interface User {
    id: number
    arkhamCardsId: string //UUID
}

/**
 * @todo Заменить journalNotes с string[] на interface || enum || type || class
 */
interface Campaign {
    id: number
    name: string
    difficulty: string
    journalNotes: string[] //Коды (id) записей журнала 
    userResults: JSON[] //{*scenarioCode*: *resolutionCode*}
}