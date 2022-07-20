import { DropSort } from './DropSort';

export default class SortProduct {
    public static getSortList(dropSort: DropSort): any {
        return Cypress.env('sort')[dropSort];
    }
}