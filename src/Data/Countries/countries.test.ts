import {
   getCountryByName,
   getCountryByCode,
   convertCountryToPath,
   searchCountries,
   getCountryName
} from './countries';

describe('Countries object', () => {
   it('should return name by selected language', () => {
      expect(getCountryName('Poland', 'pl')).toBe('Polska');
      expect(getCountryName('Poland')).toBe('Poland');
   });
   it('should return object by name', () => {
      expect(getCountryByName('Poland')).toMatchObject({
         name: 'Poland',
         en: 'Poland',
         pl: 'Polska',
         code: 'pl'
      });
      expect(getCountryByName('United Kingdom')).toMatchObject({
         name: 'United Kingdom',
         en: 'United Kingdom',
         pl: 'Wielka Brytania',
         code: 'gb'
      });
   });

   it('should return object by code', () => {
      expect(getCountryByCode('pl')).toMatchObject({
         name: 'Poland',
         en: 'Poland',
         pl: 'Polska',
         code: 'pl'
      });
      expect(getCountryByCode('gb')).toMatchObject({
         name: 'United Kingdom',
         en: 'United Kingdom',
         pl: 'Wielka Brytania',
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
         {
            name: 'Poland',
            en: 'Poland',
            pl: 'Polska',
            code: 'pl'
         }
      ]);
      expect(searchCountries('Polska', 'pl')).toMatchObject([
         {
            name: 'Poland',
            en: 'Poland',
            pl: 'Polska',
            code: 'pl'
         }
      ]);
      expect(searchCountries('Au')).toMatchObject([
         { name: 'Australia', en: 'Australia', pl: 'Australia', code: 'au' },
         { name: 'Austria', en: 'Austria', pl: 'Austria', code: 'at' },
         {
            name: 'Saudi Arabia',
            en: 'Saudi Arabia',
            pl: 'Arabia Saudyjska',
            code: 'sa'
         }
      ]);
   });

   it('should return undefined if country or code not exist', () => {
      expect(getCountryByName('Honolulu')).toBe(undefined);
      expect(getCountryByCode('zz')).toBe(undefined);
   });
});
