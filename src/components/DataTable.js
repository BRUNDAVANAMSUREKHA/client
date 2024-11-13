// src/components/DataTable.js
import React, { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import { motion } from 'framer-motion';

const DataTable = ({ data }) => {
  const columns = useMemo(
    () => [
      { Header: 'Product Name', accessor: 'name' },
      { Header: 'Type', accessor: 'type' },
      { Header: 'Value', accessor: 'value' },
      { Header: 'Quality', accessor: 'quality' },
      { Header: 'District Imported', accessor: 'districtImported' },
      { Header: 'Country', accessor: 'country' },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  return (
    <motion.table
      {...getTableProps()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </motion.table>
  );
};

export default DataTable;
