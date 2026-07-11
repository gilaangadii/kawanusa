import { match_alat_musik } from './alat-musik';
import { match_kearifan_lokal } from './kearifan-lokal';
import { match_makanan } from './makanan';
import { match_pakaian_adat } from './pakaian-adat';
import { match_rumah_adat } from './rumah-adat';
import { match_tempat_bersejarah } from './tempat-bersejarah';

export const matchingData = {
  'rumah-adat': match_rumah_adat,
  'makanan': match_makanan,
  'pakaian-adat': match_pakaian_adat,
  'alat-musik': match_alat_musik,
  'tempat-bersejarah': match_tempat_bersejarah,
  'kearifan-lokal': match_kearifan_lokal
};
