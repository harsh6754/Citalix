import React, { useState } from 'react';
import DataTables from 'react-data-table-component';
import downArrow from '../assests/downArrow.png'

const DataTable = () => {
  const [filterText, setFilterText] = useState('');

  const handleFilter = (e) => {
    setFilterText(e.target.value);
  };

  const columns = [
    {
      name: "Page",
      selector: (row) => row.page,
      sortable: true,
    },
    {
      name: "Pageviews",
      selector: (row) => row.pageviews,
      sortable: true,
    },
    {
      name: "Unique Pageview",
      selector: (row) => row.uniquepageview,
      sortable: true,
    },
    {
      name: "Avg Time on Page",
      selector: (row) => row.avgtimeonpage,
      sortable: true,
    },
    {
      name: "Entrance",
      selector: (row) => row.entrance,
      sortable: true,
    },
    {
      name: "% Exit",
      selector: (row) => row.exit,
      sortable: true,
    },
    {
      name: "Page Value",
      selector: (row) => row.pagevalue,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      page: "",
      pageviews: "",
      uniquepageview: "",
      avgtimeonpage: "",
      entrance: "",
      exit: "",
      pagevalue: "",
    },
    {
      id: 2,
      page: "",
      pageviews: "",
      uniquepageview: "",
      avgtimeonpage: "",
      entrance: "",
      exit: "",
      pagevalue: "",
    },
    {
      id: 3,
      page: "",
      pageviews: "",
      uniquepageview: "",
      avgtimeonpage: "",
      entrance: "",
      exit: "",
      pagevalue: "",
    },
    {
      id: 4,
      page: "",
      pageviews: "",
      uniquepageview: "",
      avgtimeonpage: "",
      entrance: "",
      exit: "",
      pagevalue: "",
    },
    {
      id: 5,
      page: "",
      pageviews: "",
      uniquepageview: "",
      avgtimeonpage: "",
      entrance: "",
      exit: "",
      pagevalue: "",
    },
    
  ];

  const customStyles = {
    headRow: {
      style: {
        minHeight: '40px',
      },
    },
    headCells: {
      style: {
        fontSize: '14px',
      },
    },
    rows: {
      style: {
        minHeight: '48px', // Adds a minimum height to the rows
      },
    },
  };

  return (
    <div className='flex space-x-9 items-center justify-evenly w-full border rounded-md'>
      <div className='container'>
      
        <DataTables
        
          columns={columns}
          data={data}
          customStyles={customStyles}
          selectableRows
          fixedHeader
          pagination
          onFilter={(e) => setFilterText(e.target.value)}
          subHeader
          subHeaderComponent={[
            <div key="filter"
            className='flex space-x-6'>
            <div className='border border-3 rounded-lg border-black '>
                 <h>Today | Yestarday | Week | Quarter | Year</h>
              </div>
              <div
                className='flex border rounded border-solid border-black'
              >
              Select Period
              <img src={downArrow} alt="down arrow" className='w-[7.9px] h-[7.9px] mt-2' />
              </div>
            </div>
            
          ]}
        />
      </div>
    </div>
  );
};

export default DataTable;
