export interface ResponseProps<T> {
 content: T;
 pageable: Pageable;
 last: boolean;
 totalElements: number;
 totalPages: number;
 size: number;
 number: number;
 sort: Sort2;
 first: boolean;
 numberOfElements: number;
 empty: boolean;
}

export interface Pageable {
 sort: Sort;
 offset: number;
 pageNumber: number;
 pageSize: number;
 unpaged: boolean;
 paged: boolean;
}

export interface Sort {
 empty: boolean;
 sorted: boolean;
 unsorted: boolean;
}

export interface Sort2 {
 empty: boolean;
 sorted: boolean;
 unsorted: boolean;
}
