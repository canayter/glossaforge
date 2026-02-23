/**
 * GlossaForge — Comprehensive Country Data
 *
 * Every sovereign state recognised by the UN (193 member states + 2 observers)
 * plus linguistically relevant territories and dependencies.
 *
 * Schema per entry:
 *   name   — common English short-form name
 *   iso3   — ISO 3166-1 alpha-3 code
 *   lat    — latitude of capital or geographic centroid (decimal degrees)
 *   lon    — longitude of capital or geographic centroid (decimal degrees)
 *   region — one of the 22 canonical GlossaForge regions
 *
 * Loaded via <script> tag; no ES-module syntax.
 */

const COUNTRY_DATA = {

  // =========================================================================
  //  NORTH AMERICA
  // =========================================================================
  US: { name: 'United States', iso3: 'USA', lat: 39.8, lon: -98.6, region: 'North America' },
  CA: { name: 'Canada', iso3: 'CAN', lat: 56.1, lon: -106.3, region: 'North America' },
  MX: { name: 'Mexico', iso3: 'MEX', lat: 23.6, lon: -102.6, region: 'North America' },
  GL: { name: 'Greenland', iso3: 'GRL', lat: 71.7, lon: -42.6, region: 'North America' },
  BM: { name: 'Bermuda', iso3: 'BMU', lat: 32.3, lon: -64.8, region: 'North America' },
  PM: { name: 'Saint Pierre and Miquelon', iso3: 'SPM', lat: 46.9, lon: -56.3, region: 'North America' },

  // =========================================================================
  //  CENTRAL AMERICA
  // =========================================================================
  GT: { name: 'Guatemala', iso3: 'GTM', lat: 15.8, lon: -90.2, region: 'Central America' },
  BZ: { name: 'Belize', iso3: 'BLZ', lat: 17.2, lon: -88.7, region: 'Central America' },
  HN: { name: 'Honduras', iso3: 'HND', lat: 15.2, lon: -86.2, region: 'Central America' },
  SV: { name: 'El Salvador', iso3: 'SLV', lat: 13.8, lon: -88.9, region: 'Central America' },
  NI: { name: 'Nicaragua', iso3: 'NIC', lat: 12.9, lon: -85.2, region: 'Central America' },
  CR: { name: 'Costa Rica', iso3: 'CRI', lat: 10.0, lon: -84.1, region: 'Central America' },
  PA: { name: 'Panama', iso3: 'PAN', lat: 8.5, lon: -80.8, region: 'Central America' },

  // =========================================================================
  //  CARIBBEAN
  // =========================================================================
  CU: { name: 'Cuba', iso3: 'CUB', lat: 21.5, lon: -79.0, region: 'Caribbean' },
  JM: { name: 'Jamaica', iso3: 'JAM', lat: 18.1, lon: -77.3, region: 'Caribbean' },
  HT: { name: 'Haiti', iso3: 'HTI', lat: 19.0, lon: -72.3, region: 'Caribbean' },
  DO: { name: 'Dominican Republic', iso3: 'DOM', lat: 18.7, lon: -70.2, region: 'Caribbean' },
  PR: { name: 'Puerto Rico', iso3: 'PRI', lat: 18.2, lon: -66.6, region: 'Caribbean' },
  TT: { name: 'Trinidad and Tobago', iso3: 'TTO', lat: 10.7, lon: -61.2, region: 'Caribbean' },
  BB: { name: 'Barbados', iso3: 'BRB', lat: 13.2, lon: -59.5, region: 'Caribbean' },
  BS: { name: 'Bahamas', iso3: 'BHS', lat: 25.0, lon: -77.4, region: 'Caribbean' },
  GD: { name: 'Grenada', iso3: 'GRD', lat: 12.1, lon: -61.7, region: 'Caribbean' },
  LC: { name: 'Saint Lucia', iso3: 'LCA', lat: 13.9, lon: -61.0, region: 'Caribbean' },
  VC: { name: 'Saint Vincent and the Grenadines', iso3: 'VCT', lat: 13.2, lon: -61.2, region: 'Caribbean' },
  AG: { name: 'Antigua and Barbuda', iso3: 'ATG', lat: 17.1, lon: -61.8, region: 'Caribbean' },
  DM: { name: 'Dominica', iso3: 'DMA', lat: 15.4, lon: -61.4, region: 'Caribbean' },
  KN: { name: 'Saint Kitts and Nevis', iso3: 'KNA', lat: 17.4, lon: -62.7, region: 'Caribbean' },
  GP: { name: 'Guadeloupe', iso3: 'GLP', lat: 16.3, lon: -61.6, region: 'Caribbean' },
  MQ: { name: 'Martinique', iso3: 'MTQ', lat: 14.6, lon: -61.0, region: 'Caribbean' },
  VI: { name: 'U.S. Virgin Islands', iso3: 'VIR', lat: 18.3, lon: -64.9, region: 'Caribbean' },
  VG: { name: 'British Virgin Islands', iso3: 'VGB', lat: 18.4, lon: -64.6, region: 'Caribbean' },
  KY: { name: 'Cayman Islands', iso3: 'CYM', lat: 19.3, lon: -81.3, region: 'Caribbean' },
  TC: { name: 'Turks and Caicos Islands', iso3: 'TCA', lat: 21.7, lon: -71.8, region: 'Caribbean' },
  AW: { name: 'Aruba', iso3: 'ABW', lat: 12.5, lon: -70.0, region: 'Caribbean' },
  CW: { name: 'Curacao', iso3: 'CUW', lat: 12.2, lon: -69.0, region: 'Caribbean' },
  SX: { name: 'Sint Maarten', iso3: 'SXM', lat: 18.0, lon: -63.1, region: 'Caribbean' },
  BQ: { name: 'Bonaire, Sint Eustatius and Saba', iso3: 'BES', lat: 12.2, lon: -68.3, region: 'Caribbean' },
  AI: { name: 'Anguilla', iso3: 'AIA', lat: 18.2, lon: -63.1, region: 'Caribbean' },
  MS: { name: 'Montserrat', iso3: 'MSR', lat: 16.7, lon: -62.2, region: 'Caribbean' },
  MF: { name: 'Saint Martin', iso3: 'MAF', lat: 18.1, lon: -63.1, region: 'Caribbean' },
  BL: { name: 'Saint Barthelemy', iso3: 'BLM', lat: 17.9, lon: -62.8, region: 'Caribbean' },

  // =========================================================================
  //  SOUTH AMERICA
  // =========================================================================
  BR: { name: 'Brazil', iso3: 'BRA', lat: -14.2, lon: -51.9, region: 'South America' },
  AR: { name: 'Argentina', iso3: 'ARG', lat: -38.4, lon: -63.6, region: 'South America' },
  CO: { name: 'Colombia', iso3: 'COL', lat: 4.6, lon: -74.1, region: 'South America' },
  VE: { name: 'Venezuela', iso3: 'VEN', lat: 6.4, lon: -66.6, region: 'South America' },
  PE: { name: 'Peru', iso3: 'PER', lat: -9.2, lon: -75.0, region: 'South America' },
  CL: { name: 'Chile', iso3: 'CHL', lat: -35.7, lon: -71.5, region: 'South America' },
  EC: { name: 'Ecuador', iso3: 'ECU', lat: -1.8, lon: -78.2, region: 'South America' },
  BO: { name: 'Bolivia', iso3: 'BOL', lat: -16.3, lon: -63.6, region: 'South America' },
  PY: { name: 'Paraguay', iso3: 'PRY', lat: -23.4, lon: -58.4, region: 'South America' },
  UY: { name: 'Uruguay', iso3: 'URY', lat: -32.5, lon: -55.8, region: 'South America' },
  GY: { name: 'Guyana', iso3: 'GUY', lat: 5.0, lon: -59.0, region: 'South America' },
  SR: { name: 'Suriname', iso3: 'SUR', lat: 4.0, lon: -56.0, region: 'South America' },
  GF: { name: 'French Guiana', iso3: 'GUF', lat: 4.0, lon: -53.0, region: 'South America' },
  FK: { name: 'Falkland Islands', iso3: 'FLK', lat: -51.8, lon: -59.6, region: 'South America' },

  // =========================================================================
  //  WESTERN EUROPE
  // =========================================================================
  GB: { name: 'United Kingdom', iso3: 'GBR', lat: 55.4, lon: -3.4, region: 'Western Europe' },
  FR: { name: 'France', iso3: 'FRA', lat: 46.2, lon: 2.2, region: 'Western Europe' },
  DE: { name: 'Germany', iso3: 'DEU', lat: 51.2, lon: 10.5, region: 'Western Europe' },
  NL: { name: 'Netherlands', iso3: 'NLD', lat: 52.1, lon: 5.3, region: 'Western Europe' },
  BE: { name: 'Belgium', iso3: 'BEL', lat: 50.5, lon: 4.5, region: 'Western Europe' },
  LU: { name: 'Luxembourg', iso3: 'LUX', lat: 49.8, lon: 6.1, region: 'Western Europe' },
  IE: { name: 'Ireland', iso3: 'IRL', lat: 53.1, lon: -7.7, region: 'Western Europe' },
  CH: { name: 'Switzerland', iso3: 'CHE', lat: 46.8, lon: 8.2, region: 'Western Europe' },
  AT: { name: 'Austria', iso3: 'AUT', lat: 47.5, lon: 14.6, region: 'Western Europe' },
  LI: { name: 'Liechtenstein', iso3: 'LIE', lat: 47.2, lon: 9.6, region: 'Western Europe' },
  MC: { name: 'Monaco', iso3: 'MCO', lat: 43.7, lon: 7.4, region: 'Western Europe' },
  AD: { name: 'Andorra', iso3: 'AND', lat: 42.5, lon: 1.5, region: 'Western Europe' },

  // =========================================================================
  //  NORTHERN EUROPE
  // =========================================================================
  SE: { name: 'Sweden', iso3: 'SWE', lat: 60.1, lon: 18.6, region: 'Northern Europe' },
  NO: { name: 'Norway', iso3: 'NOR', lat: 60.5, lon: 8.5, region: 'Northern Europe' },
  DK: { name: 'Denmark', iso3: 'DNK', lat: 56.3, lon: 9.5, region: 'Northern Europe' },
  FI: { name: 'Finland', iso3: 'FIN', lat: 61.9, lon: 25.7, region: 'Northern Europe' },
  IS: { name: 'Iceland', iso3: 'ISL', lat: 65.0, lon: -18.0, region: 'Northern Europe' },
  EE: { name: 'Estonia', iso3: 'EST', lat: 58.6, lon: 25.0, region: 'Northern Europe' },
  LV: { name: 'Latvia', iso3: 'LVA', lat: 56.9, lon: 24.1, region: 'Northern Europe' },
  LT: { name: 'Lithuania', iso3: 'LTU', lat: 55.2, lon: 23.9, region: 'Northern Europe' },
  FO: { name: 'Faroe Islands', iso3: 'FRO', lat: 62.0, lon: -6.9, region: 'Northern Europe' },
  AX: { name: 'Aland Islands', iso3: 'ALA', lat: 60.2, lon: 20.0, region: 'Northern Europe' },
  SJ: { name: 'Svalbard and Jan Mayen', iso3: 'SJM', lat: 77.6, lon: 23.7, region: 'Northern Europe' },
  GG: { name: 'Guernsey', iso3: 'GGY', lat: 49.5, lon: -2.5, region: 'Northern Europe' },
  JE: { name: 'Jersey', iso3: 'JEY', lat: 49.2, lon: -2.1, region: 'Northern Europe' },
  IM: { name: 'Isle of Man', iso3: 'IMN', lat: 54.2, lon: -4.5, region: 'Northern Europe' },

  // =========================================================================
  //  SOUTHERN EUROPE
  // =========================================================================
  ES: { name: 'Spain', iso3: 'ESP', lat: 40.5, lon: -3.7, region: 'Southern Europe' },
  PT: { name: 'Portugal', iso3: 'PRT', lat: 39.4, lon: -8.2, region: 'Southern Europe' },
  IT: { name: 'Italy', iso3: 'ITA', lat: 41.9, lon: 12.6, region: 'Southern Europe' },
  GR: { name: 'Greece', iso3: 'GRC', lat: 39.1, lon: 21.8, region: 'Southern Europe' },
  HR: { name: 'Croatia', iso3: 'HRV', lat: 45.1, lon: 15.2, region: 'Southern Europe' },
  SI: { name: 'Slovenia', iso3: 'SVN', lat: 46.2, lon: 14.8, region: 'Southern Europe' },
  BA: { name: 'Bosnia and Herzegovina', iso3: 'BIH', lat: 43.9, lon: 17.7, region: 'Southern Europe' },
  RS: { name: 'Serbia', iso3: 'SRB', lat: 44.0, lon: 21.0, region: 'Southern Europe' },
  ME: { name: 'Montenegro', iso3: 'MNE', lat: 42.7, lon: 19.4, region: 'Southern Europe' },
  MK: { name: 'North Macedonia', iso3: 'MKD', lat: 41.5, lon: 21.7, region: 'Southern Europe' },
  AL: { name: 'Albania', iso3: 'ALB', lat: 41.2, lon: 20.2, region: 'Southern Europe' },
  XK: { name: 'Kosovo', iso3: 'XKX', lat: 42.6, lon: 21.0, region: 'Southern Europe' },
  MT: { name: 'Malta', iso3: 'MLT', lat: 35.9, lon: 14.4, region: 'Southern Europe' },
  SM: { name: 'San Marino', iso3: 'SMR', lat: 43.9, lon: 12.5, region: 'Southern Europe' },
  VA: { name: 'Vatican City', iso3: 'VAT', lat: 41.9, lon: 12.5, region: 'Southern Europe' },
  GI: { name: 'Gibraltar', iso3: 'GIB', lat: 36.1, lon: -5.4, region: 'Southern Europe' },
  CY: { name: 'Cyprus', iso3: 'CYP', lat: 35.1, lon: 33.4, region: 'Southern Europe' },

  // =========================================================================
  //  EASTERN EUROPE
  // =========================================================================
  RU: { name: 'Russia', iso3: 'RUS', lat: 61.5, lon: 105.3, region: 'Eastern Europe' },
  UA: { name: 'Ukraine', iso3: 'UKR', lat: 48.4, lon: 31.2, region: 'Eastern Europe' },
  PL: { name: 'Poland', iso3: 'POL', lat: 51.9, lon: 19.1, region: 'Eastern Europe' },
  CZ: { name: 'Czechia', iso3: 'CZE', lat: 49.8, lon: 15.5, region: 'Eastern Europe' },
  SK: { name: 'Slovakia', iso3: 'SVK', lat: 48.7, lon: 19.7, region: 'Eastern Europe' },
  HU: { name: 'Hungary', iso3: 'HUN', lat: 47.2, lon: 19.5, region: 'Eastern Europe' },
  RO: { name: 'Romania', iso3: 'ROU', lat: 45.9, lon: 25.0, region: 'Eastern Europe' },
  BG: { name: 'Bulgaria', iso3: 'BGR', lat: 42.7, lon: 25.5, region: 'Eastern Europe' },
  MD: { name: 'Moldova', iso3: 'MDA', lat: 47.4, lon: 28.4, region: 'Eastern Europe' },
  BY: { name: 'Belarus', iso3: 'BLR', lat: 53.7, lon: 27.9, region: 'Eastern Europe' },

  // =========================================================================
  //  WEST ASIA (Middle East & Caucasus)
  // =========================================================================
  TR: { name: 'Turkey', iso3: 'TUR', lat: 38.9, lon: 35.2, region: 'West Asia' },
  IL: { name: 'Israel', iso3: 'ISR', lat: 31.0, lon: 34.9, region: 'West Asia' },
  PS: { name: 'Palestine', iso3: 'PSE', lat: 31.9, lon: 35.2, region: 'West Asia' },
  LB: { name: 'Lebanon', iso3: 'LBN', lat: 33.9, lon: 35.9, region: 'West Asia' },
  SY: { name: 'Syria', iso3: 'SYR', lat: 35.0, lon: 38.5, region: 'West Asia' },
  JO: { name: 'Jordan', iso3: 'JOR', lat: 30.6, lon: 36.2, region: 'West Asia' },
  IQ: { name: 'Iraq', iso3: 'IRQ', lat: 33.2, lon: 43.7, region: 'West Asia' },
  IR: { name: 'Iran', iso3: 'IRN', lat: 32.4, lon: 53.7, region: 'West Asia' },
  SA: { name: 'Saudi Arabia', iso3: 'SAU', lat: 24.0, lon: 45.0, region: 'West Asia' },
  YE: { name: 'Yemen', iso3: 'YEM', lat: 15.6, lon: 48.5, region: 'West Asia' },
  OM: { name: 'Oman', iso3: 'OMN', lat: 21.5, lon: 56.0, region: 'West Asia' },
  AE: { name: 'United Arab Emirates', iso3: 'ARE', lat: 23.4, lon: 53.8, region: 'West Asia' },
  QA: { name: 'Qatar', iso3: 'QAT', lat: 25.4, lon: 51.2, region: 'West Asia' },
  BH: { name: 'Bahrain', iso3: 'BHR', lat: 26.1, lon: 50.6, region: 'West Asia' },
  KW: { name: 'Kuwait', iso3: 'KWT', lat: 29.3, lon: 47.5, region: 'West Asia' },
  GE: { name: 'Georgia', iso3: 'GEO', lat: 42.3, lon: 43.4, region: 'West Asia' },
  AM: { name: 'Armenia', iso3: 'ARM', lat: 40.1, lon: 45.0, region: 'West Asia' },
  AZ: { name: 'Azerbaijan', iso3: 'AZE', lat: 40.1, lon: 47.6, region: 'West Asia' },

  // =========================================================================
  //  CENTRAL ASIA
  // =========================================================================
  KZ: { name: 'Kazakhstan', iso3: 'KAZ', lat: 48.0, lon: 68.0, region: 'Central Asia' },
  UZ: { name: 'Uzbekistan', iso3: 'UZB', lat: 41.4, lon: 64.6, region: 'Central Asia' },
  TM: { name: 'Turkmenistan', iso3: 'TKM', lat: 39.1, lon: 59.6, region: 'Central Asia' },
  KG: { name: 'Kyrgyzstan', iso3: 'KGZ', lat: 41.2, lon: 74.8, region: 'Central Asia' },
  TJ: { name: 'Tajikistan', iso3: 'TJK', lat: 38.9, lon: 71.3, region: 'Central Asia' },
  AF: { name: 'Afghanistan', iso3: 'AFG', lat: 33.9, lon: 67.7, region: 'Central Asia' },
  MN: { name: 'Mongolia', iso3: 'MNG', lat: 46.9, lon: 103.8, region: 'Central Asia' },

  // =========================================================================
  //  SOUTH ASIA
  // =========================================================================
  IN: { name: 'India', iso3: 'IND', lat: 20.6, lon: 79.0, region: 'South Asia' },
  PK: { name: 'Pakistan', iso3: 'PAK', lat: 30.4, lon: 69.3, region: 'South Asia' },
  BD: { name: 'Bangladesh', iso3: 'BGD', lat: 23.7, lon: 90.4, region: 'South Asia' },
  LK: { name: 'Sri Lanka', iso3: 'LKA', lat: 7.9, lon: 80.8, region: 'South Asia' },
  NP: { name: 'Nepal', iso3: 'NPL', lat: 28.4, lon: 84.1, region: 'South Asia' },
  BT: { name: 'Bhutan', iso3: 'BTN', lat: 27.5, lon: 90.4, region: 'South Asia' },
  MV: { name: 'Maldives', iso3: 'MDV', lat: 3.2, lon: 73.2, region: 'South Asia' },

  // =========================================================================
  //  EAST ASIA
  // =========================================================================
  CN: { name: 'China', iso3: 'CHN', lat: 35.9, lon: 104.2, region: 'East Asia' },
  JP: { name: 'Japan', iso3: 'JPN', lat: 36.2, lon: 138.3, region: 'East Asia' },
  KR: { name: 'South Korea', iso3: 'KOR', lat: 35.9, lon: 127.8, region: 'East Asia' },
  KP: { name: 'North Korea', iso3: 'PRK', lat: 40.3, lon: 127.5, region: 'East Asia' },
  TW: { name: 'Taiwan', iso3: 'TWN', lat: 23.7, lon: 121.0, region: 'East Asia' },
  HK: { name: 'Hong Kong', iso3: 'HKG', lat: 22.4, lon: 114.1, region: 'East Asia' },
  MO: { name: 'Macau', iso3: 'MAC', lat: 22.2, lon: 113.5, region: 'East Asia' },

  // =========================================================================
  //  SOUTHEAST ASIA
  // =========================================================================
  ID: { name: 'Indonesia', iso3: 'IDN', lat: -0.8, lon: 113.9, region: 'Southeast Asia' },
  PH: { name: 'Philippines', iso3: 'PHL', lat: 12.9, lon: 121.8, region: 'Southeast Asia' },
  VN: { name: 'Vietnam', iso3: 'VNM', lat: 14.1, lon: 108.3, region: 'Southeast Asia' },
  TH: { name: 'Thailand', iso3: 'THA', lat: 15.9, lon: 101.0, region: 'Southeast Asia' },
  MM: { name: 'Myanmar', iso3: 'MMR', lat: 21.9, lon: 95.9, region: 'Southeast Asia' },
  MY: { name: 'Malaysia', iso3: 'MYS', lat: 4.2, lon: 101.9, region: 'Southeast Asia' },
  SG: { name: 'Singapore', iso3: 'SGP', lat: 1.4, lon: 103.8, region: 'Southeast Asia' },
  KH: { name: 'Cambodia', iso3: 'KHM', lat: 12.6, lon: 105.0, region: 'Southeast Asia' },
  LA: { name: 'Laos', iso3: 'LAO', lat: 19.9, lon: 102.5, region: 'Southeast Asia' },
  BN: { name: 'Brunei', iso3: 'BRN', lat: 4.5, lon: 114.7, region: 'Southeast Asia' },
  TL: { name: 'Timor-Leste', iso3: 'TLS', lat: -8.9, lon: 126.0, region: 'Southeast Asia' },

  // =========================================================================
  //  NORTH AFRICA
  // =========================================================================
  EG: { name: 'Egypt', iso3: 'EGY', lat: 26.8, lon: 30.8, region: 'North Africa' },
  LY: { name: 'Libya', iso3: 'LBY', lat: 26.3, lon: 17.2, region: 'North Africa' },
  TN: { name: 'Tunisia', iso3: 'TUN', lat: 33.9, lon: 9.5, region: 'North Africa' },
  DZ: { name: 'Algeria', iso3: 'DZA', lat: 28.0, lon: 1.7, region: 'North Africa' },
  MA: { name: 'Morocco', iso3: 'MAR', lat: 31.8, lon: -7.1, region: 'North Africa' },
  SD: { name: 'Sudan', iso3: 'SDN', lat: 12.9, lon: 30.2, region: 'North Africa' },
  EH: { name: 'Western Sahara', iso3: 'ESH', lat: 24.2, lon: -12.9, region: 'North Africa' },
  MR: { name: 'Mauritania', iso3: 'MRT', lat: 21.0, lon: -10.9, region: 'North Africa' },

  // =========================================================================
  //  WEST AFRICA
  // =========================================================================
  NG: { name: 'Nigeria', iso3: 'NGA', lat: 9.1, lon: 8.7, region: 'West Africa' },
  GH: { name: 'Ghana', iso3: 'GHA', lat: 7.9, lon: -1.0, region: 'West Africa' },
  CI: { name: "Cote d'Ivoire", iso3: 'CIV', lat: 7.5, lon: -5.5, region: 'West Africa' },
  SN: { name: 'Senegal', iso3: 'SEN', lat: 14.5, lon: -14.5, region: 'West Africa' },
  ML: { name: 'Mali', iso3: 'MLI', lat: 17.6, lon: -4.0, region: 'West Africa' },
  BF: { name: 'Burkina Faso', iso3: 'BFA', lat: 12.3, lon: -1.6, region: 'West Africa' },
  NE: { name: 'Niger', iso3: 'NER', lat: 17.6, lon: 8.1, region: 'West Africa' },
  GN: { name: 'Guinea', iso3: 'GIN', lat: 9.9, lon: -11.4, region: 'West Africa' },
  BJ: { name: 'Benin', iso3: 'BEN', lat: 9.3, lon: 2.3, region: 'West Africa' },
  TG: { name: 'Togo', iso3: 'TGO', lat: 8.6, lon: 0.8, region: 'West Africa' },
  SL: { name: 'Sierra Leone', iso3: 'SLE', lat: 8.5, lon: -11.8, region: 'West Africa' },
  LR: { name: 'Liberia', iso3: 'LBR', lat: 6.4, lon: -9.4, region: 'West Africa' },
  GM: { name: 'Gambia', iso3: 'GMB', lat: 13.4, lon: -15.3, region: 'West Africa' },
  GW: { name: 'Guinea-Bissau', iso3: 'GNB', lat: 12.0, lon: -15.2, region: 'West Africa' },
  CV: { name: 'Cabo Verde', iso3: 'CPV', lat: 16.0, lon: -24.0, region: 'West Africa' },
  SH: { name: 'Saint Helena', iso3: 'SHN', lat: -15.9, lon: -5.7, region: 'West Africa' },

  // =========================================================================
  //  EAST AFRICA
  // =========================================================================
  ET: { name: 'Ethiopia', iso3: 'ETH', lat: 9.1, lon: 40.5, region: 'East Africa' },
  KE: { name: 'Kenya', iso3: 'KEN', lat: -0.0, lon: 37.9, region: 'East Africa' },
  TZ: { name: 'Tanzania', iso3: 'TZA', lat: -6.4, lon: 34.9, region: 'East Africa' },
  UG: { name: 'Uganda', iso3: 'UGA', lat: 1.4, lon: 32.3, region: 'East Africa' },
  RW: { name: 'Rwanda', iso3: 'RWA', lat: -1.9, lon: 29.9, region: 'East Africa' },
  BI: { name: 'Burundi', iso3: 'BDI', lat: -3.4, lon: 29.9, region: 'East Africa' },
  SS: { name: 'South Sudan', iso3: 'SSD', lat: 7.9, lon: 30.0, region: 'East Africa' },
  SO: { name: 'Somalia', iso3: 'SOM', lat: 5.2, lon: 46.2, region: 'East Africa' },
  DJ: { name: 'Djibouti', iso3: 'DJI', lat: 11.8, lon: 42.6, region: 'East Africa' },
  ER: { name: 'Eritrea', iso3: 'ERI', lat: 15.2, lon: 39.8, region: 'East Africa' },
  MG: { name: 'Madagascar', iso3: 'MDG', lat: -18.8, lon: 46.9, region: 'East Africa' },
  MW: { name: 'Malawi', iso3: 'MWI', lat: -13.3, lon: 34.3, region: 'East Africa' },
  MZ: { name: 'Mozambique', iso3: 'MOZ', lat: -18.7, lon: 35.5, region: 'East Africa' },
  ZM: { name: 'Zambia', iso3: 'ZMB', lat: -13.1, lon: 27.8, region: 'East Africa' },
  ZW: { name: 'Zimbabwe', iso3: 'ZWE', lat: -19.0, lon: 29.2, region: 'East Africa' },
  KM: { name: 'Comoros', iso3: 'COM', lat: -11.9, lon: 43.9, region: 'East Africa' },
  MU: { name: 'Mauritius', iso3: 'MUS', lat: -20.3, lon: 57.6, region: 'East Africa' },
  SC: { name: 'Seychelles', iso3: 'SYC', lat: -4.7, lon: 55.5, region: 'East Africa' },
  RE: { name: 'Reunion', iso3: 'REU', lat: -21.1, lon: 55.5, region: 'East Africa' },
  YT: { name: 'Mayotte', iso3: 'MYT', lat: -12.8, lon: 45.2, region: 'East Africa' },

  // =========================================================================
  //  CENTRAL AFRICA
  // =========================================================================
  CD: { name: 'Democratic Republic of the Congo', iso3: 'COD', lat: -4.0, lon: 21.8, region: 'Central Africa' },
  CG: { name: 'Republic of the Congo', iso3: 'COG', lat: -0.2, lon: 15.8, region: 'Central Africa' },
  CM: { name: 'Cameroon', iso3: 'CMR', lat: 7.4, lon: 12.4, region: 'Central Africa' },
  GA: { name: 'Gabon', iso3: 'GAB', lat: -0.8, lon: 11.6, region: 'Central Africa' },
  GQ: { name: 'Equatorial Guinea', iso3: 'GNQ', lat: 1.7, lon: 10.3, region: 'Central Africa' },
  CF: { name: 'Central African Republic', iso3: 'CAF', lat: 6.6, lon: 20.9, region: 'Central Africa' },
  TD: { name: 'Chad', iso3: 'TCD', lat: 15.5, lon: 18.7, region: 'Central Africa' },
  ST: { name: 'Sao Tome and Principe', iso3: 'STP', lat: 0.2, lon: 6.6, region: 'Central Africa' },
  AO: { name: 'Angola', iso3: 'AGO', lat: -11.2, lon: 17.9, region: 'Central Africa' },

  // =========================================================================
  //  SOUTHERN AFRICA
  // =========================================================================
  ZA: { name: 'South Africa', iso3: 'ZAF', lat: -30.6, lon: 22.9, region: 'Southern Africa' },
  NA: { name: 'Namibia', iso3: 'NAM', lat: -22.6, lon: 17.1, region: 'Southern Africa' },
  BW: { name: 'Botswana', iso3: 'BWA', lat: -22.3, lon: 24.7, region: 'Southern Africa' },
  SZ: { name: 'Eswatini', iso3: 'SWZ', lat: -26.5, lon: 31.5, region: 'Southern Africa' },
  LS: { name: 'Lesotho', iso3: 'LSO', lat: -29.6, lon: 28.2, region: 'Southern Africa' },

  // =========================================================================
  //  OCEANIA  (Australia, New Zealand, and broad Pacific)
  // =========================================================================
  AU: { name: 'Australia', iso3: 'AUS', lat: -25.3, lon: 133.8, region: 'Oceania' },
  NZ: { name: 'New Zealand', iso3: 'NZL', lat: -40.9, lon: 174.9, region: 'Oceania' },
  PG: { name: 'Papua New Guinea', iso3: 'PNG', lat: -6.3, lon: 143.9, region: 'Oceania' },
  NF: { name: 'Norfolk Island', iso3: 'NFK', lat: -29.0, lon: 168.0, region: 'Oceania' },
  CX: { name: 'Christmas Island', iso3: 'CXR', lat: -10.5, lon: 105.7, region: 'Oceania' },
  CC: { name: 'Cocos (Keeling) Islands', iso3: 'CCK', lat: -12.2, lon: 96.9, region: 'Oceania' },

  // =========================================================================
  //  MELANESIA
  // =========================================================================
  FJ: { name: 'Fiji', iso3: 'FJI', lat: -17.7, lon: 178.1, region: 'Melanesia' },
  SB: { name: 'Solomon Islands', iso3: 'SLB', lat: -9.6, lon: 160.2, region: 'Melanesia' },
  VU: { name: 'Vanuatu', iso3: 'VUT', lat: -15.4, lon: 166.9, region: 'Melanesia' },
  NC: { name: 'New Caledonia', iso3: 'NCL', lat: -20.9, lon: 165.6, region: 'Melanesia' },

  // =========================================================================
  //  POLYNESIA
  // =========================================================================
  WS: { name: 'Samoa', iso3: 'WSM', lat: -13.8, lon: -172.1, region: 'Polynesia' },
  TO: { name: 'Tonga', iso3: 'TON', lat: -21.2, lon: -175.2, region: 'Polynesia' },
  TV: { name: 'Tuvalu', iso3: 'TUV', lat: -7.1, lon: 177.6, region: 'Polynesia' },
  PF: { name: 'French Polynesia', iso3: 'PYF', lat: -17.7, lon: -149.4, region: 'Polynesia' },
  AS: { name: 'American Samoa', iso3: 'ASM', lat: -14.3, lon: -170.1, region: 'Polynesia' },
  CK: { name: 'Cook Islands', iso3: 'COK', lat: -21.2, lon: -159.8, region: 'Polynesia' },
  NU: { name: 'Niue', iso3: 'NIU', lat: -19.1, lon: -169.9, region: 'Polynesia' },
  TK: { name: 'Tokelau', iso3: 'TKL', lat: -9.2, lon: -171.8, region: 'Polynesia' },
  WF: { name: 'Wallis and Futuna', iso3: 'WLF', lat: -13.8, lon: -177.2, region: 'Polynesia' },
  PN: { name: 'Pitcairn Islands', iso3: 'PCN', lat: -24.4, lon: -128.3, region: 'Polynesia' },

  // =========================================================================
  //  MICRONESIA
  // =========================================================================
  FM: { name: 'Micronesia', iso3: 'FSM', lat: 7.4, lon: 150.6, region: 'Micronesia' },
  MH: { name: 'Marshall Islands', iso3: 'MHL', lat: 7.1, lon: 171.2, region: 'Micronesia' },
  PW: { name: 'Palau', iso3: 'PLW', lat: 7.5, lon: 134.6, region: 'Micronesia' },
  KI: { name: 'Kiribati', iso3: 'KIR', lat: 1.9, lon: -157.5, region: 'Micronesia' },
  NR: { name: 'Nauru', iso3: 'NRU', lat: -0.5, lon: 166.9, region: 'Micronesia' },
  GU: { name: 'Guam', iso3: 'GUM', lat: 13.4, lon: 144.8, region: 'Micronesia' },
  MP: { name: 'Northern Mariana Islands', iso3: 'MNP', lat: 15.1, lon: 145.7, region: 'Micronesia' }
};

// ---------------------------------------------------------------------------
//  CommonJS export — allows `require()` in Node while remaining a plain
//  <script>-loadable global in the browser.
// ---------------------------------------------------------------------------
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COUNTRY_DATA };
}
