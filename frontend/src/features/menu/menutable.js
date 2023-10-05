import React from 'react';

const Menutable = ({ items }) => {
  return (
    <table className="custom-table d-flex justify-content-center">
      <tbody className='d-flex flex-column'>
        {items && items.map((item, index) => (
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