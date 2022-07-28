import ApiService from '../support/ApiService';

describe('API test', () => {
    it('Check that the fixtures file has the same values as Ipinfo json', () => {
        ApiService.sendDataFromFixtureFileAndVerifyRequestParameters('ipinfo.json', 'GET', 'https://ipinfo.io/161.185.160.93/geo');
    });

    it('Check the similarity of the fixtur file and the JSON API', () => {
        ApiService.sendDataFromFixtureFileAndVerifyRequestParameters('agify.io.json', 'GET', 'https://api.agify.io/?name=meelad');
    });
});