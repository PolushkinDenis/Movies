interface IFilters {
	rating?: string;
	year?: string;
	nameRu?: string;
	genre?: string;
}

export interface IBaseQuery {
	type?: string;
	limit?: number;
	page?: number;
	id?: number;
}

export interface IQuery extends IBaseQuery {
    filters: IFilters;
}