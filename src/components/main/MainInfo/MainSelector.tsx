import React from 'react';
import styles from './MainInfo.module.css'

type PropsType = {
    onSelectorClick: (e: React.MouseEvent<HTMLDivElement>) => void
    id: string
    selectorId: string | undefined
}

const MainSelector: React.FC<PropsType> = ({
                                               onSelectorClick,
                                               id,
                                               selectorId,

                                           }) => {

    const mainSelectorClass = id === selectorId ?
        `${styles.active} ${styles.mainSelector}` :
        styles.mainSelector;

    return (
        <div
            className={mainSelectorClass}
            id={id}
            onClick={onSelectorClick}
        >
        </div>
    );
}

export default MainSelector;