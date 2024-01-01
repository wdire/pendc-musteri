export type CustomerUrunGroupListType = {
  paket_grup_id: number;
  paket_grup: string;
};

export type CustomerUrunList = {
  id: number;
  sip_no: string;
  sip_tarih: string;
  start_zaman: string;
  finans_zaman: string;
  gelecek_odeme: string;
  fat_ack: string;
  aciklama: string;
  ozellik: string;
  hizmet_durum: string;
  f_durum: string;
  musteri_bakiye: number;
  urun_fiyat: number;
  urun_fiyat_tl: number;
  parabirim: string;
  period_name: string;
  customer_id: number;
  iptal_talep: boolean;
  iptal_sebep: unknown;
  paket_grup: string;
  urun_paket_id: number;
  sip_tutar: number;
  json_ozellik: string;
  urun_tipi: number;
  paket_urun_tipi: unknown;
  parent_urun_id: number;
  start_say: number;
  paket_grup_id: unknown;
};
