import React from 'react';

const Menutable = ({ data }) => {
  return (
    <table className="custom-table d-flex justify-content-center">
      <tbody className='d-flex flex-column'>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>€{parseFloat(item.price).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Menutable;
