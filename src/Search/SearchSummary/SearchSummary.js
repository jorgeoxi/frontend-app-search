import React from 'react'
import styles from './SearchSummary.module.css';

export default function SearchSummary(props) {
    return (
        <div className={styles.container}>
            <div className={styles["search-result"]}>
                <h1 className='subtitle'>Busqueda: <strong>{props.term}</strong></h1>
                <p>Mostrando 1-20 resultados</p>
            </div>
            <div className={styles.filters}>
                <button className="button">
                    <span className="icon"><i className="fas fa-sliders-h"></i></span>
                    <span>Filtros</span>
                </button>
            </div>
        </div>
    )
}
