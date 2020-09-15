import React, { memo, useState } from 'react';
import styles from './Paginator.module.scss'

type PropsType = {
    total: number,
    pageSize: number,
    currentPage: number,
    portionSize: number,
    onPageChanged: (pageNumber: number) => void
}

let Paginator: React.FC<PropsType> = (props) => {
    const [portionNumber, setPortionNumber] = useState(1)

    let pagesCount = Math.ceil(props.total / props.pageSize)
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize)
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    let rigthPortionPageNumber = portionNumber * props.portionSize

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