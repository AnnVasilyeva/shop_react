import React, {useEffect} from 'react';
import Catalog from './Catalog/Catalog';
import './main.css';

function Main () {
  useEffect(() => {
    
  }, [])
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <div className="banner">
            <h2 className="banner-header">К весне готовы!</h2>
          </div>
         <Catalog/>
        </div>
      </div>
    </main>
  )
}

export default Main;