import { ColumnType } from '@/types/table.type';
import classNames from 'classnames';
import Image from 'next/image';
import Cancel from '../common/cancel';
import Status, { StatusProps } from '../common/status';
import Undo from '../common/undo';
import { CustomerUrunList } from '@/types/customer-urun.type';
import Helpers from '@/lib/helpers';

type TableData = {
  datas: CustomerUrunList[];
  columns: ColumnType[];
};

const hizmet_durum_colors = {
  Aktif: 'green',
  Pasif: 'red',
  Beklemede: 'orange',
};

const Table = ({ datas, columns }: TableData) => {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-b-table-stroke text-left">
          {columns.map((column, index) => {
            return (
              <th
                data-id={column.header}
                key={'t-head_' + column.id}
                className={classNames(
                  'text-xs bg-body-s h-[34px] sticky top-0 bg-table-striped',
                  {
                    'pl-6': index === 0,
                    //'pr-6': index === columns.length - 1,
                  },
                )}
              >
                {column.header}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {datas.map((row, index) => {
          const json_properies = Helpers.jsonParse(row.json_ozellik);

          console.log('json_properies', json_properies);

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
                    className="pointer-events-none select-none object-contain"
                    quality={100}
                  />
                  <div>
                    <div className="text-textColor-main">Test</div>
                    <div className="text-textColor-title font-medium">
                      {json_properies.aciklama}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                {`${json_properies.ozellik[0].Disk || ''} ${
                  json_properies.ozellik[0].birim
                }`}
              </td>
              <td>
                {`${json_properies.ozellik[3].RAM || ''} ${
                  json_properies.ozellik[3].birim
                }`}
              </td>
              <td>
                {`${json_properies.ozellik[1].CPU || ''} ${
                  json_properies.ozellik[1].birim
                }`}
              </td>
              <td>
                {`${json_properies.ozellik[2].Port || ''} ${
                  json_properies.ozellik[2].birim
                }`}
              </td>
              <td>{`${row.urun_fiyat} ${row.parabirim} (${row.period_name})`}</td>
              <td>{Helpers.formatDate(row.gelecek_odeme)}</td>
              <td>
                <Status
                  label={row.hizmet_durum}
                  color={
                    hizmet_durum_colors[
                      row.hizmet_durum as keyof typeof hizmet_durum_colors
                    ] as StatusProps['color']
                  }
                />
              </td>
              <td>
                {row.iptal_talep ? (
                  <Undo
                    onClick={() => {
                      console.log('clicked undo for', row);
                    }}
                  />
                ) : (
                  <Cancel
                    onClick={() => {
                      console.log('clicked cancel for', row);
                    }}
                  />
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
