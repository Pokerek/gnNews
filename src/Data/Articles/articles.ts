export const articles: News[] = [
   {
      source: {
         id: 'google-news',
         name: 'Google News'
      },
      author: 'Onet',
      title: 'IMGW ostrzega: zdecydowana zmiana w pogodzie. Pojawiły się alerty - Onet',
      description: null,
      url: 'https://news.google.com/rss/articles/CBMigwFodHRwczovL3d3dy5vbmV0LnBsL2luZm9ybWFjamUvb25ldHdpYWRvbW9zY2kvaW1ndy1vc3RyemVnYS16ZGVjeWRvd2FuYS16bWlhbmEtdy1wb2dvZHppZS1wb2phd2lseS1zaWUtb3N0cnplemVuaWEvc3R0YmJyMyw3OWNmYzI3ONIBAA?oc=5',
      urlToImage: null,
      publishedAt: '2023-03-26T14:07:20Z',
      content: null
   },
   {
      source: {
         id: 'google-news',
         name: 'Google News'
      },
      author: 'Onet',
      title: 'Scholz wskazuje warunek zakończenia wojny w Ukrainie. "Jeszcze nie czas na ten krok Putina" - Onet',
      description: null,
      url: 'https://news.google.com/rss/articles/CBMihAFodHRwczovL3d3dy5vbmV0LnBsL2luZm9ybWFjamUvb25ldHdpYWRvbW9zY2kvc2Nob2x6LXdza2F6dWplLXdhcnVuZWstemFrb25jemVuaWEtd29qbnktdy11a3JhaW5pZS1qZXN6Y3plLW5pZS1jemFzLzI2bmRrMjIsNzljZmMyNzjSAQA?oc=5',
      urlToImage: null,
      publishedAt: '2023-03-26T14:05:28Z',
      content: null
   },
   {
      source: {
         id: 'google-news',
         name: 'Google News'
      },
      author: 'TVN24',
      title: 'Liban. Zmiana czasu na letni. Nie wiedzą, która jest godzina - politycy doprowadzili do podziału między muz... - TVN24',
      description: null,
      url: 'https://news.google.com/rss/articles/CBMingFodHRwczovL3R2bjI0LnBsL3N3aWF0L2xpYmFuLXptaWFuYS1jemFzdS1uYS1sZXRuaS1uaWUtd2llZHphLWt0b3JhLWplc3QtZ29kemluYS1wb2xpdHljeS1kb3Byb3dhZHppbGktZG8tcG9kemlhbHUtbWllZHp5LW11enVsbWFuYW1pLWktY2hyemVzY2lqYW5hbWktNjg2MTk3NtIBogFodHRwczovL2FtcC50dm4yNC5wbC9zd2lhdC9saWJhbi16bWlhbmEtY3phc3UtbmEtbGV0bmktbmllLXdpZWR6YS1rdG9yYS1qZXN0LWdvZHppbmEtcG9saXR5Y3ktZG9wcm93YWR6aWxpLWRvLXBvZHppYWx1LW1pZWR6eS1tdXp1bG1hbmFtaS1pLWNocnplc2NpamFuYW1pLTY4NjE5NzY?oc=5',
      urlToImage: null,
      publishedAt: '2023-03-26T13:43:06Z',
      content: null
   },
   {
      source: {
         id: 'google-news',
         name: 'Google News'
      },
      author: 'wiadomosci.gazeta.pl',
      title: 'Tusk dla Gazeta.pl o wspólnej liście opozycji. "Nie można o tym gadać w nieskończoność" - wiadomosci.gazeta.pl',
      description: null,
      url: 'https://news.google.com/rss/articles/CBMieGh0dHBzOi8vd2lhZG9tb3NjaS5nYXpldGEucGwvd2lhZG9tb3NjaS83LDExNDg4NCwyOTU5OTMwOSx0dXNrLWRsYS1nYXpldGEtcGwtby13c3BvbG5lai1saXNjaWUtb3BvenljamktbmllLW1vem5hLW8uaHRtbNIBd2h0dHBzOi8vd2lhZG9tb3NjaS5nYXpldGEucGwvd2lhZG9tb3NjaS83LDExNDg4NCwyOTU5OTMwOSx0dXNrLWRsYS1nYXpldGEtcGwtby13c3BvbG5lai1saXNjaWUtb3BvenljamktbmllLW1vem5hLW8uYW1w?oc=5',
      urlToImage: null,
      publishedAt: '2023-03-26T13:38:00Z',
      content: null
   }
];

export type News = {
   source: {
      id: string;
      name: string;
   };
   author: string;
   title: string;
   description: string | null;
   url: string;
   urlToImage: string | null;
   publishedAt: string;
   content: string | null;
};
