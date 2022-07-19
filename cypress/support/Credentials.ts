import {AccountType} from './AccountType';

export default class Credentials {
    public static getUserCredentials(accountType: AccountType): any {
        return Cypress.env('accounts')[accountType];
    }
}