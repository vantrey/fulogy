import React from 'react';
import styles from './MainInfo.module.css'
import MainDescription from "./MainDescription/MainDescription";
import MainTitle from "./MainTitle";
import MainSelector from "./MainSelector";
import {SelectorType} from "../../../state/constructorReducer";


type PropsType = {
    onSelectorClick: (e: React.MouseEvent<HTMLDivElement>) => void
    selectorId: string | undefined
    data: Array<SelectorType>
}

const MainInfo: React.FC<PropsType> = ({
                                           onSelectorClick,
                                           selectorId,
                                           data,
                                       }) => {

    const selectorsData = data.map(d => {
        return (
            <div key={d.id}>
                <MainSelector
                    onSelectorClick={onSelectorClick}
                    id={d.id}
                    selectorId={selectorId}
                />
            </div>
        )
    })

    return (

        <div className={styles.mainInfo}>

            <MainDescription/>
            <MainTitle/>

            <div className={styles.selectorWrap}>
                {selectorsData}
            </div>


        </div>
    );
}

export default MainInfo;