export const TYPE_HISTORY = {

    OPEN_ATTENDANCE: 213,
    LOCATION_PIN_ALT: 214,
    USD_SQUARE: 216,
    FILE_CHECK: 217,
    CONSTRUCTOR: 218,
    BAN: 219,
    PRICETAG_ALT: 221,
    COMMENT_QUESTION: 222,
}

export const TYPE_HISTORY_LABEL: { [key: number]: string } = {
    [TYPE_HISTORY.OPEN_ATTENDANCE]: 'ABERTURA DE ATENDIMENTO',  // ICONE QUE REMETA A ABERTURA
    [TYPE_HISTORY.LOCATION_PIN_ALT]: 'uil-location-pin-alt',      // ICONE PINO
    [TYPE_HISTORY.USD_SQUARE]: 'uil-usd-square',     // ICONE MOEDA
    [TYPE_HISTORY.FILE_CHECK]: 'uil-file-check',     // ICONE CHECKLIST 
    [TYPE_HISTORY.CONSTRUCTOR]: 'uil-constructor',      // ICONE QUE REMETA A SERVICO
    [TYPE_HISTORY.BAN]: 'uil-ban', // ICONE QUE REMETA RECUSA 
    [TYPE_HISTORY.PRICETAG_ALT]: 'uil-pricetag-alt',      // ICONE DE TAG 
    [TYPE_HISTORY.COMMENT_QUESTION]: 'uil-comment-question',      // ICONE DE SITUAÇÃO
};