import {
   getCountryByName,
   getCountryByCode,
   convertCountryToPath,
   searchCountries
} from './countries';

describe('Countries object', () => {
   it('should return object by name', () => {
      expect(getCountryByName('Poland')).toMatchObject({
         name: 'Poland',
         code: 'pl'
      });
      expect(getCountryByName('United Kingdom')).toMatchObject({
         name: 'United Kingdom',
         code: 'gb'
      });
   });

   it('should return object by code', () => {
      expect(getCountryByCode('pl')).toMatchObject({
         name: 'Poland',
         code: 'pl'
      });
      expect(getCountryByCode('gb')).toMatchObject({
         name: 'United Kingdom',
         code: 'gb'
      });
   });

   it('should return path by name', () => {
      expect(convertCountryToPath('Poland')).toBe('/poland');
      expect(convertCountryToPath('United Kingdom')).toBe('/united-kingdom');
      expect(convertCountryToPath('United Arab Emirates')).toBe(
         '/united-arab-emirates'
      );
   });

   it('should return all countries that contains passed text', () => {
      expect(searchCountries('Poland')).toMatchObject([
         { name: 'Poland', code: 'pl' }
      ]);
      expect(searchCountries('Au')).toMatchObject([
         { name: 'Australia', code: 'au' },
         { name: 'Austria', code: 'at' },
         { name: 'Saudi Arabia', code: 'sa' }
      ]);
   });

   it('should return undefined if country or code not exist', () => {
      expect(getCountryByName('Honolulu')).toBe(undefined);
      expect(getCountryByCode('zz')).toBe(undefined);
   });
});
