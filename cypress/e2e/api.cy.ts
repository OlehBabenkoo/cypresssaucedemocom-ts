describe('API test', () => {
    it('Check that the fixtures file has the same values as Ipinfo json', () => {
        cy.fixture('ipinfo.json').then((ipinfo) => {
            {
                this.ipinfo = ipinfo;
            }
            cy.request('GET', 'https://ipinfo.io/161.185.160.93/geo').then(
                (resp) => {
                    expect(resp.body.ip).to.deep.eq(this.ipinfo.ip);
                    expect(resp.body.city).to.deep.eq(this.ipinfo.city);
                    expect(resp.body.region).to.deep.eq(this.ipinfo.region);
                    expect(resp.body.country).to.deep.eq(this.ipinfo.country);
                    expect(resp.body.loc).to.deep.eq(this.ipinfo.loc);
                    expect(resp.body.org).to.deep.eq(this.ipinfo.org);
                    expect(resp.body.postal).to.deep.eq(this.ipinfo.postal);
                    expect(resp.body.timezone).to.deep.eq(this.ipinfo.timezone);
                    expect(resp.body.readme).to.deep.eq(this.ipinfo.readme);
                });
        });
    });
});