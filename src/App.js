import React from 'react';
import Counter from './counters/Counter';
import AltCounter from './counters/AltCounter';
import AltContactDialer from './contact_dialer/AltContactDialer';
import ContactDialer from './contact_dialer/ContactDialer';
import User from './pagination_table/User';
import AltUser from './pagination_table/alternative/AltUser';
import './App.css';

function App() {
  const A = ['sander', 'amy', 'ann', 'michael'];
  const B = ['8999999999', '77778888999', '122345678', '9911234567'];
  const P = '12';

  return (
    <div>
      <div>
        <h2>Task 1</h2>
        <div>
          <h3>Counter</h3>
          <Counter />
        </div>
        <div>
          <h3>Alternative Counter</h3>
          <AltCounter />
        </div>
      </div>
      <div >
        <h2>Task 2</h2>
        <div>
          <h3>ContactDialer</h3>
          <ContactDialer A={A} B={B} P={P}/>
        </div>
        <div>
          <h3>Alternative ContactDialer</h3>
          <AltContactDialer contacts={A} phoneNumbers={B}/>
        </div>
      </div>
      <div>
        <h2>Task 3</h2>
        <div>
          <h3>Pagination Table</h3>
          <User />
        </div>
        <div>
          <h3>Alternative Pagination Table</h3>
          <AltUser />
        </div>
      </div>
    </div>
  );
}

export default App;
