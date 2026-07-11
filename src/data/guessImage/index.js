import { guess_alat_musik } from './alat-musik';
import { guess_kearifan_lokal } from './kearifan-lokal';
import { guess_makanan } from './makanan';
import { guess_pakaian_adat } from './pakaian-adat';
import { guess_rumah_adat } from './rumah-adat';
import { guess_tempat_bersejarah } from './tempat-bersejarah';

export const guessImageData = {
  'rumah-adat': guess_rumah_adat,
  'makanan': guess_makanan,
  'pakaian-adat': guess_pakaian_adat,
  'alat-musik': guess_alat_musik,
  'tempat-bersejarah': guess_tempat_bersejarah,
  'kearifan-lokal': guess_kearifan_lokal
};
