'use client';

import { ColumnType } from '@/types/table.type';
import RoundContainer from '../../layout/common/round-container';
import SectionContainer from '../../layout/common/section-container';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/form/select';
import { useEffect, useState } from 'react';
import Table from './table';
import CustomerUrunService from '@/services/customer-urun.service';
import {
  CustomerUrunGroupListType,
  CustomerUrunList,
} from '@/types/customer-urun.type';

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

const ServiceTable = () => {
  const [selectedService, setSelectedService] = useState('');
  const [groupList, setGroupList] = useState<CustomerUrunGroupListType[]>([]);
  const [customerUrunList, setCustomerUrunList] = useState<CustomerUrunList[]>(
    [],
  );

  const onSelectChange = (value: string) => {
    console.log('value', value);
    setSelectedService(value);
  };

  useEffect(() => {
    const abortController = new AbortController();

    init(abortController.signal);

    return () => {
      abortController.abort();
    };
  }, []);

  useEffect(() => {
    if (selectedService && Number(selectedService)) {
      const abortController = new AbortController();

      fetchCustomerUrunList({
        signal: abortController.signal,
        group_id: Number(selectedService),
      });

      return () => {
        abortController.abort();
      };
    }
  }, [selectedService]);

  const fetchCustomerUrunList = async ({
    signal,
    group_id,
  }: {
    signal: AbortSignal;
    group_id: number;
  }) => {
    if (group_id !== 2) {
      // Api'ın çok uygun olmaması ve bunun bir test olduğundan dolayı diğer grupLiist tablo içeriklerini göstermiyorum.
      return false;
    }

    try {
      const customerListResponse = await CustomerUrunService.list({
        signal: signal,
        group_id: group_id,
      });

      if (customerListResponse.data?.data) {
        setCustomerUrunList(customerListResponse.data?.data);
      } else {
        throw new Error("Couldn't get data");
      }
    } catch (err) {
      console.error('err', err);
    }
  };

  const init = async (signal: AbortSignal) => {
    try {
      const groupListResponse = await CustomerUrunService.groupList({
        signal: signal,
      });

      if (groupListResponse.data?.data) {
        setGroupList(groupListResponse.data?.data);
        setSelectedService(groupListResponse.data?.data[0].paket_grup_id + '');
      } else {
        throw new Error("Couldn't get data");
      }
    } catch (err) {
      console.error('err', err);
    }
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
                  {groupList.map((groupListItem) => {
                    return (
                      <SelectItem
                        key={groupListItem.paket_grup}
                        value={groupListItem.paket_grup_id + ''}
                      >
                        {groupListItem.paket_grup}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div
          className="px-[1px] overflow-y-auto"
          style={{ height: 'calc(100vh - 244px)' }}
        >
          <Table datas={customerUrunList} columns={columns} />
        </div>
      </RoundContainer>
    </SectionContainer>
  );
};

export default ServiceTable;
