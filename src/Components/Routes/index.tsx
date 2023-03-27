import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import {
   countries,
   convertCountryToPath
} from '../../Data/Countries/countries';

import Content from '../Content';

export default function Routes() {
   return (
      <ReactRoutes>
         <Route path="/" element={<Content />} />
         {countries.map((country) => (
            <Route
               key={country.name}
               path={`/country${convertCountryToPath(country.name)}`}
               element={<Content />}
            />
         ))}
      </ReactRoutes>
   );
}
