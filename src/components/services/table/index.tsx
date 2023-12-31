'use client';

import { ColumnType } from '@/types/table.type';
import RoundContainer from '../../layout/common/round-container';
import SectionContainer from '../../layout/common/section-container';
import classNames from 'classnames';
import Image from 'next/image';
import Status, { StatusProps } from '../common/status';
import Cancel from '../common/cancel';
import Undo from '../common/undo';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/form/select';
import { useState } from 'react';

const columns: ColumnType[] = [
  {
    header: 'Ürün Adı',
    id: 'urun_adi',
  },
  {
    header: 'Disk',
    id: 'disk',
  },
  {
    header: 'RAM',
    id: 'ram',
  },
  {
    header: 'CPU',
    id: 'cpu',
  },
  {
    header: 'Port',
    id: 'port',
  },
  {
    header: 'Fiyat (KDV Dahil)',
    id: 'fiyat',
  },
  {
    header: 'Yenileme',
    id: 'yenileme',
  },
  {
    header: 'Durum',
    id: 'durum',
  },
  {
    header: 'İşlemler',
    id: 'islemler',
  },
];

const datas = [
  {
    urun_adi: {
      top_name: 'Test',
      name: 'Başlangıç SSD Cloud Sunucu',
    },
    disk: '80 GB',
    ram: '4 GB',
    cpu: '2 Core',
    port: '1 Gbit/s',
    fiyat: '₺1.458,00 (Aylık)',
    yenileme: '14.05.2023',
    durum: {
      color: 'green',
      label: 'Aktif',
    },
    islemler: {
      type: 'cancel',
    },
  },
  {
    urun_adi: {
      top_name: 'Test',
      name: 'Başlangıç SSD Cloud Sunucu',
    },
    disk: '80 GB',
    ram: '4 GB',
    cpu: '2 Core',
    port: '1 Gbit/s',
    fiyat: '₺1.458,00 (Aylık)',
    yenileme: '14.05.2023',
    durum: {
      color: 'red',
      label: 'Pasif',
    },
    islemler: {
      type: 'undo',
    },
  },
  {
    urun_adi: {
      top_name: 'Test',
      name: 'Başlangıç SSD Cloud Sunucu',
    },
    disk: '80 GB',
    ram: '4 GB',
    cpu: '2 Core',
    port: '1 Gbit/s',
    fiyat: '₺1.458,00 (Aylık)',
    yenileme: '14.05.2023',
    durum: {
      color: 'green',
      label: 'Aktif',
    },
    islemler: {
      type: 'undo',
    },
  },
];

const selectOptions = [
  {
    label: 'Domain Hizmeti',
    value: 'domain_hizmeti',
  },
  {
    label: 'Cloud SSD Hizmeti',
    value: 'cloud_ssd_hizmeti',
  },
  {
    label: 'Ek Kaynak Hizmeti',
    value: 'ek_kaynak_hizmeti',
  },
  {
    label: 'Yedekleme Hizmeti',
    value: 'yedekleme_hizmeti',
  },
  {
    label: 'IP Hizmeti',
    value: 'ip_hizmeti',
  },
  {
    label: 'İnternet Erişimi Hizmeti',
    value: 'internet_erisimi_hizmeti',
  },
  {
    label: 'Secure Uplink Hizmeti',
    value: 'secure_uplink_hizmeti',
  },
];

const ProductsTable = () => {
  const [selectedService, setSelectedService] = useState('cloud_ssd_hizmeti');

  const onSelectChange = (value: string) => {
    console.log('value', value);
    setSelectedService(value);
  };

  return (
    <SectionContainer className="mb-5">
      <RoundContainer>
        <div className="p-6 mb-5 flex justify-between">
          <div>
            <div className="text-xl text-textColor-title pb-2">
              Cloud SSD Hizmeti
            </div>
            <div className="text-sm">
              11 kayıttan 1 - 10 arasındaki kayıtlar gösteriliyor
            </div>
          </div>

          <div className="w-[398px]">
            <div className="pb-2 text-textColor-clickable">Hizmet Seçin</div>
            <Select value={selectedService} onValueChange={onSelectChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Hizmet Seçiniz" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {selectOptions.map((select) => {
                    return (
                      <SelectItem key={select.value} value={select.value}>
                        {select.label}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="px-[1px] h-[640px]">
          <table className="w-full">
            <thead>
              <tr className="bg-table-striped border-b border-b-table-stroke text-left">
                {columns.map((column, index) => {
                  return (
                    <th
                      data-id={column.header}
                      key={'t-head_' + column.id}
                      className={classNames('text-xs bg-body-s h-[34px]', {
                        'pl-6': index === 0,
                        //'pr-6': index === columns.length - 1,
                      })}
                    >
                      {column.header}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {datas.map((row, index) => {
                return (
                  <tr
                    key={'row_' + index}
                    className={
                      'h-[68px] border-b border-b-table-stroke even:bg-table-striped text-table-textColor'
                    }
                  >
                    <td className="pl-6">
                      <div className="flex gap-4">
                        <Image
                          src={'/assets/server-icon.png'}
                          width={44}
                          height={44}
                          alt="Server Icon"
                          className="pointer-events-none"
                        />
                        <div>
                          <div className="text-textColor-main">
                            {row.urun_adi.top_name}
                          </div>
                          <div className="text-textColor-title font-medium">
                            {row.urun_adi.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{row.disk}</td>
                    <td>{row.ram}</td>
                    <td>{row.cpu}</td>
                    <td>{row.port}</td>
                    <td>{row.fiyat}</td>
                    <td>{row.yenileme}</td>
                    <td>
                      <Status
                        label={row.durum.label}
                        color={row.durum.color as StatusProps['color']}
                      />
                    </td>
                    <td>
                      {row.islemler.type === 'cancel' ? (
                        <Cancel
                          onClick={() => {
                            console.log('clicked cancel for', row);
                          }}
                        />
                      ) : (
                        <Undo
                          onClick={() => {
                            console.log('clicked undo for', row);
                          }}
                        />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </RoundContainer>
    </SectionContainer>
  );
};

export default ProductsTable;
