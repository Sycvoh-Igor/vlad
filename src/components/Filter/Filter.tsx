import React, {memo} from 'react'
import styles from './Filter.module.scss'
import { PropsType } from './types';

let Filter: React.FC<PropsType> = ({ items, filterOption }) => {
    const [popUp, setPopUp] = React.useState(false)
    const refSort = React.useRef(null)


    const activeLabel = filterOption.name
    // const activeLabel = ensure(items.find((obj) => obj.type === filterOption.name)).name

    // function ensure<T>(argument: T | undefined | null, message: string = 'This value was promised to be there.'): T {
    //     if (argument === undefined || argument === null) {
    //         throw new TypeError(message);
    //     }
    //     return argument;
    // }

    const togglePopUp = () => {
        setPopUp(!popUp)
    }

    const SelectSort = (type: string) => {
        // if (props.onClickFilterBy) {
        //     props.onClickFilterBy(type)
        // }
        setPopUp(false)
    }

    const handleOutsideClick = (event: any) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(refSort.current)) {
            setPopUp(false)
        };
    }

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    }, [])

    return (
        <div className={styles.root}>
            <div className={styles.root__popup} ref={refSort}>
                <b>Сортировка по:</b>
                <span onClick={togglePopUp}>{activeLabel}</span>
            </div>
            {popUp &&
                <ul className={styles.root__items}>
                    {items.map((obj) => {
                        return (
                            <li className={styles.root__link}
                                onClick={() => SelectSort(obj.type)} key={`${obj.name}`}>{obj.name}</li>
                        )
                    })}
                </ul>
            }
        </div>
    )
}

export default memo(Filter)
