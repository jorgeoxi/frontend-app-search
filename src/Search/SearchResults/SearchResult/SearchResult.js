import React from 'react'
import styles from './SearchResult.module.css';

export  function SearchResult() {
    return (
        <div className={styles["search-result"]}>
             <img src='https://via.placeholder.com/210' alt='user' className={styles["business-image"]}/>
             <div className={styles["business-info"]}>
                 <h2 className="subtitle">Prueba</h2>
                 <p>Company</p>
                 <p>Active User</p>
                 <p><span className="tag">Tab Label</span> <span className="tag">another one</span></p>
             </div>
             <div className={styles["contact-info"]}>
             <p>Phone: 34234324</p>
             <p>email: jorge@jorge.com</p>
             <p>addess: Cipreses</p>
             </div>
             <div>

             </div>
        </div>
    );
}
