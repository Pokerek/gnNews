export const countries: Country[] = [
   {
      name: 'Argentina',
      code: 'ar'
   },
   {
      name: 'Australia',
      code: 'au'
   },
   {
      name: 'Austria',
      code: 'at'
   },
   {
      name: 'Belgium',
      code: 'be'
   },
   {
      name: 'Brazil',
      code: 'br'
   },
   {
      name: 'Bulgaria',
      code: 'bg'
   },
   {
      name: 'Canada',
      code: 'ca'
   },
   {
      name: 'China',
      code: 'cn'
   },
   {
      name: 'Colombia',
      code: 'co'
   },
   {
      name: 'Cuba',
      code: 'cu'
   },
   {
      name: 'Czech Republic',
      code: 'cz'
   },
   {
      name: 'Egypt',
      code: 'eg'
   },
   {
      name: 'France',
      code: 'fr'
   },
   {
      name: 'Germany',
      code: 'de'
   },
   {
      name: 'Greece',
      code: 'gr'
   },
   {
      name: 'Hong Kong',
      code: 'hk'
   },
   {
      name: 'Hungary',
      code: 'hu'
   },
   {
      name: 'India',
      code: 'in'
   },
   {
      name: 'Indonesia',
      code: 'id'
   },
   {
      name: 'Ireland',
      code: 'ie'
   },
   {
      name: 'Israel',
      code: 'il'
   },
   {
      name: 'Italy',
      code: 'it'
   },
   {
      name: 'Japan',
      code: 'jp'
   },
   {
      name: 'Latvia',
      code: 'lv'
   },
   {
      name: 'Lithuania',
      code: 'lt'
   },
   {
      name: 'Malaysia',
      code: 'my'
   },
   {
      name: 'Mexico',
      code: 'mx'
   },
   {
      name: 'Morocco',
      code: 'ma'
   },
   {
      name: 'Netherlands',
      code: 'nl'
   },
   {
      name: 'New Zealand',
      code: 'nz'
   },
   {
      name: 'Nigeria',
      code: 'ng'
   },
   {
      name: 'Norway',
      code: 'no'
   },
   {
      name: 'Philippines',
      code: 'ph'
   },
   {
      name: 'Poland',
      code: 'pl'
   },
   {
      name: 'Portugal',
      code: 'pt'
   },
   {
      name: 'Romania',
      code: 'ro'
   },
   {
      name: 'Russia',
      code: 'ru'
   },
   {
      name: 'Saudi Arabia',
      code: 'sa'
   },
   {
      name: 'Serbia',
      code: 'rs'
   },
   {
      name: 'Singapore',
      code: 'sg'
   },
   {
      name: 'Slovakia',
      code: 'sk'
   },
   {
      name: 'Slovenia',
      code: 'si'
   },
   {
      name: 'South Africa',
      code: 'za'
   },
   {
      name: 'South Korea',
      code: 'kr'
   },
   {
      name: 'Sweden',
      code: 'se'
   },
   {
      name: 'Switzerland',
      code: 'ch'
   },
   {
      name: 'Taiwan',
      code: 'tw'
   },
   {
      name: 'Thailand',
      code: 'th'
   },
   {
      name: 'Turkey',
      code: 'tr'
   },
   {
      name: 'United Arab Emirates',
      code: 'ae'
   },
   {
      name: 'Ukraine',
      code: 'ua'
   },
   {
      name: 'United Kingdom',
      code: 'gb'
   },
   {
      name: 'United States',
      code: 'us'
   },
   {
      name: 'Venezuela',
      code: 've'
   }
];

export interface Country {
   name: string;
   code: string;
}

export const searchCountries = (text: string) => {
   const regex = new RegExp(text.toLowerCase());
   return countries.filter((country) => regex.test(country.name.toLowerCase()));
};

export const convertCountryToPath = (name: string) => {
   const country = countries.find((el) => el.name === name);
   if (!country) return '/';

   return `/${convertToPathString(country.name)}`;
};

export const getCountryByName = (name: string) =>
   countries.find((el) => el.name === name);

export const getCountryByCode = (code: string) =>
   countries.find((el) => el.code === code);

const convertToPathString = (string: string) =>
   string.toLowerCase().split(' ').join('-');
