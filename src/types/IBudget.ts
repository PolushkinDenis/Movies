interface IBudgetFilms {
    id: number,
    filmId: number,
    budgetId: number
}

export interface IBudget {
    id: number,
    type: string,
    amount: string,
    currencyCode: string,
    name: string,
    symbol: string,
    BudgetFilms?: IBudgetFilms
}