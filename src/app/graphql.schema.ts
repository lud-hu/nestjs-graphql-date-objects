
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Dummy {
    id: string;
    name: string;
    createdAt: Date;
}

export abstract class IQuery {
    abstract dummy(id: string): Dummy | Promise<Dummy>;
}

type Nullable<T> = T | null;
