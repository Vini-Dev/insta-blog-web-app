/* eslint-disable react/jsx-key */
import { FC, useEffect } from 'react';

import {
  HiChevronLeft,
  HiChevronDoubleLeft,
  HiChevronRight,
  HiChevronDoubleRight,
} from 'react-icons/hi';
import PulseLoader from 'react-spinners/PulseLoader';
import { useTable, usePagination } from 'react-table';
import { theme } from 'src/styles/themes/light';

import {
  Button,
  Container,
  Controls,
  Option,
  Pagination,
  Select,
  Span,
  TableHtml,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from './styles';

export interface FetchDataParams {
  pageIndex: number;
  pageSize: number;
}

interface MyTableProps {
  columns: any;
  data: { [key: string]: any }[];
  loading: boolean;
  onChangePage({ pageIndex, pageSize }: FetchDataParams): void;
  totalData: number;
  totalPages: number;
}

const Table: FC<MyTableProps> = ({
  columns,
  data,
  loading,
  onChangePage,
  totalData,
  totalPages: controlledPageCount,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    // Get the state from the instance
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
      manualPagination: true,
      pageCount: controlledPageCount,
    },
    usePagination
  );

  useEffect(() => {
    onChangePage({ pageIndex, pageSize });
  }, [onChangePage, pageIndex, pageSize]);

  return (
    <Container>
      {/* <pre>
        <code>
          {JSON.stringify(
            {
              pageIndex,
              pageSize,
              pageCount,
              canNextPage,
              canPreviousPage,
            },
            null,
            2
          )}
        </code>
      </pre> */}
      <TableHtml {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                  );
                })}
              </Tr>
            );
          })}
          <Tr>
            {loading ? (
              // Use our custom loading state to show a loading indicator
              <Td colSpan={10000}>
                <PulseLoader size={10} color={theme.primary} />
              </Td>
            ) : (
              <Td colSpan={10000}>
                Mostrando de {pageSize * pageIndex + 1} até{' '}
                {pageSize * (pageIndex + 1)}. Total de {totalData} resultado(s)
              </Td>
            )}
          </Tr>
        </Tbody>
      </TableHtml>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <Pagination className="pagination">
        <Controls>
          <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            <HiChevronDoubleLeft />
          </Button>
          <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
            <HiChevronLeft />
          </Button>
          <Button onClick={() => nextPage()} disabled={!canNextPage}>
            <HiChevronRight />
          </Button>
          <Button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            <HiChevronDoubleRight />
          </Button>
          <Span>
            Página {pageIndex + 1} de {pageOptions.length}
          </Span>
          {/* <span>
            | Ir para página:{' '}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: '100px' }}
            />
          </span>{' '} */}
          <Select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <Option key={pageSize} value={pageSize}>
                Mostrar {pageSize}
              </Option>
            ))}
          </Select>
        </Controls>
      </Pagination>
    </Container>
  );
};

export default Table;
