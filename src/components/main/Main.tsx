import React from 'react';
import styles from './Main.module.css'
import MainImage from "./MainImage/MainImage";
import MainInfo from "./MainInfo/MainInfo";
import {imgGroupType, SelectorType} from "../../state/constructorReducer";


type PropsType = {
    onSelectorClick: (e: React.MouseEvent<HTMLDivElement>) => void
    selectorId: string | undefined
    data: Array<SelectorType>
    onImgSelectorClick: (e: React.MouseEvent<HTMLDivElement>) => void
    currentImg: imgGroupType | undefined
}

const Main: React.FC<PropsType> = ({
                                                onSelectorClick,
                                                selectorId,
                                                data,
                                                onImgSelectorClick,
                                                currentImg
                                            }) => {






    return (
        <div className={styles.main}>

            <MainImage
                onImgSelectorClick={onImgSelectorClick}
                currentImg={currentImg}
            />
            <MainInfo
                data={data}
                onSelectorClick={onSelectorClick}
                selectorId={selectorId}
            />

        </div>
    );
}

export default Main;