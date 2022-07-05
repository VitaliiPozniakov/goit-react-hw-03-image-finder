import React from 'react';
import { Spinner } from './Loader.styled';

// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import { Circles } from  'react-loader-spinner'

const Loader = () => {
  return (
    /* <>
<Circles color="#00BFFF" height={80} width={80}/>
</> */
    <div role="alert">
      <Spinner />
    </div>
  );
};

export default Loader;
