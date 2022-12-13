import "./styles.css";
import React from "react";
import {useState} from 'react';
import DataTable from "react-data-table-component";


export default function App() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  };

  const columns = [
    {
      name: "id",
      selector: (row) => row.teamID,
      sortable: true,

    },
    {
      name: "first_name",
      selector: (row) => row.firstName,
      sortable: true,
      grow: 2,
    },{
      name: "last_name",
      selector: (row) => row.lastName,
       
    },
    {
      name: "email",
      selector: (row) => row.Email,
      grow: 2,
    },
    {
      name: "gender",
      selector: (row) => row.Gender,
    },
    {
      name: "ip_address",
      selector: (row) => row.IP,
    },
    {
      name: "airport code",
      selector: (row) => row.airport_code,
    },
    {
      name: "time",
      selector: (row) => row.time,
      sortable: true
    },
    {
      name: "status",
      selector: (row) => row.Status,
      conditionalCellStyles: [
        			{
        				when: row => row.Status === "FALSE",
        				style: {
        					color: 'red',
        				},
        			},
              {
        				when: row => row.Status === "TRUE",
        				style: {
        					color: 'green',
        				},
        			}
            ]
    },
    {
      name: "mobile",
      selector: (row) => row.mobileNo,
      grow: 2,
    },
    {
      name: "area",
      selector: (row) => row.area,
      grow: 2,
    },
    {
      name: "Action",
      selector: (row) => <button className="btn btn-primary"  
      
      style={{
        backgroundColor: isActive ? 'salmon' : '',
        color: isActive ? 'white' : '',
      }}
          onClick={handleClick}>change color</button>,
          grow: 2,
    },
    
    {
      name: "show",
      selector: (row) => row.show,
      conditionalCellStyles: [
        {
          when: row => row.show === "FALSE",
          style: {
            color: 'red',
          },
        },
        {
          when: row => row.show === "TRUE",
          style: {
            color: 'green',
          },
        }
      ]
     
    },{
      name: "edit",
      selector: (row) => row.edit,
      conditionalCellStyles: [
        {
          when: row => row.edit === "FALSE",
          style: {
            color: 'red',
          },
        },
        {
          when: row => row.edit === "TRUE",
          style: {
            color: 'green',
          },
        }
      ]
    }
  ];

  const data = [
    {
      teamID:1,
      firstName:"Lonnie",
      lastName:"O' Connell",
      Email:"loconnell0@hao123.com",
      Gender:"Male",
      IP:"163.42.164.152",
      airport_code:"OGO",
      time:"7/10/2022",
      Status:"TRUE",
      mobileNo:7074629538,
      area:"9 Coleman Trail",
      show:"FALSE",
      edit:"FALSE"

    },
    {
      
      teamID:2,
      firstName:"Nikolos",
      lastName:"Botler",
      Email:"nbotler1@wikipedia.org",
      Gender:"Male",
      IP:"116.251.170.231",
      airport_code:"CBB",
      time:"12/25/2021",
      Status:"FALSE",
      mobileNo:2403169224,
      area:"6545 Waxwing Road",
      show:"FALSE",
      edit:"FALSE"

    },
    {
      teamID:3,
      firstName:"Burgess",
      lastName:"Caddens",
      Email:"bcaddens2@accuweather.com",
      Gender:"Polygender",
      IP:"126.177.211.243",
      airport_code:"UKS",
      time:"2/24/2022",
      Status:"TRUE",
      mobileNo:4357494095,
      area:"49260 Golf Course Court",
      show:"FALSE",
      edit:"TRUE"
    },
    {
      teamID:4,
      firstName:"Elissa",
      lastName:"Lesslie",
      Email:"elesslie3@blog.com",
      Gender:"Female",
      IP:"163.18.115.96",
      airport_code:"SFE",
      time:"3/13/2022",
      Status:"FALSE",
      mobileNo:8779920858,
      area:"65014 Gulseth Trail",
      show:"FALSE",
      edit:"FALSE"
    },
    {
      teamID:5,
      firstName:"Donaugh",
      lastName:"Nusche",
      Email:"dnusche4@newsvine.com",
      Gender:"Male",
      IP:"63.202.238.236",
      airport_code:"VAW",
      time:"6/2/2022",
      Status:"TRUE",
      mobileNo:4197779236,
      area:"047 Anzinger Terrace",
      show:"TRUE",
      edit:"FALSE"
    },
    {
      teamID:6,
      firstName:"Guillaume",
      lastName:"Edgcumbe",
      Email:"gedgcumbe5@ycombinator.com",
      Gender:"Male",
      IP:"134.249.161.241",
      airport_code:"NOV",
      time:"11/24/2022",
      Status:"TRUE",
      mobileNo:1001872648,
      area:"262 Spohn Trail",
      show:"FALSE",
      edit:"FALSE"
    },
    {
      teamID:7,
      firstName:"Berti",
      lastName:"Coldbath",
      Email:"bcoldbath6@un.org",
      Gender:"Male",
      IP:"130.30.122.132",
      airport_code:"PHK",
      time:"6/8/2022",
      Status:"TRUE",
      mobileNo:2929257639,
      area:"5167 Surrey Junction",
      show:"TRUE",
      edit:"TRUE"
    },
    {
      teamID:8,
      firstName:"Daune",
      lastName:"Brumen",
      Email:"dbrumen7@si.edu",
      Gender:"Female",
      IP:"250.92.132.133",
      airport_code:"ZMH",
      time:"8/17/2022",
      Status:"FALSE",
      mobileNo:4676734051,
      area:"3076 Toban Avenue",
      show:"FALSE",
      edit:"FALSE"
    },
    {
      teamID:9,
      firstName:"Aigneis",
      lastName:"De Ruel",
      Email:"aderuel8@unicef.org",
      Gender:"Female",
      IP:"99.140.129.80",
      airport_code:"HUN",
      time:"8/31/2022",
      Status:"FALSE",
      mobileNo:1929516084,
      area:"6 Union Drive",
      show:"TRUE",
      edit:"TRUE"
    },
    {
      teamID:10,
      firstName:"Khalil",
      lastName:"McQuorkel",
      Email:"kmcquorkel9@zdnet.com",
      Gender:"Male",
      IP:"172.193.34.60",
      airport_code:"CSA",
      time:"10/25/2022",
      Status:"FALSE",
      mobileNo:2948989568,
      area:"708 Straubel Pass",
      show:"FALSE",
      edit:"FALSE"
    },
    {
      teamID:11,
      firstName:"Lonnie",
      lastName:"O' Connell",
      Email:"loconnell0@hao123.com",
      Gender:"Male",
      IP:"163.42.164.152",
      airport_code:"OGO",
      time:"7/10/2022",
      Status:"TRUE",
      mobileNo:7074629538,
      area:"9 Coleman Trail",
      show:"FALSE",
      edit:"FALSE"

    },
    {
      teamID:12,
      firstName:"Aigneis",
      lastName:"De Ruel",
      Email:"aderuel8@unicef.org",
      Gender:"Female",
      IP:"99.140.129.80",
      airport_code:"HUN",
      time:"8/31/2022",
      Status:"FALSE",
      mobileNo:1929516084,
      area:"6 Union Drive",
      show:"TRUE",
      edit:"TRUE"
    },
    {
      teamID:13,
      firstName:"Khalil",
      lastName:"McQuorkel",
      Email:"kmcquorkel9@zdnet.com",
      Gender:"Male",
      IP:"172.193.34.60",
      airport_code:"CSA",
      time:"10/25/2022",
      Status:"FALSE",
      mobileNo:2948989568,
      area:"708 Straubel Pass",
      show:"FALSE",
      edit:"FALSE"
    },

    
    
  ];
  return (
    <div className="App">
      <DataTable
        title="data table react component"
        columns={columns}
        data={data}
        responsive
      />
     
    </div>
  );
}
