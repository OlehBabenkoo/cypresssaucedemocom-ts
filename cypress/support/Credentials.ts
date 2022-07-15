import {AccountType} from './AccountType';

export default class Credentials {
    public static getUserName(accountType: AccountType): string {
        return Cypress.env('accounts')[accountType]['userName'];
    }

    public static getUserPassword(accountType: AccountType): string {
        return Cypress.env('accounts')[accountType]['password'];
    }
}