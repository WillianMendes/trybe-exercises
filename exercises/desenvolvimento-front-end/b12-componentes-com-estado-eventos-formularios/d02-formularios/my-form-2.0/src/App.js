import React from 'react';
import Form from './form/form';
import '../node_modules/@popperjs/core/dist/esm/popper';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';

function App() {
  return (
    <div className="container mt-3">
      <Form />
    </div>
  );
}

export default App;
