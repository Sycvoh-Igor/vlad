import React, { memo, useState } from 'react';
import styles from './Paginator.module.scss'
import { PropsType } from './types';



const Paginator: React.FC<PropsType> = (props) => {
    const [portionNumber, setPortionNumber] = useState(1)

    const pagesCount = Math.ceil(props.total / props.pageSize)
    const pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / props.portionSize)
    const leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    const rigthPortionPageNumber = portionNumber * props.portionSize

    return (
        <div className={styles.pagination}>
            {portionNumber > 1 &&
                <button className='btn btn--pagination' onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button>}
            {pages.filter(p => p >= leftPortionPageNumber && p <= rigthPortionPageNumber)
                .map((p) => {
                    return <span className={props.currentPage === p ? styles.page__selected : styles.page}
                        onClick={(e) => { props.onPageChanged(p) }} key={p}>{p}</span>
                })}
            {portionCount > portionNumber &&
                <button className='btn btn--pagination' onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>}
        </div>
    )
}

export default memo(Paginator);