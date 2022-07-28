export default class ApiService {
    public static sendDataFromFixtureFileAndVerifyRequestParameters(pathToFixture: string, requestMethod: string, requestUrl: string): void {
        cy.fixture(pathToFixture).then((object) => {
            cy.request(requestMethod, requestUrl).then(
                (resp) => {
                    expect(resp.body.ip).to.deep.eq(object.ip);
                    expect(resp.body.city).to.deep.eq(object.city);
                    expect(resp.body.region).to.deep.eq(object.region);
                    expect(resp.body.country).to.deep.eq(object.country);
                    expect(resp.body.loc).to.deep.eq(object.loc);
                    expect(resp.body.org).to.deep.eq(object.org);
                    expect(resp.body.postal).to.deep.eq(object.postal);
                    expect(resp.body.timezone).to.deep.eq(object.timezone);
                    expect(resp.body.readme).to.deep.eq(object.readme);
                });
        });
    }
}