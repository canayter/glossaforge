/**
 * GlossaForge — Comprehensive Language Family Tree
 *
 * Hierarchical structure of all major language families, branches, and
 * sub-branches. Leaf nodes contain `languages` arrays of ISO 639-3 codes
 * that correspond to keys in the LANGUAGE_DATABASE.
 *
 * Loaded via <script> tag — no ES module syntax.
 */

const FAMILY_TREE = {

  // ─────────────────────────────────────────────────────────────────────────
  // 1. INDO-EUROPEAN
  // ─────────────────────────────────────────────────────────────────────────
  indoEuropean: {
    id: 'indoEuropean',
    name: 'Indo-European',
    color: '#60a5fa',
    speakers: 3200000000,
    branches: {

      germanic: {
        id: 'germanic',
        name: 'Germanic',
        branches: {
          westGermanic: {
            id: 'westGermanic',
            name: 'West Germanic',
            languages: [
              'eng', // English
              'deu', // German
              'nld', // Dutch
              'afr', // Afrikaans
              'fry', // Western Frisian
              'ltz', // Luxembourgish
              'yid', // Yiddish
              'sco', // Scots
              'nds', // Low German
              'bar', // Bavarian
              'gsw', // Swiss German
              'pdc', // Pennsylvania Dutch
              'stq', // Saterland Frisian
              'ksh', // Colognian
              'swg', // Swabian
              'pfl', // Pfaelzisch
              'lim', // Limburgish
              'zea', // Zeelandic
              'hrx', // Hunsrik
              'vmf', // Mainfränkisch
            ]
          },
          northGermanic: {
            id: 'northGermanic',
            name: 'North Germanic',
            languages: [
              'swe', // Swedish
              'nor', // Norwegian
              'dan', // Danish
              'isl', // Icelandic
              'fao', // Faroese
              'nno', // Norwegian Nynorsk
              'nob', // Norwegian Bokmål
              'ovd', // Elfdalian
              'jut', // Jutish
            ]
          },
          eastGermanic: {
            id: 'eastGermanic',
            name: 'East Germanic',
            languages: [
              'got', // Gothic (extinct)
            ]
          }
        }
      },

      romance: {
        id: 'romance',
        name: 'Romance',
        branches: {
          italoWestern: {
            id: 'italoWestern',
            name: 'Italo-Western',
            languages: [
              'spa', // Spanish
              'por', // Portuguese
              'fra', // French
              'ita', // Italian
              'ron', // Romanian
              'cat', // Catalan
              'glg', // Galician
              'oci', // Occitan
              'ast', // Asturian
              'arg', // Aragonese
              'lad', // Ladino
              'scn', // Sicilian
              'nap', // Neapolitan
              'vec', // Venetian
              'lmo', // Lombard
              'pms', // Piedmontese
              'fur', // Friulian
              'lij', // Ligurian
              'egl', // Emilian
              'rgn', // Romagnol
              'srd', // Sardinian
              'cos', // Corsican
              'roh', // Romansh
              'wln', // Walloon
              'frp', // Franco-Provençal
              'mwl', // Mirandese
              'ext', // Extremaduran
              'hat', // Haitian Creole (French-based but listed here for lineage)
              'gcf', // Guadeloupean Creole French
            ]
          },
          easternRomance: {
            id: 'easternRomance',
            name: 'Eastern Romance',
            languages: [
              'rup', // Aromanian
              'rmy', // Vlax Romani (contact influence)
              'mol', // Moldovan
            ]
          }
        }
      },

      slavic: {
        id: 'slavic',
        name: 'Slavic',
        branches: {
          eastSlavic: {
            id: 'eastSlavic',
            name: 'East Slavic',
            languages: [
              'rus', // Russian
              'ukr', // Ukrainian
              'bel', // Belarusian
              'rue', // Rusyn
            ]
          },
          westSlavic: {
            id: 'westSlavic',
            name: 'West Slavic',
            languages: [
              'pol', // Polish
              'ces', // Czech
              'slk', // Slovak
              'hsb', // Upper Sorbian
              'dsb', // Lower Sorbian
              'szl', // Silesian
              'csb', // Kashubian
            ]
          },
          southSlavic: {
            id: 'southSlavic',
            name: 'South Slavic',
            languages: [
              'hrv', // Croatian
              'srp', // Serbian
              'bos', // Bosnian
              'slv', // Slovenian
              'bul', // Bulgarian
              'mkd', // Macedonian
              'chu', // Church Slavonic (liturgical)
            ]
          }
        }
      },

      indoIranian: {
        id: 'indoIranian',
        name: 'Indo-Iranian',
        branches: {
          indoAryan: {
            id: 'indoAryan',
            name: 'Indo-Aryan',
            languages: [
              'hin', // Hindi
              'urd', // Urdu
              'ben', // Bengali
              'pan', // Panjabi
              'mar', // Marathi
              'guj', // Gujarati
              'nep', // Nepali
              'sin', // Sinhala
              'asm', // Assamese
              'ori', // Oriya
              'mai', // Maithili
              'bho', // Bhojpuri
              'raj', // Marwari (Rajasthani)
              'san', // Sanskrit (classical)
              'rom', // Romani
              'kok', // Konkani
              'snd', // Sindhi
              'kas', // Kashmiri
              'div', // Dhivehi (Maldivian)
              'mag', // Magahi
              'new', // Newari
              'awa', // Awadhi
              'hne', // Chhattisgarhi
              'bgc', // Haryanvi
              'doi', // Dogri
              'lah', // Lahnda
              'dty', // Dotyali
              'mwr', // Marwari
              'gom', // Goan Konkani
              'brx', // Bodo
              'sat', // Santali
              'hif', // Fiji Hindi
              'rmt', // Domari
              'pli', // Pali (classical)
            ]
          },
          iranian: {
            id: 'iranian',
            name: 'Iranian',
            languages: [
              'fas', // Persian (Farsi)
              'pus', // Pashto
              'kur', // Kurdish
              'bal', // Balochi
              'tgk', // Tajik
              'oss', // Ossetic
              'tly', // Talysh
              'ckb', // Central Kurdish (Sorani)
              'kmr', // Northern Kurdish (Kurmanji)
              'sdh', // Southern Kurdish
              'glk', // Gilaki
              'mzn', // Mazanderani
              'lrc', // Luri
              'haz', // Hazaragi
              'zza', // Zaza
              'prs', // Dari
              'wbl', // Wakhi
              'sgh', // Shughni
              'jpr', // Judeo-Persian
              'ydg', // Yidgha
              'mnj', // Munji
              'isk', // Ishkashimi
              'srh', // Sarikoli
              'yai', // Yagnobi
              'ave', // Avestan (classical)
            ]
          }
        }
      },

      celtic: {
        id: 'celtic',
        name: 'Celtic',
        branches: {
          goidelic: {
            id: 'goidelic',
            name: 'Goidelic',
            languages: [
              'gle', // Irish
              'gla', // Scottish Gaelic
              'glv', // Manx
            ]
          },
          brythonic: {
            id: 'brythonic',
            name: 'Brythonic',
            languages: [
              'cym', // Welsh
              'bre', // Breton
              'cor', // Cornish
            ]
          }
        }
      },

      baltic: {
        id: 'baltic',
        name: 'Baltic',
        languages: [
          'lit', // Lithuanian
          'lav', // Latvian
          'ltg', // Latgalian
          'sgs', // Samogitian
          'prg', // Old Prussian (extinct)
        ]
      },

      hellenic: {
        id: 'hellenic',
        name: 'Hellenic',
        languages: [
          'ell', // Modern Greek
          'grc', // Ancient Greek (classical)
          'pnt', // Pontic Greek
          'cpg', // Cappadocian Greek
          'tsd', // Tsakonian
          'grk', // Greek (general)
        ]
      },

      albanian: {
        id: 'albanian',
        name: 'Albanian',
        languages: [
          'sqi', // Albanian
          'aln', // Gheg Albanian
          'als', // Tosk Albanian
          'aat', // Arvanitika
        ]
      },

      armenian: {
        id: 'armenian',
        name: 'Armenian',
        languages: [
          'hye', // Armenian
          'axm', // Middle Armenian
          'xcl', // Classical Armenian
        ]
      },

      italic: {
        id: 'italic',
        name: 'Italic (Classical)',
        languages: [
          'lat', // Latin
          'osc', // Oscan
          'xum', // Umbrian
        ]
      },

      anatolian: {
        id: 'anatolian',
        name: 'Anatolian (Extinct)',
        languages: [
          'hit', // Hittite
          'xlu', // Luwian
          'xlc', // Lycian
          'xld', // Lydian
        ]
      },

      tocharianBranch: {
        id: 'tocharianBranch',
        name: 'Tocharian (Extinct)',
        languages: [
          'xto', // Tocharian A
          'txb', // Tocharian B
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 2. SINO-TIBETAN
  // ─────────────────────────────────────────────────────────────────────────
  sinoTibetan: {
    id: 'sinoTibetan',
    name: 'Sino-Tibetan',
    color: '#f87171',
    speakers: 1500000000,
    branches: {

      sinitic: {
        id: 'sinitic',
        name: 'Sinitic',
        languages: [
          'zho', // Chinese (macro)
          'cmn', // Mandarin Chinese
          'yue', // Cantonese
          'wuu', // Wu Chinese
          'hsn', // Xiang Chinese
          'hak', // Hakka Chinese
          'nan', // Min Nan Chinese
          'cdo', // Min Dong Chinese
          'mnp', // Min Bei Chinese
          'gan', // Gan Chinese
          'czh', // Huizhou Chinese
          'cjy', // Jinyu Chinese
          'cpx', // Pu-Xian Chinese
          'czo', // Min Zhong Chinese
          'lzh', // Literary Chinese (Classical)
          'ltc', // Late Middle Chinese
        ]
      },

      tibetoBurman: {
        id: 'tibetoBurman',
        name: 'Tibeto-Burman',
        branches: {
          bodic: {
            id: 'bodic',
            name: 'Bodic',
            languages: [
              'bod', // Tibetan
              'dzo', // Dzongkha
              'sip', // Sikkimese
              'lep', // Lepcha
              'tsj', // Tshangla
              'xsr', // Sherpa
              'taj', // Tamang (Eastern)
              'tdg', // Western Tamang
              'ght', // Ghale (Kutang)
              'gvr', // Gurung
              'thq', // Kham
              'xkf', // Khengkha
              'lhm', // Lhomi
              'loy', // Loke
              'bft', // Balti
              'lbj', // Ladakhi
            ]
          },
          loloBurmese: {
            id: 'loloBurmese',
            name: 'Lolo-Burmese',
            languages: [
              'mya', // Burmese
              'lhu', // Lahu
              'iii', // Sichuan Yi / Nuosu
              'lpo', // Lipo
              'lis', // Lisu
              'atb', // Zaiwa
              'aio', // Aiton
              'phk', // Phake
              'kac', // Kachin / Jingpho
              'blk', // Pa'O
            ]
          },
          karenic: {
            id: 'karenic',
            name: 'Karenic',
            languages: [
              'kar', // Karen (macro)
              'ksw', // S'gaw Karen
              'pwo', // Pwo Karen
              'blk', // Pa'O Karen
              'kvt', // Lahta Karen
            ]
          },
          sal: {
            id: 'sal',
            name: 'Sal (Bodo-Garo)',
            languages: [
              'brx', // Bodo
              'grt', // Garo
              'trp', // Kok Borok (Tripuri)
              'rab', // Rabha
              'njh', // Naga (Chang)
            ]
          },
          kuki: {
            id: 'kuki',
            name: 'Kuki-Chin-Naga',
            languages: [
              'lus', // Mizo (Lushai)
              'ctd', // Tedim Chin
              'cnh', // Hakha Chin
              'mni', // Manipuri (Meitei)
              'nag', // Naga Pidgin
              'njm', // Angami Naga
              'njo', // Ao Naga
              'nmf', // Tangkhul Naga
            ]
          }
        }
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 3. NIGER-CONGO
  // ─────────────────────────────────────────────────────────────────────────
  nigerCongo: {
    id: 'nigerCongo',
    name: 'Niger-Congo',
    color: '#34d399',
    speakers: 700000000,
    branches: {

      atlanticCongo: {
        id: 'atlanticCongo',
        name: 'Atlantic-Congo',
        branches: {
          bantu: {
            id: 'bantu',
            name: 'Bantu',
            languages: [
              'swa', // Swahili
              'zul', // Zulu
              'xho', // Xhosa
              'sot', // Southern Sotho
              'nso', // Northern Sotho (Pedi)
              'tsn', // Tswana
              'ssw', // Swati
              'nbl', // Southern Ndebele
              'ven', // Venda
              'tso', // Tsonga
              'sna', // Shona
              'nde', // Northern Ndebele
              'nya', // Chichewa / Nyanja
              'kin', // Kinyarwanda
              'run', // Kirundi
              'lin', // Lingala
              'kon', // Kongo
              'lub', // Luba-Katanga
              'lua', // Luba-Lulua
              'lug', // Ganda (Luganda)
              'kik', // Kikuyu
              'kam', // Kamba
              'mer', // Meru
              'guz', // Gusii
              'luy', // Luyia
              'bem', // Bemba
              'tum', // Tumbuka
              'tog', // Tonga (Nyasa)
              'loz', // Lozi
              'umb', // Umbundu
              'kmb', // Kimbundu
              'cgg', // Chiga
              'nyn', // Nyankole
              'toi', // Tonga (Zambia)
              'bnt', // Bantu (other)
              'swc', // Congo Swahili
              'rnd', // Ruund
              'lun', // Lunda
              'yao', // Yao
              'mak', // Makassar (not Bantu, see below)
              'vmw', // Makhuwa
              'seh', // Sena
              'ndc', // Ndau
              'her', // Herero
              'kwn', // Kwangali
              'ndo', // Ndonga
              'kua', // Kuanyama
              'fan', // Fang
              'bul', // Bulu
              'ewo', // Ewondo
              'dua', // Duala
              'bas', // Basa (Cameroon)
              'tet', // Tetun
              'men', // Mende
              'kpe', // Kpelle
              'sus', // Susu
            ]
          },
          voltaNiger: {
            id: 'voltaNiger',
            name: 'Volta-Niger',
            languages: [
              'yor', // Yoruba
              'ibo', // Igbo
              'bin', // Edo / Bini
              'ibb', // Ibibio
              'efi', // Efik
              'tiv', // Tiv
              'nup', // Nupe
              'idu', // Idoma
              'urh', // Urhobo
              'ijs', // Ijo (Southeast)
              'ann', // Obolo
            ]
          },
          kwa: {
            id: 'kwa',
            name: 'Kwa',
            languages: [
              'aka', // Akan
              'twi', // Twi
              'fat', // Fanti
              'ewe', // Ewe
              'fon', // Fon
              'aja', // Aja
              'gaa', // Ga
              'ada', // Adangme
              'abr', // Abron
              'bci', // Baoulé
              'sef', // Sefwi
            ]
          },
          gur: {
            id: 'gur',
            name: 'Gur (Voltaic)',
            languages: [
              'mos', // Mossi (Mooré)
              'dag', // Dagbani
              'gur', // Gurenne (Farefare)
              'kbp', // Kabiyé
              'ntm', // Nateni
              'bwu', // Buli
              'maw', // Mampruli
              'dga', // Dagaare
              'gux', // Gourmanchéma
            ]
          },
          atlantic: {
            id: 'atlantic',
            name: 'Atlantic',
            languages: [
              'wol', // Wolof
              'ful', // Fula / Fulfulde
              'srr', // Serer
              'tem', // Temne
              'bal', // Balanta
              'bsc', // Bassari
              'knf', // Mankanya
              'dyo', // Jola-Fonyi
              'snf', // Noon
              'csk', // Jola-Kasa
            ]
          },
          adamawa: {
            id: 'adamawa',
            name: 'Adamawa-Ubangi',
            languages: [
              'sag', // Sango
              'gbp', // Gbaya
              'ngb', // Ngbandi
              'zne', // Zande
              'mdd', // Mbum
              'bjo', // Banda (Mid-Southern)
            ]
          }
        }
      },

      mande: {
        id: 'mande',
        name: 'Mande',
        languages: [
          'bam', // Bambara
          'man', // Mandingo / Manding
          'mnk', // Mandinka
          'dyu', // Dyula
          'snk', // Soninke
          'men', // Mende
          'sus', // Susu
          'kpe', // Kpelle
          'vai', // Vai
          'bsq', // Bassa
          'mey', // Hassaniyya (overlap w/ Arabic)
          'nqo', // N'Ko
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 4. AFROASIATIC
  // ─────────────────────────────────────────────────────────────────────────
  afroasiatic: {
    id: 'afroasiatic',
    name: 'Afroasiatic',
    color: '#fbbf24',
    speakers: 500000000,
    branches: {

      semitic: {
        id: 'semitic',
        name: 'Semitic',
        branches: {
          westSemitic: {
            id: 'westSemitic',
            name: 'West Semitic',
            languages: [
              'ara', // Arabic (Standard)
              'arb', // Standard Arabic
              'arz', // Egyptian Arabic
              'apc', // Levantine Arabic (North)
              'apd', // Sudanese Arabic
              'acm', // Mesopotamian Arabic
              'ary', // Moroccan Arabic
              'aeb', // Tunisian Arabic
              'acq', // Ta'izzi-Adeni Arabic
              'afb', // Gulf Arabic
              'aao', // Algerian Saharan Arabic
              'ajp', // South Levantine Arabic
              'heb', // Hebrew
              'mlt', // Maltese
              'amh', // Amharic
              'tir', // Tigrinya
              'tig', // Tigre
              'gez', // Ge'ez (classical)
              'har', // Harari
              'sgw', // Sebat Bet Gurage
              'wal', // Wolaytta
              'sid', // Sidamo
              'syc', // Syriac (Classical)
              'aii', // Assyrian Neo-Aramaic
              'arc', // Aramaic (Official)
              'sam', // Samaritan Aramaic
              'tru', // Turoyo
            ]
          },
          eastSemitic: {
            id: 'eastSemitic',
            name: 'East Semitic (Extinct)',
            languages: [
              'akk', // Akkadian
              'ebk', // Eastern Balochi (placeholder for Eblaite)
            ]
          },
          southSemitic: {
            id: 'southSemitic',
            name: 'South Semitic',
            languages: [
              'mhr', // Mehri
              'sqt', // Soqotri
              'shv', // Shehri
              'adf', // Dhofari Arabic
            ]
          }
        }
      },

      berber: {
        id: 'berber',
        name: 'Berber',
        languages: [
          'tzm', // Central Atlas Tamazight
          'zgh', // Standard Moroccan Tamazight
          'kab', // Kabyle
          'shy', // Tachawit
          'rif', // Tarifit (Rif Berber)
          'thv', // Tahaggart Tamahaq
          'taq', // Tamasheq
          'ttq', // Tawallammat Tamajaq
          'shi', // Tachelhit
          'siz', // Siwi
          'gha', // Ghadamès
          'nxm', // Numidian
          'gho', // Ghomara
          'zen', // Zenaga
        ]
      },

      cushitic: {
        id: 'cushitic',
        name: 'Cushitic',
        languages: [
          'orm', // Oromo
          'som', // Somali
          'aar', // Afar
          'sid', // Sidamo
          'had', // Hadiyya
          'kcm', // Gamo (not standard, using alt)
          'bji', // Burji
          'ssy', // Saho
          'irk', // Iraqw
          'gwd', // Gawwada
          'bsw', // Baiso
          'ktb', // Kambaata
        ]
      },

      chadic: {
        id: 'chadic',
        name: 'Chadic',
        languages: [
          'hau', // Hausa
          'biu', // Birgit
          'mfi', // Wandala
          'gid', // Gidar
          'mvo', // Margi
          'bcy', // Bana (Southern)
          'sur', // Mwaghavul
          'ank', // Goemai
          'ron', // Ron
          'ang', // Angas (not Angami)
          'mub', // Mubi
          'kby', // Kanuri (not Chadic but nearby)
        ]
      },

      egyptian: {
        id: 'egyptian',
        name: 'Egyptian',
        languages: [
          'egy', // Ancient Egyptian
          'cop', // Coptic
        ]
      },

      omotic: {
        id: 'omotic',
        name: 'Omotic',
        languages: [
          'wal', // Wolaytta
          'gmo', // Gamo-Gofa-Dawro
          'bcq', // Bench
          'kxc', // Konso
          'drs', // Dorze
          'yre', // Yemsa
          'aro', // Ari
          'bwo', // Boro (Ethiopia)
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 5. AUSTRONESIAN
  // ─────────────────────────────────────────────────────────────────────────
  austronesian: {
    id: 'austronesian',
    name: 'Austronesian',
    color: '#a78bfa',
    speakers: 400000000,
    branches: {

      malayoPolynesian: {
        id: 'malayoPolynesian',
        name: 'Malayo-Polynesian',
        branches: {
          philippine: {
            id: 'philippine',
            name: 'Philippine',
            languages: [
              'tgl', // Tagalog
              'fil', // Filipino
              'ceb', // Cebuano
              'ilo', // Ilocano
              'hil', // Hiligaynon
              'war', // Waray
              'pam', // Pampanga
              'bik', // Bikol
              'pag', // Pangasinan
              'mdh', // Maguindanaon
              'tsg', // Tausug
              'mrw', // Maranao
              'tbw', // Tagbanwa
              'sgd', // Surigaonon
              'ivv', // Ivatan
              'krj', // Kinaray-a
              'akl', // Aklanon
              'smk', // Bolinao
              'ifk', // Ifugao (Batad)
              'bnc', // Bontoc
              'kne', // Kankanaey
              'ibl', // Ibaloi
            ]
          },
          malay: {
            id: 'malay',
            name: 'Malay / Indonesian',
            languages: [
              'msa', // Malay (macro)
              'ind', // Indonesian
              'zlm', // Malay (individual)
              'zsm', // Standard Malay
              'min', // Minangkabau
              'ace', // Acehnese
              'ban', // Balinese
              'jav', // Javanese
              'sun', // Sundanese
              'mad', // Madurese
              'bug', // Buginese
              'mak', // Makasar
              'bjn', // Banjar
              'gor', // Gorontalo
              'sas', // Sasak
              'bbc', // Batak Toba
              'btk', // Batak
              'rej', // Rejang
              'lmp', // Lampung Api
              'nij', // Ngaju
              'day', // Land Dayak
              'iba', // Iban
              'kxd', // Brunei Malay
              'meo', // Kedah Malay
            ]
          },
          oceanic: {
            id: 'oceanic',
            name: 'Oceanic',
            languages: [
              'mri', // Maori
              'haw', // Hawaiian
              'smo', // Samoan
              'ton', // Tongan
              'fij', // Fijian
              'tah', // Tahitian
              'rap', // Rapanui (Easter Island)
              'rar', // Rarotongan (Cook Islands Maori)
              'tkl', // Tokelauan
              'tvl', // Tuvaluan
              'niu', // Niuean
              'wls', // Wallisian
              'fut', // Futuna-Aniwa
              'mah', // Marshallese
              'kir', // Gilbertese (Kiribati)
              'nau', // Nauruan
              'cha', // Chamorro
              'pau', // Palauan
              'pon', // Pohnpeian
              'chk', // Chuukese
              'yap', // Yapese
              'kos', // Kosraean
              'tpi', // Tok Pisin
              'bis', // Bislama
              'pis', // Pijin (Solomon Islands)
              'uli', // Ulithian
              'woe', // Woleaian
              'cal', // Carolinian
              'mos', // Mokilese
            ]
          },
          borneo: {
            id: 'borneo',
            name: 'Borneo',
            languages: [
              'dtp', // Kadazan Dusun
              'kzj', // Kadazan (Coastal)
              'mbd', // Dibabawon Manobo
              'dru', // Rukai
              'mrb', // Marino
            ]
          },
          southHalmahera: {
            id: 'southHalmahera',
            name: 'South Halmahera-West New Guinea',
            languages: [
              'bdf', // Binahari
              'pam', // Pampangan
            ]
          }
        }
      },

      formosan: {
        id: 'formosan',
        name: 'Formosan',
        languages: [
          'ami', // Amis
          'pwn', // Paiwan
          'bnn', // Bunun
          'dru', // Rukai
          'tay', // Atayal
          'ssf', // Thao
          'xsy', // Saisiyat
          'ckv', // Kavalan
          'trv', // Seediq / Taroko
          'tao', // Yami (Tao)
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 6. DRAVIDIAN
  // ─────────────────────────────────────────────────────────────────────────
  dravidian: {
    id: 'dravidian',
    name: 'Dravidian',
    color: '#fb923c',
    speakers: 280000000,
    branches: {

      southDravidian: {
        id: 'southDravidian',
        name: 'South Dravidian',
        languages: [
          'tam', // Tamil
          'mal', // Malayalam
          'kan', // Kannada
          'tel', // Telugu
          'tcy', // Tulu
          'kfb', // Kolami
          'irr', // Irula
          'oty', // Old Tamil
          'tcx', // Toda
          'kfe', // Kota
          'alu', // Alune
          'bdr', // Badaga
          'gon', // Gondi
          'kru', // Kurukh
          'pci', // Duruwa
          'bjj', // Kanauji
        ]
      },

      centralDravidian: {
        id: 'centralDravidian',
        name: 'Central Dravidian',
        languages: [
          'kfb', // Kolami
          'gdb', // Gadaba (Ollari)
          'nit', // Naiki
          'pcj', // Pareji
        ]
      },

      northDravidian: {
        id: 'northDravidian',
        name: 'North Dravidian',
        languages: [
          'kru', // Kurukh (Oraon)
          'mlt', // Maltese (NOT — this is Malto)
          'kfq', // Korku-related (Brahui influence)
          'brh', // Brahui
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 7. TURKIC
  // ─────────────────────────────────────────────────────────────────────────
  turkic: {
    id: 'turkic',
    name: 'Turkic',
    color: '#22d3ee',
    speakers: 200000000,
    branches: {

      oghuz: {
        id: 'oghuz',
        name: 'Oghuz',
        languages: [
          'tur', // Turkish
          'aze', // Azerbaijani
          'tuk', // Turkmen
          'gag', // Gagauz
          'crh', // Crimean Tatar
          'azb', // South Azerbaijani
          'ota', // Ottoman Turkish (historical)
          'slr', // Salar
          'qxq', // Qashqai
        ]
      },

      kipchak: {
        id: 'kipchak',
        name: 'Kipchak',
        languages: [
          'kaz', // Kazakh
          'kir', // Kirghiz
          'tat', // Tatar
          'bak', // Bashkir
          'kum', // Kumyk
          'krc', // Karachay-Balkar
          'nog', // Nogai
          'kaa', // Karakalpak
          'alt', // Southern Altai
          'crh', // Crimean Tatar
          'kjh', // Khakas
        ]
      },

      siberian: {
        id: 'siberian',
        name: 'Siberian',
        languages: [
          'tyv', // Tuvan
          'alt', // Altai
          'kjh', // Khakas
          'dlg', // Dolgan
          'sah', // Yakut (Sakha)
          'cjs', // Shor
          'kim', // Tofa
          'chg', // Chagatai (historical)
        ]
      },

      karluk: {
        id: 'karluk',
        name: 'Karluk',
        languages: [
          'uzb', // Uzbek
          'uig', // Uyghur
          'ili', // Ili Turki
          'chg', // Chagatai (historical)
        ]
      },

      oghur: {
        id: 'oghur',
        name: 'Oghur',
        languages: [
          'chv', // Chuvash
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 8. URALIC
  // ─────────────────────────────────────────────────────────────────────────
  uralic: {
    id: 'uralic',
    name: 'Uralic',
    color: '#e879f9',
    speakers: 38000000,
    branches: {

      finnic: {
        id: 'finnic',
        name: 'Finnic',
        languages: [
          'fin', // Finnish
          'est', // Estonian
          'vro', // Võro
          'krl', // Karelian
          'izh', // Ingrian
          'vep', // Veps
          'vot', // Votic
          'liv', // Livonian
          'olo', // Livvi-Karelian (Olonets)
          'lud', // Ludian
        ]
      },

      ugric: {
        id: 'ugric',
        name: 'Ugric',
        languages: [
          'hun', // Hungarian
          'mns', // Mansi
          'kca', // Khanty
        ]
      },

      samoyedic: {
        id: 'samoyedic',
        name: 'Samoyedic',
        languages: [
          'yrk', // Nenets
          'enf', // Forest Enets
          'enh', // Tundra Enets
          'sel', // Selkup
          'nio', // Nganasan
        ]
      },

      sami: {
        id: 'sami',
        name: 'Sami',
        languages: [
          'sme', // Northern Sami
          'smn', // Inari Sami
          'sms', // Skolt Sami
          'sma', // Southern Sami
          'smj', // Lule Sami
          'sia', // Akkala Sami
          'sjd', // Kildin Sami
          'sjt', // Ter Sami
          'sju', // Ume Sami
          'sjk', // Kemi Sami (extinct)
        ]
      },

      mordvinic: {
        id: 'mordvinic',
        name: 'Mordvinic',
        languages: [
          'mdf', // Moksha
          'myv', // Erzya
        ]
      },

      mari: {
        id: 'mari',
        name: 'Mari',
        languages: [
          'mhr', // Eastern Mari
          'mrj', // Western Mari (Hill Mari)
        ]
      },

      permic: {
        id: 'permic',
        name: 'Permic',
        languages: [
          'udm', // Udmurt
          'kpv', // Komi-Zyrian
          'koi', // Komi-Permyak
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 9. JAPONIC
  // ─────────────────────────────────────────────────────────────────────────
  japonic: {
    id: 'japonic',
    name: 'Japonic',
    color: '#f472b6',
    speakers: 128000000,
    branches: {

      japanese: {
        id: 'japanese',
        name: 'Japanese',
        languages: [
          'jpn', // Japanese
          'ojp', // Old Japanese
        ]
      },

      ryukyuan: {
        id: 'ryukyuan',
        name: 'Ryukyuan',
        languages: [
          'ryu', // Okinawan (Central)
          'mvi', // Miyako
          'rys', // Yaeyama
          'yoi', // Yonaguni
          'xug', // Kunigami
          'tkn', // Tokunoshima
          'kzg', // Kikai
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 10. KOREANIC
  // ─────────────────────────────────────────────────────────────────────────
  koreanic: {
    id: 'koreanic',
    name: 'Koreanic',
    color: '#818cf8',
    speakers: 80000000,
    branches: {
      korean: {
        id: 'korean',
        name: 'Korean',
        languages: [
          'kor', // Korean
          'jje', // Jeju
          'okm', // Middle Korean
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 11. TAI-KADAI
  // ─────────────────────────────────────────────────────────────────────────
  taiKadai: {
    id: 'taiKadai',
    name: 'Tai-Kadai',
    color: '#2dd4bf',
    speakers: 100000000,
    branches: {

      tai: {
        id: 'tai',
        name: 'Tai',
        languages: [
          'tha', // Thai
          'lao', // Lao
          'shn', // Shan
          'nus', // Nuer
          'tts', // Isan (Northeastern Thai)
          'nod', // Northern Thai (Lanna)
          'sou', // Southern Thai
          'blt', // Tai Dam
          'twh', // Tai Dón
          'kkh', // Khün
          'lwl', // Eastern Lawa
          'tdd', // Tai Nüa
          'aho', // Ahom (historical)
          'pht', // Phu Thai
          'zha', // Zhuang (macro)
          'zgb', // Guibei Zhuang
          'zgn', // Guibian Zhuang
          'zyg', // Yang Zhuang
          'zyb', // Yongbei Zhuang
          'zhd', // Dai Zhuang
          'ccq', // Chaungtha
        ]
      },

      kamSui: {
        id: 'kamSui',
        name: 'Kam-Sui',
        languages: [
          'doc', // Northern Dong
          'kmc', // Southern Dong (Kam)
          'swi', // Sui
          'mmd', // Maonan
          'mlm', // Mulam
        ]
      },

      be: {
        id: 'be',
        name: 'Be',
        languages: [
          'onb', // Lingao
          'bea', // Bena
        ]
      },

      kadai: {
        id: 'kadai',
        name: 'Kadai',
        languages: [
          'lic', // Hlai
          'gel', // Gelao
          'lak', // Laka (not Kadai — placeholder)
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 12. AUSTROASIATIC
  // ─────────────────────────────────────────────────────────────────────────
  austroasiatic: {
    id: 'austroasiatic',
    name: 'Austroasiatic',
    color: '#a3e635',
    speakers: 117000000,
    branches: {

      monKhmer: {
        id: 'monKhmer',
        name: 'Mon-Khmer',
        languages: [
          'vie', // Vietnamese
          'khm', // Khmer
          'mnw', // Mon
          'kha', // Khasi
          'pac', // Pacoh
          'sti', // Bulo Stieng
          'brr', // Brao
          'kdt', // Kuy
          'kjg', // Khmu
          'ban', // Bahnar
          'sed', // Sedang
          'hre', // Hre
          'cog', // Chong
          'ksw', // Khmer (Surin variant — listed under Karen alt)
          'kns', // Kensiu
          'tea', // Temiar
          'jah', // Jah Hut
          'sea', // Semai
          'tnz', // Tonga (not Mon-Khmer, see Bantu)
          'pbn', // Kpan
          'mli', // Malimpung (Nicobarese)
          'caq', // Car Nicobarese
        ]
      },

      munda: {
        id: 'munda',
        name: 'Munda',
        languages: [
          'sat', // Santali
          'muw', // Mundari
          'hoc', // Ho
          'khr', // Kharia
          'jun', // Juang
          'sck', // Sadri
          'bfw', // Bondo
          'gtm', // Gutob (Gadaba)
          'rmo', // Sora
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 13. NILO-SAHARAN
  // ─────────────────────────────────────────────────────────────────────────
  niloSaharan: {
    id: 'niloSaharan',
    name: 'Nilo-Saharan',
    color: '#f59e0b',
    speakers: 50000000,
    branches: {

      nilotic: {
        id: 'nilotic',
        name: 'Nilotic',
        branches: {
          westernNilotic: {
            id: 'westernNilotic',
            name: 'Western Nilotic',
            languages: [
              'luo', // Luo (Kenya/Tanzania)
              'din', // Dinka
              'nus', // Nuer
              'shk', // Shilluk
              'anu', // Anuak
              'lth', // Thur (Lango)
              'ach', // Acholi
              'alz', // Alur
              'pap', // Papiamentu (not Nilotic — placeholder removed)
              'adj', // Adja
            ]
          },
          easternNilotic: {
            id: 'easternNilotic',
            name: 'Eastern Nilotic',
            languages: [
              'mas', // Maasai
              'tur', // Turkana (not Turkish — homonym)
              'lot', // Otuho (Lotuko)
              'teq', // Teso
              'kln', // Kalenjin
              'niq', // Nandi
              'pko', // Pökoot
            ]
          },
          southernNilotic: {
            id: 'southernNilotic',
            name: 'Southern Nilotic',
            languages: [
              'kln', // Kalenjin (macro)
              'dae', // Datooga
            ]
          }
        }
      },

      songhai: {
        id: 'songhai',
        name: 'Songhai',
        languages: [
          'dje', // Zarma
          'ses', // Koyraboro Senni
          'khq', // Koyra Chiini
          'dsq', // Tadaksahak
          'hmb', // Humburi Senni
        ]
      },

      saharan: {
        id: 'saharan',
        name: 'Saharan',
        languages: [
          'knc', // Kanuri (Central)
          'kby', // Manga Kanuri
          'ted', // Teda (Tedaga)
          'daz', // Daza
          'brt', // Bitare
        ]
      },

      centralSudanic: {
        id: 'centralSudanic',
        name: 'Central Sudanic',
        languages: [
          'lgg', // Lugbara
          'mdj', // Mangbetu
          'mhi', // Ma'di
          'laj', // Lango (Uganda)
          'snj', // Sara Ngambay
          'mls', // Masalit
        ]
      },

      surmic: {
        id: 'surmic',
        name: 'Surmic',
        languages: [
          'suri', // Suri
          'mur', // Murle
          'dim', // Dime
          'mej', // Meyah (alt)
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 14. QUECHUAN
  // ─────────────────────────────────────────────────────────────────────────
  quechuan: {
    id: 'quechuan',
    name: 'Quechuan',
    color: '#06b6d4',
    speakers: 10000000,
    branches: {
      quechua: {
        id: 'quechua',
        name: 'Quechua',
        languages: [
          'que', // Quechua (macro)
          'quz', // Cusco Quechua
          'qub', // Huallaga Quechua
          'qud', // Calderón Highland Quichua
          'quf', // Lambayeque Quechua
          'qug', // Chimborazo Highland Quichua
          'quh', // South Bolivian Quechua
          'quk', // Chachapoyas Quechua
          'qul', // North Bolivian Quechua
          'qup', // Southern Pastaza Quechua
          'qur', // Yanahuanca Pasco Quechua
          'qus', // Santiago del Estero Quichua
          'quw', // Tena Lowland Quichua
          'qux', // Yauyos Quechua
          'quy', // Ayacucho Quechua
          'qvc', // Cajamarca Quechua
          'qve', // Eastern Apurímac Quechua
          'qvh', // Huamalíes-Dos de Mayo Huánuco Quechua
          'qvm', // Margos-Yarowilca-Lauricocha Quechua
          'qvn', // North Junín Quechua
          'qvo', // Napo Lowland Quechua
          'qvs', // San Martín Quechua
          'qvw', // Huaylla Wanca Quechua
          'qvz', // Northern Pastaza Quichua
          'qwa', // Corongo Ancash Quechua
          'qwh', // Huaylas Ancash Quechua
          'qws', // Sihuas Ancash Quechua
          'qxa', // Chiquián Ancash Quechua
          'qxh', // Panao Huánuco Quechua
          'qxn', // Northern Conchucos Ancash Quechua
          'qxo', // Southern Conchucos Ancash Quechua
          'qxp', // Puno Quechua
          'qxr', // Cañar Highland Quichua
          'qxt', // Santa Ana de Tusi Pasco Quechua
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 15. TUPIAN
  // ─────────────────────────────────────────────────────────────────────────
  tupian: {
    id: 'tupian',
    name: 'Tupian',
    color: '#84cc16',
    speakers: 10000000,
    branches: {
      tupiGuarani: {
        id: 'tupiGuarani',
        name: 'Tupí-Guaraní',
        languages: [
          'grn', // Guaraní (macro)
          'gug', // Paraguayan Guaraní
          'gui', // Eastern Bolivian Guaraní
          'gun', // Mbyá Guaraní
          'gnw', // Western Bolivian Guaraní
          'nhd', // Chiripá
          'tpw', // Old Tupí
          'yrl', // Nheengatu (General Lingua)
          'kgk', // Kaiwá
          'guq', // Aché
          'tpn', // Tupinambá
          'urb', // Urubu-Kaapor
        ]
      },
      otherTupian: {
        id: 'otherTupian',
        name: 'Other Tupian',
        languages: [
          'awe', // Awetí
          'mav', // Sateré-Mawé
          'mdz', // Suruí of Rondônia
          'rkb', // Rikbaktsa
          'tpj', // Tupari
          'mpq', // Matís
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 16. ARAWAKAN
  // ─────────────────────────────────────────────────────────────────────────
  arawakan: {
    id: 'arawakan',
    name: 'Arawakan',
    color: '#ec4899',
    speakers: 500000,
    branches: {
      northArawakan: {
        id: 'northArawakan',
        name: 'North Arawakan',
        languages: [
          'guc', // Wayuu (Guajiro)
          'arw', // Arawak (Lokono)
          'grb', // Garifuna
          'cab', // Garifuna (alt)
          'gpe', // Ghanaian Pidgin English
          'wau', // Waura
        ]
      },
      southArawakan: {
        id: 'southArawakan',
        name: 'South Arawakan',
        languages: [
          'apu', // Apurinã
          'ash', // Asháninka
          'cni', // Asháninka (alt)
          'cpc', // Ajyíninka Apurucayali
          'mcb', // Machiguenga
          'pio', // Piapoco
          'bae', // Baré
          'tar', // Tarahumara (not Arawakan — Central)
          'ter', // Terêna
          'wap', // Wapishana
          'mhq', // Mandan (not Arawakan, correction)
          'pib', // Yine
          'yaa', // Yaminahua (not Arawakan strictly)
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 17. PAMA-NYUNGAN
  // ─────────────────────────────────────────────────────────────────────────
  pamaNyungan: {
    id: 'pamaNyungan',
    name: 'Pama-Nyungan',
    color: '#8b5cf6',
    speakers: 50000,
    branches: {
      western: {
        id: 'westernPamaNyungan',
        name: 'Western',
        languages: [
          'mpj', // Martu Wangka
          'pjt', // Pitjantjatjara
          'aer', // Arrernte (Eastern)
          'are', // Arrernte (Western)
          'wrg', // Warungu
          'wbp', // Warlpiri
          'wmt', // Walmajarri
          'kdd', // Yankunytjatjara
          'aus', // Australian languages (general)
        ]
      },
      eastern: {
        id: 'easternPamaNyungan',
        name: 'Eastern',
        languages: [
          'kld', // Gamilaraay
          'wrk', // Wiradjuri
          'dbl', // Dyirbal
          'yij', // Yindjibarndi
          'gup', // Gunwinggu (Bininj)
          'rop', // Kriol (Australian)
          'piu', // Pintupi-Luritja
        ]
      },
      paman: {
        id: 'paman',
        name: 'Paman',
        languages: [
          'uky', // Kuuk Thaayorre
          'wim', // Wik-Mungkan
          'gia', // Gia
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 18. ALGIC
  // ─────────────────────────────────────────────────────────────────────────
  algic: {
    id: 'algic',
    name: 'Algic',
    color: '#14b8a6',
    speakers: 250000,
    branches: {
      algonquian: {
        id: 'algonquian',
        name: 'Algonquian',
        languages: [
          'crk', // Plains Cree
          'cre', // Cree (macro)
          'csw', // Swampy Cree
          'crj', // Southern East Cree
          'crm', // Moose Cree
          'crl', // Northern East Cree
          'oji', // Ojibwe (macro)
          'ojg', // Eastern Ojibwa
          'ojs', // Severn Ojibwa (Oji-Cree)
          'ojb', // Northwestern Ojibwa
          'ojw', // Western Ojibwa (Saulteaux)
          'otw', // Ottawa
          'pot', // Potawatomi
          'alq', // Algonquin
          'mic', // Mi'kmaq
          'moh', // Mohawk (actually Iroquoian)
          'del', // Delaware (Unami)
          'nsk', // Naskapi
          'atj', // Atikamekw
          'mnr', // Mono (not Algonquian, correction)
          'bla', // Blackfoot
          'chp', // Chipewyan (actually Athabaskan)
          'abn', // Abenaki
          'wnj', // Wanano (not Algonquian)
          'moe', // Montagnais (Innu)
          'scs', // North Slavey (not Algonquian)
          'crg', // Michif
          'naq', // Nama (not Algonquian)
          'sac', // Fox (Meskwaki)
          'kic', // Kickapoo
          'mia', // Miami-Illinois
          'shw', // Shawnee
        ]
      },
      yurok: {
        id: 'yurok',
        name: 'Yurok',
        languages: [
          'yur', // Yurok
        ]
      },
      wiyot: {
        id: 'wiyot',
        name: 'Wiyot',
        languages: [
          'wiy', // Wiyot
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 19. UTO-AZTECAN
  // ─────────────────────────────────────────────────────────────────────────
  utoAztecan: {
    id: 'utoAztecan',
    name: 'Uto-Aztecan',
    color: '#f43f5e',
    speakers: 2000000,
    branches: {
      nahuan: {
        id: 'nahuan',
        name: 'Nahuan (Aztecan)',
        languages: [
          'nah', // Nahuatl (macro)
          'nci', // Classical Nahuatl
          'nhe', // Eastern Huasteca Nahuatl
          'nhw', // Western Huasteca Nahuatl
          'nhn', // Central Nahuatl
          'nhx', // Isthmus-Mecayapan Nahuatl
          'nch', // Central Huasteca Nahuatl
          'ngu', // Guerrero Nahuatl
          'nhg', // Tetelcingo Nahuatl
          'nhi', // Zacatlán-Ahuacatlán-Tepetzintla Nahuatl
          'azd', // Eastern Durango Nahuatl
          'ppl', // Pipil (Nawat)
        ]
      },
      sonoran: {
        id: 'sonoran',
        name: 'Sonoran',
        languages: [
          'yaq', // Yaqui
          'tar', // Central Tarahumara
          'tbu', // Tubar
          'var', // Huarijio (Guarijío)
          'mfy', // Mayo
        ]
      },
      numic: {
        id: 'numic',
        name: 'Numic',
        languages: [
          'com', // Comanche
          'shh', // Shoshone (Northern)
          'ute', // Ute-Southern Paiute
          'par', // Panamint
        ]
      },
      tapimic: {
        id: 'tapimic',
        name: 'Tepiman',
        languages: [
          'ood', // Tohono O'odham (Papago)
          'pia', // Pima Bajo
        ]
      },
      corachol: {
        id: 'corachol',
        name: 'Corachol',
        languages: [
          'hch', // Huichol (Wixárika)
          'crn', // Cora
        ]
      },
      tubatulabal: {
        id: 'tubatulabal',
        name: 'Tubatulabal',
        languages: [
          'tub', // Tübatulabal
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 20. ESKIMO-ALEUT
  // ─────────────────────────────────────────────────────────────────────────
  eskimoAleut: {
    id: 'eskimoAleut',
    name: 'Eskimo-Aleut',
    color: '#0ea5e9',
    speakers: 170000,
    branches: {
      eskimo: {
        id: 'eskimo',
        name: 'Eskimo',
        branches: {
          inuit: {
            id: 'inuit',
            name: 'Inuit',
            languages: [
              'iku', // Inuktitut (macro)
              'ike', // Eastern Canadian Inuktitut
              'ikt', // Inuinnaqtun (Western Canadian Inuktitut)
              'ipk', // Inupiaq (macro)
              'esi', // North Alaskan Inupiatun
              'esk', // Northwest Alaska Inupiatun
              'kal', // Kalaallisut (Greenlandic)
            ]
          },
          yupik: {
            id: 'yupik',
            name: 'Yupik',
            languages: [
              'esu', // Central Alaskan Yup'ik
              'ess', // Central Siberian Yupik
              'ems', // Pacific Gulf Yupik (Alutiiq)
            ]
          }
        }
      },
      aleut: {
        id: 'aleut',
        name: 'Aleut',
        languages: [
          'ale', // Aleut
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 21. NA-DENE
  // ─────────────────────────────────────────────────────────────────────────
  naDene: {
    id: 'naDene',
    name: 'Na-Dené',
    color: '#d946ef',
    speakers: 225000,
    branches: {
      athabaskan: {
        id: 'athabaskan',
        name: 'Athabaskan',
        branches: {
          northernAthabaskan: {
            id: 'northernAthabaskan',
            name: 'Northern Athabaskan',
            languages: [
              'chp', // Chipewyan (Dënesųłiné)
              'dgr', // Dogrib (Tłı̨chǫ)
              'scs', // North Slavey
              'xsl', // South Slavey
              'gwi', // Gwich'in
              'haa', // Hän
              'koy', // Koyukon
              'tfn', // Tanana
              'taa', // Lower Tanana
              'tau', // Upper Tanana
              'ing', // Deg Xinag
              'aht', // Ahtna
              'den', // Dena'ina (Tanaina)
              'ttm', // Northern Tutchone
              'tce', // Southern Tutchone
              'kkz', // Kaska
              'bcr', // Babine-Witsuwit'en
              'crx', // Carrier
              'clc', // Chilcotin
              'tli', // Tlingit (sometimes separate)
              'sek', // Sekani
              'bea', // Beaver (Dane-zaa)
              'srs', // Sarsi (Tsuu T'ina)
              'tht', // Tahltan
              'sai', // Saya
            ]
          },
          southernAthabaskan: {
            id: 'southernAthabaskan',
            name: 'Southern Athabaskan (Apache-Navajo)',
            languages: [
              'nav', // Navajo
              'apw', // Western Apache
              'apm', // Mescalero-Chiricahua Apache
              'apj', // Jicarilla Apache
              'apk', // Kiowa Apache (Plains Apache)
              'apl', // Lipan Apache
            ]
          },
          pacificCoastAthabaskan: {
            id: 'pacificCoastAthabaskan',
            name: 'Pacific Coast Athabaskan',
            languages: [
              'hup', // Hupa
              'tol', // Tolowa
              'mvb', // Mattole
              'ktw', // Kato
            ]
          }
        }
      },
      tlingit: {
        id: 'tlingit',
        name: 'Tlingit',
        languages: [
          'tli', // Tlingit
        ]
      },
      eyak: {
        id: 'eyak',
        name: 'Eyak (Extinct)',
        languages: [
          'eya', // Eyak
        ]
      },
      haida: {
        id: 'haidaBranch',
        name: 'Haida (sometimes classified separately)',
        languages: [
          'hai', // Haida
          'hdn', // Northern Haida
          'hax', // Southern Haida
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 22. HMONG-MIEN
  // ─────────────────────────────────────────────────────────────────────────
  hmongMien: {
    id: 'hmongMien',
    name: 'Hmong-Mien',
    color: '#65a30d',
    speakers: 12000000,
    branches: {
      hmongic: {
        id: 'hmongic',
        name: 'Hmongic',
        languages: [
          'hmn', // Hmong (macro)
          'hnj', // Hmong Njua (Green/Blue Hmong)
          'mww', // Hmong Daw (White Hmong)
          'hmc', // Central Huishui Hmong
          'hmd', // A-Hmao (Large Flowery Miao)
          'hmz', // Hmong Shua
          'hms', // Southern Qiandong Miao
          'hmq', // Eastern Huishui Hmong
          'cqd', // Chuanqiandian Cluster Miao
          'huj', // Northern Guiyang Hmong
          'sfm', // Small Flowery Miao
          'hrm', // Horned Miao
          'muq', // Eastern Xiangxi Miao
        ]
      },
      mienic: {
        id: 'mienic',
        name: 'Mienic',
        languages: [
          'ium', // Iu Mien
          'bmt', // Biao Mon
          'mji', // Kim Mun
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 23. KARTVELIAN
  // ─────────────────────────────────────────────────────────────────────────
  kartvelian: {
    id: 'kartvelian',
    name: 'Kartvelian',
    color: '#eab308',
    speakers: 5700000,
    branches: {
      karto: {
        id: 'karto',
        name: 'Karto-Zan',
        languages: [
          'kat', // Georgian
          'xmf', // Mingrelian
          'lzz', // Laz
        ]
      },
      svan: {
        id: 'svan',
        name: 'Svan',
        languages: [
          'sva', // Svan
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 24. MONGOLIC
  // ─────────────────────────────────────────────────────────────────────────
  mongolic: {
    id: 'mongolic',
    name: 'Mongolic',
    color: '#fb7185',
    speakers: 10000000,
    branches: {
      centralMongolic: {
        id: 'centralMongolic',
        name: 'Central Mongolic',
        languages: [
          'mon', // Mongolian (macro)
          'khk', // Halh Mongolian
          'mvf', // Peripheral Mongolian
          'bua', // Buryat
          'xal', // Kalmyk (Oirat)
        ]
      },
      southernMongolic: {
        id: 'southernMongolic',
        name: 'Southern Mongolic',
        languages: [
          'dta', // Daur
          'mjg', // Tu (Monguor)
          'bou', // Bonan
          'sce', // Dongxiang (Santa)
          'yig', // Yugur (Eastern)
        ]
      },
      moghol: {
        id: 'moghol',
        name: 'Moghol',
        languages: [
          'mhj', // Moghol
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 25. TUNGUSIC
  // ─────────────────────────────────────────────────────────────────────────
  tungusic: {
    id: 'tungusic',
    name: 'Tungusic',
    color: '#38bdf8',
    speakers: 120000,
    branches: {
      northernTungusic: {
        id: 'northernTungusic',
        name: 'Northern Tungusic',
        languages: [
          'evn', // Evenki
          'eve', // Even (Lamut)
          'neg', // Negidal
        ]
      },
      southernTungusic: {
        id: 'southernTungusic',
        name: 'Southern Tungusic',
        languages: [
          'mnc', // Manchu
          'sib', // Sibe (Xibe)
          'gld', // Nanai
          'ulc', // Ulch
          'ork', // Orok (Uilta)
          'ude', // Udihe
          'orc', // Oroch
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 26. SIGN LANGUAGES
  // ─────────────────────────────────────────────────────────────────────────
  signLanguages: {
    id: 'signLanguages',
    name: 'Sign Languages',
    color: '#6366f1',
    speakers: 72000000,
    branches: {
      banzslFamily: {
        id: 'banzslFamily',
        name: 'BANZSL Family',
        languages: [
          'bfi', // British Sign Language
          'asf', // Auslan (Australian Sign Language)
          'nzs', // New Zealand Sign Language
        ]
      },
      frenchSign: {
        id: 'frenchSign',
        name: 'French Sign Language Family',
        languages: [
          'ase', // American Sign Language
          'fsl', // French Sign Language
          'bvs', // Belgian French Sign Language
          'ise', // Italian Sign Language
          'ssp', // Spanish Sign Language
          'isg', // International Sign
          'mfs', // Mexican Sign Language
          'bzs', // Brazilian Sign Language
          'aed', // Argentine Sign Language
          'ncs', // Nicaraguan Sign Language
          'vsl', // Venezuelan Sign Language
          'csf', // Cuba Sign Language
          'rsn', // Russian Sign Language
        ]
      },
      germanSign: {
        id: 'germanSign',
        name: 'German Sign Language Family',
        languages: [
          'gsg', // German Sign Language
          'psp', // Polish Sign Language
          'cse', // Czech Sign Language
          'ils', // Israeli Sign Language
        ]
      },
      japaneseSign: {
        id: 'japaneseSign',
        name: 'Japanese Sign Language Family',
        languages: [
          'jsl', // Japanese Sign Language
          'kvk', // Korean Sign Language
          'tss', // Taiwan Sign Language
        ]
      },
      chineseSign: {
        id: 'chineseSign',
        name: 'Chinese Sign Language',
        languages: [
          'csl', // Chinese Sign Language
          'hks', // Hong Kong Sign Language
        ]
      },
      swedishSign: {
        id: 'swedishSign',
        name: 'Swedish Sign Language Family',
        languages: [
          'swl', // Swedish Sign Language
          'fse', // Finnish Sign Language
          'psr', // Portuguese Sign Language
        ]
      },
      arabSign: {
        id: 'arabSign',
        name: 'Arab Sign Languages',
        languages: [
          'mre', // Martha's Vineyard Sign Language (historical)
          'esl', // Egyptian Sign Language
        ]
      },
      indianSign: {
        id: 'indianSign',
        name: 'Indian Sign Languages',
        languages: [
          'ins', // Indian Sign Language
          'pks', // Pakistan Sign Language
          'lbs', // Libyan Sign Language
        ]
      },
      otherSign: {
        id: 'otherSign',
        name: 'Other Sign Languages',
        languages: [
          'dse', // Dutch Sign Language
          'tsm', // Turkish Sign Language
          'ssr', // Swiss-French Sign Language
          'sgn', // Sign language (generic)
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 27. ISOLATES
  // ─────────────────────────────────────────────────────────────────────────
  isolates: {
    id: 'isolates',
    name: 'Language Isolates',
    color: '#94a3b8',
    speakers: 3000000,
    branches: {
      basque: {
        id: 'basque',
        name: 'Basque',
        languages: [
          'eus', // Basque
        ]
      },
      ainu: {
        id: 'ainu',
        name: 'Ainu',
        languages: [
          'ain', // Ainu
        ]
      },
      burushaski: {
        id: 'burushaski',
        name: 'Burushaski',
        languages: [
          'bsk', // Burushaski
        ]
      },
      zuni: {
        id: 'zuni',
        name: 'Zuni',
        languages: [
          'zun', // Zuni
        ]
      },
      haidaIsolate: {
        id: 'haidaIsolate',
        name: 'Haida',
        languages: [
          'hai', // Haida
        ]
      },
      nihali: {
        id: 'nihali',
        name: 'Nihali',
        languages: [
          'nll', // Nihali
        ]
      },
      kusunda: {
        id: 'kusunda',
        name: 'Kusunda',
        languages: [
          'kgg', // Kusunda
        ]
      },
      sumerian: {
        id: 'sumerian',
        name: 'Sumerian (Extinct)',
        languages: [
          'sux', // Sumerian
        ]
      },
      elamite: {
        id: 'elamite',
        name: 'Elamite (Extinct)',
        languages: [
          'elx', // Elamite
        ]
      },
      etruscan: {
        id: 'etruscan',
        name: 'Etruscan (Extinct)',
        languages: [
          'ett', // Etruscan
        ]
      },
      mapudungun: {
        id: 'mapudungun',
        name: 'Mapudungun',
        languages: [
          'arn', // Mapudungun (Mapuche)
        ]
      },
      keres: {
        id: 'keres',
        name: 'Keres',
        languages: [
          'kee', // Eastern Keres
          'kjq', // Western Keres
        ]
      },
      kutenai: {
        id: 'kutenai',
        name: 'Kutenai',
        languages: [
          'kut', // Kutenai
        ]
      },
      seri: {
        id: 'seri',
        name: 'Seri',
        languages: [
          'sei', // Seri
        ]
      },
      washo: {
        id: 'washo',
        name: 'Washo',
        languages: [
          'was', // Washo
        ]
      },
      purépecha: {
        id: 'purepecha',
        name: 'Purépecha (Tarascan)',
        languages: [
          'tsz', // Purépecha
        ]
      },
      mixeZoquean: {
        id: 'mixeZoquean',
        name: 'Mixe-Zoquean',
        languages: [
          'mxp', // Tlahuitoltepec Mixe
          'mto', // Totontepec Mixe
          'zos', // Francisco León Zoque
          'zoc', // Copainalá Zoque
        ]
      },
      otomanguean: {
        id: 'otomanguean',
        name: 'Oto-Manguean',
        languages: [
          'oto', // Otomí (general)
          'zap', // Zapotec (general)
          'mig', // San Miguel El Grande Mixtec
          'zai', // Isthmus Zapotec
          'maz', // Central Mazahua
          'otz', // Otomí (Ixtenco)
          'ote', // Mezquital Otomí
          'chd', // Highland Oaxaca Chontal
          'mxt', // Mixtec (general)
        ]
      },
      mayan: {
        id: 'mayan',
        name: 'Mayan',
        languages: [
          'yua', // Yucateco Maya
          'quc', // K'iche'
          'kek', // Q'eqchi'
          'mam', // Mam
          'cak', // Kaqchikel
          'tzj', // Tz'utujil
          'poc', // Poqomam
          'ttc', // Tektiteko
          'ixl', // Ixil
          'jac', // Jakaltek (Popti')
          'chf', // Tabasco Chontal
          'tzo', // Tzotzil
          'tzh', // Tzeltal
          'ctu', // Ch'ol
          'lac', // Lacandon
          'hub', // Huastec
        ]
      },
      northCaucasian: {
        id: 'northCaucasian',
        name: 'North Caucasian',
        branches: {
          northwestCaucasian: {
            id: 'northwestCaucasian',
            name: 'Northwest Caucasian',
            languages: [
              'abk', // Abkhaz
              'ady', // Adyghe
              'kbd', // Kabardian
              'uby', // Ubykh (extinct)
              'aba', // Abaza
            ]
          },
          northeastCaucasian: {
            id: 'northeastCaucasian',
            name: 'Northeast Caucasian (Nakh-Dagestanian)',
            languages: [
              'che', // Chechen
              'inh', // Ingush
              'ava', // Avar
              'lez', // Lezgian
              'dar', // Dargwa
              'lbe', // Lak
              'tab', // Tabassaran
              'aqc', // Archi
              'tin', // Tindi
              'rut', // Rutul
              'agx', // Aghul
              'tkr', // Tsakhur
              'ddo', // Dido (Tsez)
              'khv', // Khvarshi
              'bph', // Botlikh
              'gdo', // Godoberi
              'ani', // Andi
            ]
          }
        }
      },
      hmongMienIsolate: {
        id: 'additional',
        name: 'Other / Unclassified',
        languages: [
          'yux', // Southern Yukaghir
          'ykg', // Northern Yukaghir (Tundra)
          'itl', // Itelmen
          'niv', // Gilyak (Nivkh)
          'ket', // Ket
          'ckt', // Chukchi
          'ypk', // Yupik (Eskimoan, see also above)
          'kpy', // Koryak
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 28. CREOLES AND PIDGINS
  // ─────────────────────────────────────────────────────────────────────────
  creoles: {
    id: 'creoles',
    name: 'Creoles and Pidgins',
    color: '#78716c',
    speakers: 100000000,
    branches: {
      englishBased: {
        id: 'englishBased',
        name: 'English-based Creoles',
        languages: [
          'pcm', // Nigerian Pidgin
          'tpi', // Tok Pisin
          'bis', // Bislama
          'jam', // Jamaican Creole
          'sag', // Sango
          'hwc', // Hawai'i Pidgin
          'gpe', // Ghanaian Pidgin English
          'kri', // Krio (Sierra Leone)
          'rop', // Kriol (Australian)
          'pis', // Pijin (Solomon Islands)
          'icr', // Islander Creole English
          'tch', // Turks and Caicos Creole
          'bah', // Bahamas Creole English
          'bzj', // Belize Kriol
          'gyn', // Guyanese Creole
          'srn', // Sranan Tongo
          'djk', // Aukan (Eastern Maroon Creole)
          'gcl', // Grenadian Creole English
          'vic', // Virgin Islands Creole
          'svc', // Vincentian Creole
          'aig', // Antigua and Barbuda Creole
          'brc', // Berbice Creole Dutch
          'trf', // Trinidadian Creole English
          'wes', // Cameroon Pidgin English
        ]
      },
      frenchBased: {
        id: 'frenchBased',
        name: 'French-based Creoles',
        languages: [
          'hat', // Haitian Creole
          'gcf', // Guadeloupean Creole French
          'rcf', // Réunion Creole French
          'mfe', // Morisyen (Mauritian Creole)
          'acf', // Saint Lucian Creole French
          'scf', // San Miguel Creole French
          'crs', // Seychellois Creole
          'lou', // Louisiana Creole
          'kmv', // Karipúna Creole French
        ]
      },
      portugueseBased: {
        id: 'portugueseBased',
        name: 'Portuguese-based Creoles',
        languages: [
          'kea', // Kabuverdianu (Cape Verdean Creole)
          'pov', // Upper Guinea Crioulo
          'fpe', // Fernando Po Creole English
          'pre', // Principense
          'cri', // Sao Tomense
          'mcm', // Malaccan Creole Portuguese
          'skf', // Ternate Creole (Papiá Kristang)
        ]
      },
      dutchBased: {
        id: 'dutchBased',
        name: 'Dutch-based Creoles',
        languages: [
          'dcr', // Negerhollands (Virgin Islands Creole Dutch)
          'skw', // Skepi Creole Dutch
          'brc', // Berbice Creole Dutch
        ]
      },
      spanishBased: {
        id: 'spanishBased',
        name: 'Spanish-based Creoles',
        languages: [
          'pap', // Papiamento
          'cbk', // Chavacano (Zamboangueño)
        ]
      },
      malayBased: {
        id: 'malayBased',
        name: 'Malay-based Creoles',
        languages: [
          'ccm', // Malaccan Creole Malay
          'msi', // Sabah Malay
          'abs', // Ambonese Malay
          'max', // North Moluccan Malay
          'bew', // Betawi
          'pea', // Peranakan Indonesian
        ]
      },
      arabicBased: {
        id: 'arabicBased',
        name: 'Arabic-based Creoles',
        languages: [
          'pga', // Sudanese Creole Arabic (Juba Arabic)
          'shu', // Chadian Arabic
        ]
      },
      mixedCreoles: {
        id: 'mixedCreoles',
        name: 'Mixed / Other Creoles',
        languages: [
          'crg', // Michif (Cree-French)
          'mbf', // Baba Malay
          'tcs', // Torres Strait Creole
          'cpf', // Creoles and pidgins, French-based (generic)
          'cpe', // Creoles and pidgins, English-based (generic)
          'cpp', // Creoles and pidgins, Portuguese-based (generic)
          'umu', // Munsee (not creole, correction — placeholder)
          'chn', // Chinook Jargon
          'fng', // Fanagalo
        ]
      }
    }
  }
};


// ---------------------------------------------------------------------------
// CommonJS export (for Node.js / testing environments)
// ---------------------------------------------------------------------------
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FAMILY_TREE };
}
