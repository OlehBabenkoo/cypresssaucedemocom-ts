export default class ApiService {
    public static sendDataFromFixtureFileAndVerifyRequestParameters(pathToFixture: string, requestMethod: string, requestUrl: string): void {
        cy.fixture(pathToFixture).then((object) => {
            cy.request(requestMethod, requestUrl).then(
                (resp) => {
                   for(let key in object){
                    expect(object[key]).deep.equal(resp.body[key]);
                   }
                });
        });
    }
}