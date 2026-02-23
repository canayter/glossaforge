/**
 * INTELLIGIBILITY_EDGES
 *
 * Mutual-intelligibility dataset for the GlossaForge linguistics toolkit.
 *
 * Each edge encodes how well a speaker of the *source* language understands
 * the *target* language (score) and vice-versa (reverse).  Values are on a
 * 0.0 -- 1.0 scale.  Because intelligibility is frequently asymmetric the
 * two directions are stored separately.
 *
 * Categories:
 *   very_high  >= 0.80
 *   high       >= 0.60
 *   moderate   >= 0.40
 *   low        >= 0.20
 *   minimal    <  0.20
 *
 * ISO 639-3 codes are used throughout.  Where a macrolanguage code is more
 * widely recognised than the individual-language code the macrolanguage code
 * is preferred (e.g. "zlm" for Standard Malay, "arb" for Modern Standard
 * Arabic).
 *
 * Modality is "spoken" unless noted otherwise.  A handful of pairs have a
 * separate "written" entry where the two modalities diverge significantly
 * (e.g. Mandarin / Cantonese).
 *
 * Sources: Gooskens (2007), Tang & van Heuven (2009), Golubovic & Gooskens
 * (2015), Szeto et al. (2017), ethnologue.com, glottolog.org, and various
 * sociolinguistic field studies.
 */

const INTELLIGIBILITY_EDGES = [

  // =========================================================================
  //  SCANDINAVIAN (North Germanic)
  // =========================================================================
  { source: 'nob', target: 'swe', score: 0.85, reverse: 0.72, modality: 'spoken', category: 'very_high' },
  { source: 'nob', target: 'dan', score: 0.90, reverse: 0.80, modality: 'spoken', category: 'very_high' },
  { source: 'swe', target: 'dan', score: 0.70, reverse: 0.60, modality: 'spoken', category: 'high' },
  { source: 'nno', target: 'nob', score: 0.95, reverse: 0.95, modality: 'spoken', category: 'very_high' },
  { source: 'nno', target: 'swe', score: 0.82, reverse: 0.70, modality: 'spoken', category: 'very_high' },
  { source: 'nno', target: 'dan', score: 0.85, reverse: 0.75, modality: 'spoken', category: 'very_high' },
  { source: 'isl', target: 'fao', score: 0.50, reverse: 0.40, modality: 'spoken', category: 'moderate' },
  { source: 'swe', target: 'nno', score: 0.70, reverse: 0.82, modality: 'spoken', category: 'high' },

  // =========================================================================
  //  ROMANCE
  // =========================================================================
  { source: 'spa', target: 'por', score: 0.50, reverse: 0.72, modality: 'spoken', category: 'moderate' },
  { source: 'spa', target: 'ita', score: 0.55, reverse: 0.55, modality: 'spoken', category: 'moderate' },
  { source: 'spa', target: 'cat', score: 0.65, reverse: 0.80, modality: 'spoken', category: 'high' },
  { source: 'por', target: 'glg', score: 0.85, reverse: 0.85, modality: 'spoken', category: 'very_high' },
  { source: 'ita', target: 'ron', score: 0.35, reverse: 0.40, modality: 'spoken', category: 'low' },
  { source: 'fra', target: 'ita', score: 0.35, reverse: 0.40, modality: 'spoken', category: 'low' },
  { source: 'fra', target: 'spa', score: 0.30, reverse: 0.40, modality: 'spoken', category: 'low' },
  { source: 'cat', target: 'oci', score: 0.70, reverse: 0.65, modality: 'spoken', category: 'high' },
  { source: 'spa', target: 'glg', score: 0.75, reverse: 0.80, modality: 'spoken', category: 'high' },
  { source: 'fra', target: 'por', score: 0.25, reverse: 0.35, modality: 'spoken', category: 'low' },
  { source: 'fra', target: 'cat', score: 0.35, reverse: 0.45, modality: 'spoken', category: 'low' },
  { source: 'fra', target: 'ron', score: 0.25, reverse: 0.30, modality: 'spoken', category: 'low' },
  { source: 'ita', target: 'spa', score: 0.55, reverse: 0.55, modality: 'spoken', category: 'moderate' },
  { source: 'por', target: 'cat', score: 0.60, reverse: 0.55, modality: 'spoken', category: 'high' },
  { source: 'por', target: 'ita', score: 0.40, reverse: 0.35, modality: 'spoken', category: 'moderate' },
  { source: 'cat', target: 'spa', score: 0.80, reverse: 0.65, modality: 'spoken', category: 'very_high' },
  { source: 'cat', target: 'ita', score: 0.50, reverse: 0.45, modality: 'spoken', category: 'moderate' },
  { source: 'ron', target: 'ita', score: 0.40, reverse: 0.35, modality: 'spoken', category: 'moderate' },
  { source: 'ast', target: 'spa', score: 0.80, reverse: 0.70, modality: 'spoken', category: 'very_high' },
  { source: 'ast', target: 'glg', score: 0.55, reverse: 0.55, modality: 'spoken', category: 'moderate' },
  { source: 'oci', target: 'fra', score: 0.50, reverse: 0.35, modality: 'spoken', category: 'moderate' },
  { source: 'oci', target: 'cat', score: 0.65, reverse: 0.70, modality: 'spoken', category: 'high' },

  // =========================================================================
  //  SLAVIC
  // =========================================================================
  { source: 'ces', target: 'slk', score: 0.93, reverse: 0.95, modality: 'spoken', category: 'very_high' },
  { source: 'hrv', target: 'srp', score: 0.97, reverse: 0.97, modality: 'spoken', category: 'very_high' },
  { source: 'hrv', target: 'bos', score: 0.98, reverse: 0.98, modality: 'spoken', category: 'very_high' },
  { source: 'srp', target: 'bos', score: 0.98, reverse: 0.98, modality: 'spoken', category: 'very_high' },
  { source: 'bul', target: 'mkd', score: 0.85, reverse: 0.80, modality: 'spoken', category: 'very_high' },
  { source: 'rus', target: 'ukr', score: 0.60, reverse: 0.80, modality: 'spoken', category: 'high' },
  { source: 'rus', target: 'bel', score: 0.70, reverse: 0.80, modality: 'spoken', category: 'high' },
  { source: 'ukr', target: 'bel', score: 0.80, reverse: 0.80, modality: 'spoken', category: 'very_high' },
  { source: 'pol', target: 'ces', score: 0.40, reverse: 0.50, modality: 'spoken', category: 'moderate' },
  { source: 'pol', target: 'slk', score: 0.45, reverse: 0.50, modality: 'spoken', category: 'moderate' },
  { source: 'slv', target: 'hrv', score: 0.50, reverse: 0.60, modality: 'spoken', category: 'moderate' },
  { source: 'rus', target: 'pol', score: 0.30, reverse: 0.35, modality: 'spoken', category: 'low' },
  { source: 'ukr', target: 'pol', score: 0.40, reverse: 0.35, modality: 'spoken', category: 'moderate' },
  { source: 'slv', target: 'srp', score: 0.45, reverse: 0.55, modality: 'spoken', category: 'moderate' },
  { source: 'slv', target: 'bos', score: 0.45, reverse: 0.55, modality: 'spoken', category: 'moderate' },
  { source: 'mkd', target: 'srp', score: 0.60, reverse: 0.50, modality: 'spoken', category: 'high' },
  { source: 'bul', target: 'srp', score: 0.45, reverse: 0.40, modality: 'spoken', category: 'moderate' },
  { source: 'ces', target: 'pol', score: 0.50, reverse: 0.40, modality: 'spoken', category: 'moderate' },
  { source: 'rus', target: 'bul', score: 0.30, reverse: 0.35, modality: 'spoken', category: 'low' },
  { source: 'ukr', target: 'rus', score: 0.80, reverse: 0.60, modality: 'spoken', category: 'very_high' },
  { source: 'bel', target: 'ukr', score: 0.80, reverse: 0.80, modality: 'spoken', category: 'very_high' },

  // =========================================================================
  //  TURKIC
  // =========================================================================
  { source: 'tur', target: 'azj', score: 0.60, reverse: 0.65, modality: 'spoken', category: 'high' },
  { source: 'tur', target: 'tuk', score: 0.40, reverse: 0.45, modality: 'spoken', category: 'moderate' },
  { source: 'kaz', target: 'kir', score: 0.75, reverse: 0.75, modality: 'spoken', category: 'high' },
  { source: 'uzb', target: 'uig', score: 0.50, reverse: 0.50, modality: 'spoken', category: 'moderate' },
  { source: 'kaz', target: 'tat', score: 0.55, reverse: 0.55, modality: 'spoken', category: 'moderate' },
  { source: 'tur', target: 'kaz', score: 0.30, reverse: 0.35, modality: 'spoken', category: 'low' },
  { source: 'tur', target: 'uzb', score: 0.35, reverse: 0.40, modality: 'spoken', category: 'low' },
  { source: 'azj', target: 'tuk', score: 0.55, reverse: 0.55, modality: 'spoken', category: 'moderate' },
  { source: 'uzb', target: 'tur', score: 0.40, reverse: 0.35, modality: 'spoken', category: 'moderate' },
  { source: 'kir', target: 'tat', score: 0.50, reverse: 0.50, modality: 'spoken', category: 'moderate' },
  { source: 'kaz', target: 'uzb', score: 0.45, reverse: 0.45, modality: 'spoken', category: 'moderate' },
  { source: 'tat', target: 'bak', score: 0.75, reverse: 0.75, modality: 'spoken', category: 'high' },

  // =========================================================================
  //  GERMANIC (West Germanic)
  // =========================================================================
  { source: 'deu', target: 'nld', score: 0.40, reverse: 0.50, modality: 'spoken', category: 'moderate' },
  { source: 'deu', target: 'yid', score: 0.40, reverse: 0.60, modality: 'spoken', category: 'moderate' },
  { source: 'nld', target: 'afr', score: 0.90, reverse: 0.95, modality: 'spoken', category: 'very_high' },
  { source: 'eng', target: 'sco', score: 0.70, reverse: 0.85, modality: 'spoken', category: 'high' },
  { source: 'eng', target: 'fry', score: 0.25, reverse: 0.30, modality: 'spoken', category: 'low' },
  { source: 'nld', target: 'fry', score: 0.60, reverse: 0.70, modality: 'spoken', category: 'high' },
  { source: 'deu', target: 'ltz', score: 0.50, reverse: 0.55, modality: 'spoken', category: 'moderate' },
  { source: 'nld', target: 'lim', score: 0.70, reverse: 0.75, modality: 'spoken', category: 'high' },
  { source: 'deu', target: 'bar', score: 0.55, reverse: 0.80, modality: 'spoken', category: 'moderate' },
  { source: 'deu', target: 'gsw', score: 0.40, reverse: 0.75, modality: 'spoken', category: 'moderate' },
  { source: 'nld', target: 'deu', score: 0.50, reverse: 0.40, modality: 'spoken', category: 'moderate' },
  { source: 'afr', target: 'nld', score: 0.95, reverse: 0.90, modality: 'spoken', category: 'very_high' },
  { source: 'afr', target: 'deu', score: 0.35, reverse: 0.30, modality: 'spoken', category: 'low' },
  { source: 'fry', target: 'eng', score: 0.30, reverse: 0.25, modality: 'spoken', category: 'low' },
  { source: 'ltz', target: 'deu', score: 0.55, reverse: 0.50, modality: 'spoken', category: 'moderate' },

  // =========================================================================
  //  MALAY / INDONESIAN  (Austronesian - Malayic)
  // =========================================================================
  { source: 'zlm', target: 'ind', score: 0.90, reverse: 0.90, modality: 'spoken', category: 'very_high' },
  { source: 'zlm', target: 'ind', score: 0.95, reverse: 0.95, modality: 'written', category: 'very_high' },
  { source: 'zlm', target: 'min', score: 0.55, reverse: 0.60, modality: 'spoken', category: 'moderate' },

  // =========================================================================
  //  HINDI-URDU  (Indo-Aryan)
  // =========================================================================
  { source: 'hin', target: 'urd', score: 0.85, reverse: 0.85, modality: 'spoken', category: 'very_high' },
  { source: 'hin', target: 'urd', score: 0.25, reverse: 0.25, modality: 'written', category: 'low' },
  { source: 'hin', target: 'pan', score: 0.55, reverse: 0.60, modality: 'spoken', category: 'moderate' },
  { source: 'hin', target: 'ben', score: 0.25, reverse: 0.30, modality: 'spoken', category: 'low' },
  { source: 'hin', target: 'nep', score: 0.50, reverse: 0.55, modality: 'spoken', category: 'moderate' },
  { source: 'hin', target: 'mar', score: 0.30, reverse: 0.35, modality: 'spoken', category: 'low' },
  { source: 'hin', target: 'guj', score: 0.35, reverse: 0.40, modality: 'spoken', category: 'low' },

  // =========================================================================
  //  SINITIC  (Chinese varieties)
  // =========================================================================
  { source: 'cmn', target: 'yue', score: 0.10, reverse: 0.15, modality: 'spoken', category: 'minimal' },
  { source: 'cmn', target: 'yue', score: 0.70, reverse: 0.70, modality: 'written', category: 'high' },
  { source: 'cmn', target: 'wuu', score: 0.15, reverse: 0.20, modality: 'spoken', category: 'minimal' },
  { source: 'cmn', target: 'nan', score: 0.10, reverse: 0.15, modality: 'spoken', category: 'minimal' },
  { source: 'cmn', target: 'hak', score: 0.10, reverse: 0.15, modality: 'spoken', category: 'minimal' },
  { source: 'yue', target: 'nan', score: 0.20, reverse: 0.20, modality: 'spoken', category: 'low' },
  { source: 'cmn', target: 'wuu', score: 0.65, reverse: 0.65, modality: 'written', category: 'high' },

  // =========================================================================
  //  ARABIC varieties
  // =========================================================================
  { source: 'arb', target: 'arz', score: 0.70, reverse: 0.60, modality: 'spoken', category: 'high' },
  { source: 'arb', target: 'apc', score: 0.65, reverse: 0.55, modality: 'spoken', category: 'high' },
  { source: 'arz', target: 'apc', score: 0.55, reverse: 0.55, modality: 'spoken', category: 'moderate' },
  { source: 'arb', target: 'ary', score: 0.40, reverse: 0.30, modality: 'spoken', category: 'moderate' },
  { source: 'arz', target: 'ary', score: 0.35, reverse: 0.30, modality: 'spoken', category: 'low' },
  { source: 'apc', target: 'ary', score: 0.30, reverse: 0.30, modality: 'spoken', category: 'low' },
  { source: 'arb', target: 'acm', score: 0.60, reverse: 0.55, modality: 'spoken', category: 'high' },
  { source: 'arz', target: 'acm', score: 0.50, reverse: 0.50, modality: 'spoken', category: 'moderate' },
  { source: 'apc', target: 'acm', score: 0.60, reverse: 0.60, modality: 'spoken', category: 'high' },
  { source: 'arb', target: 'afb', score: 0.55, reverse: 0.50, modality: 'spoken', category: 'moderate' },

  // =========================================================================
  //  BANTU
  // =========================================================================
  { source: 'zul', target: 'xho', score: 0.75, reverse: 0.75, modality: 'spoken', category: 'high' },
  { source: 'zul', target: 'ssw', score: 0.70, reverse: 0.70, modality: 'spoken', category: 'high' },
  { source: 'zul', target: 'nbl', score: 0.65, reverse: 0.65, modality: 'spoken', category: 'high' },
  { source: 'xho', target: 'ssw', score: 0.55, reverse: 0.55, modality: 'spoken', category: 'moderate' },
  { source: 'nso', target: 'sot', score: 0.75, reverse: 0.75, modality: 'spoken', category: 'high' },
  { source: 'sot', target: 'tsn', score: 0.60, reverse: 0.60, modality: 'spoken', category: 'high' },
  { source: 'nso', target: 'tsn', score: 0.55, reverse: 0.55, modality: 'spoken', category: 'moderate' },
  { source: 'swa', target: 'swc', score: 0.80, reverse: 0.80, modality: 'spoken', category: 'very_high' },
  { source: 'kin', target: 'run', score: 0.90, reverse: 0.90, modality: 'spoken', category: 'very_high' },
  { source: 'nya', target: 'tum', score: 0.45, reverse: 0.45, modality: 'spoken', category: 'moderate' },
  { source: 'sna', target: 'nde', score: 0.30, reverse: 0.30, modality: 'spoken', category: 'low' },

  // =========================================================================
  //  TAI-KADAI (Thai / Lao)
  // =========================================================================
  { source: 'tha', target: 'lao', score: 0.60, reverse: 0.80, modality: 'spoken', category: 'high' },
  { source: 'tha', target: 'lao', score: 0.30, reverse: 0.30, modality: 'written', category: 'low' },

  // =========================================================================
  //  QUECHUA varieties
  // =========================================================================
  { source: 'quz', target: 'quh', score: 0.55, reverse: 0.55, modality: 'spoken', category: 'moderate' },
  { source: 'quz', target: 'quh', score: 0.80, reverse: 0.80, modality: 'spoken', category: 'very_high' },
  { source: 'quz', target: 'que', score: 0.75, reverse: 0.75, modality: 'spoken', category: 'high' },
  { source: 'quh', target: 'quh', score: 0.50, reverse: 0.50, modality: 'spoken', category: 'moderate' },

  // =========================================================================
  //  MALAGASY / MALAY  (Austronesian — distant)
  // =========================================================================
  { source: 'mlg', target: 'zlm', score: 0.05, reverse: 0.05, modality: 'spoken', category: 'minimal' },

  // =========================================================================
  //  PERSIAN / DARI / TAJIK  (Iranian)
  // =========================================================================
  { source: 'pes', target: 'prs', score: 0.90, reverse: 0.90, modality: 'spoken', category: 'very_high' },
  { source: 'pes', target: 'tgk', score: 0.70, reverse: 0.70, modality: 'spoken', category: 'high' },
  { source: 'prs', target: 'tgk', score: 0.70, reverse: 0.70, modality: 'spoken', category: 'high' },
  { source: 'pes', target: 'tgk', score: 0.40, reverse: 0.40, modality: 'written', category: 'moderate' },
  { source: 'kur', target: 'pes', score: 0.20, reverse: 0.20, modality: 'spoken', category: 'low' },

  // =========================================================================
  //  FINNO-UGRIC  (Uralic)
  // =========================================================================
  { source: 'fin', target: 'est', score: 0.40, reverse: 0.45, modality: 'spoken', category: 'moderate' },
  { source: 'fin', target: 'est', score: 0.50, reverse: 0.55, modality: 'written', category: 'moderate' },
  { source: 'est', target: 'vro', score: 0.60, reverse: 0.70, modality: 'spoken', category: 'high' },
  { source: 'fin', target: 'vep', score: 0.30, reverse: 0.35, modality: 'spoken', category: 'low' },
  { source: 'fin', target: 'krl', score: 0.50, reverse: 0.60, modality: 'spoken', category: 'moderate' },

  // =========================================================================
  //  BALTIC
  // =========================================================================
  { source: 'lit', target: 'lav', score: 0.30, reverse: 0.30, modality: 'spoken', category: 'low' },

  // =========================================================================
  //  CELTIC
  // =========================================================================
  { source: 'gle', target: 'gla', score: 0.35, reverse: 0.35, modality: 'spoken', category: 'low' },
  { source: 'cym', target: 'bre', score: 0.30, reverse: 0.30, modality: 'spoken', category: 'low' },

  // =========================================================================
  //  POLYNESIAN  (Austronesian - Oceanic)
  // =========================================================================
  { source: 'smo', target: 'ton', score: 0.40, reverse: 0.40, modality: 'spoken', category: 'moderate' },
  { source: 'mri', target: 'haw', score: 0.30, reverse: 0.30, modality: 'spoken', category: 'low' },

  // =========================================================================
  //  SEMITIC (non-Arabic)
  // =========================================================================
  { source: 'amh', target: 'tir', score: 0.40, reverse: 0.45, modality: 'spoken', category: 'moderate' },

  // =========================================================================
  //  JAPONIC
  // =========================================================================
  { source: 'jpn', target: 'ryu', score: 0.25, reverse: 0.35, modality: 'spoken', category: 'low' },

  // =========================================================================
  //  DRAVIDIAN
  // =========================================================================
  { source: 'tam', target: 'mal', score: 0.25, reverse: 0.30, modality: 'spoken', category: 'low' },
  { source: 'kan', target: 'tel', score: 0.20, reverse: 0.20, modality: 'spoken', category: 'low' },

  // =========================================================================
  //  MANDE
  // =========================================================================
  { source: 'bam', target: 'dyu', score: 0.80, reverse: 0.80, modality: 'spoken', category: 'very_high' },

  // =========================================================================
  //  ADDITIONAL INDO-ARYAN
  // =========================================================================
  { source: 'ben', target: 'asm', score: 0.70, reverse: 0.70, modality: 'spoken', category: 'high' },
  { source: 'ben', target: 'ori', score: 0.40, reverse: 0.40, modality: 'spoken', category: 'moderate' },
  { source: 'sin', target: 'div', score: 0.25, reverse: 0.25, modality: 'spoken', category: 'low' },

  // =========================================================================
  //  CUSHITIC
  // =========================================================================
  { source: 'som', target: 'orm', score: 0.15, reverse: 0.15, modality: 'spoken', category: 'minimal' },

  // =========================================================================
  //  ATLANTIC-CONGO (West African)
  // =========================================================================
  { source: 'wol', target: 'ful', score: 0.10, reverse: 0.10, modality: 'spoken', category: 'minimal' },
  { source: 'yor', target: 'ibo', score: 0.05, reverse: 0.05, modality: 'spoken', category: 'minimal' },
];

// ---------------------------------------------------------------------------
//  CommonJS export — allows `require()` in Node while keeping the global
//  declaration available for browser <script> tags.
// ---------------------------------------------------------------------------
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { INTELLIGIBILITY_EDGES };
}
