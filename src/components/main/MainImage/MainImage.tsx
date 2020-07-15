import React from 'react';
import styles from './MainImage.module.css'
import {imgGroupType} from "../../../state/constructorReducer";


type PropsType = {
    currentImg: imgGroupType | undefined
    onImgSelectorClick: (e: React.MouseEvent<HTMLDivElement>) => void
}

const MainImage: React.FC<PropsType> = ({
                                            currentImg,
                                            onImgSelectorClick,
                                        }) => {


    return (

        <div className={styles.mainImage}>
            {currentImg?.images}

            <div className={styles.switcherWrap}>
                <div
                    onClick={onImgSelectorClick}
                    className={styles.switcher}
                    id='1'>

                </div>
                <div
                    onClick={onImgSelectorClick}
                    className={styles.switcher}
                    id='2'>

                </div>
                <div onClick={onImgSelectorClick}
                     className={styles.switcher}
                     id='3'>

                </div>
            </div>

        </div>
    );
}

export default MainImage;