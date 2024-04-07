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
      page: "/Defect Arrival Rate",
      pageviews: "508,837 (7.74%)",
      uniquepageview: "574,332 (15.33%)",
      avgtimeonpage: "00:05:24",
      entrance: "802,873 (16.75%)",
      exit: "76.13%",
      pagevalue: "$1,093",
    },
    {
      id: 2,
      page: "/Fixed Rate",
      pageviews: "676,659 (10.29%)",
      uniquepageview: "456,792 (13.93%)",
      avgtimeonpage: "00:04:36",
      entrance: "802,873 (16.75%)",
      exit: "41.54%",
      pagevalue: "$298",
    },
    {
      id: 3,
      page: "/Cycle time",
      pageviews: "740,702 (13.46%)",
      uniquepageview: "405,860 (13.25%)",
      avgtimeonpage: "00:04:12",
      entrance: "802,873 (16.75%)",
      exit: "16.2%",
      pagevalue: "$1,687",
    },
    {
      id: 4,
      page: "/Lead Time",
      pageviews: "803,792 (14.39%)",
      uniquepageview: "340, 765 (0.01%)",
      avgtimeonpage: "00:04:11",
      entrance: "802,873 (16.75%)",
      exit: "27.4%",
      pagevalue: "$1,576",
    },
    {
      id: 5,
      page: "/new features",
      pageviews: "872,337 (15.82%)",
      uniquepageview: "200.786  (7.93%)",
      avgtimeonpage: "00:02:56",
      entrance: "802,873 (16.75%)",
      exit: "28.89%",
      pagevalue: "$1,000",
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
            <div key="filter" className='flex items-center w-full justify-between cursor-pointer text-black'>
              <div className='flex items-center justify-evenly border border-3 rounded-lg border-black'>
                <h> Pageviews</h>
              </div>
              <div className='flex space-x-6'>
                <div className='border border-3 rounded-lg border-black'>
                  <h>Today | Yestarday | Week | Quarter | Year</h>
                </div>
                <div className='flex border rounded border-solid border-black hover:bg-gray-200'>
                  <span className='inline-block pr-2'>Select Period</span>
                  <img src={downArrow} alt="down arrow" className='w-[7.9px] h-[7.9px] mt-2'/>
                </div>
              </div>
            </div>


          ]}
        />
      </div>
    </div>
  );
};

export default DataTable;
