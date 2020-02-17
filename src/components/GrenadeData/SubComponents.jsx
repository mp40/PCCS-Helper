// import React from 'react';

// const tableRowClassNames = ['grenadeDataRowOne', 'grenadeDataRowTwo', 'grenadeDataRowThree', 'grenadeDataRowFour', 'grenadeDataRowFive'];

// const renderGrenade = (dataForRender, type) => (
//   <tbody key="tbody" className="greandeTableBody">
//     {dataForRender.map((row, index) => (
//       <tr className={tableRowClassNames[index]} key={`${tableRowClassNames[index]}`}>
//         <td style={{ paddingLeft: '3px' }}>{row[0]}</td>
//         <td className="grenadeTableDataDivide">{row[1]}</td>
//         <td className={`grenadeTable${type}Keys`}>{row[2]}</td>
//         {row[3].map((value, dex) => (
//           // eslint-disable-next-line react/no-array-index-key
//           <td className={`grenadeTable${type}Data`} key={dex}>{value}</td>
//         ))}
//       </tr>
//     ))}
//   </tbody>
// );

// export const renderWilliePete = (dataForRender) => renderGrenade(dataForRender, 'WilliePete');
// export const renderStandardGrenade = (dataForRender) => renderGrenade(dataForRender, 'Explosive');
