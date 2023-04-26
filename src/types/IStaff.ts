export interface IPerson {
    id: number,
    personId: number,
    nameRu: string,
    nameEng: string | null,
    sex: string,
    posterUrl: string,
    birthday: string | null,
    death: string | null,
    age: string,
    birthPlace: string | null,
    deathPlace: string | null,
    hasAwards: string,
    profession: string,
}

export interface IStaff {
    personId: number,
    professionText: string,
    professionKey: string,
    person: IPerson[]
}