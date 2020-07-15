import React from 'react';
import styles from './MainDescription.module.css'


const MainDescription: React.FC = () => {

    const descriptionItems = [
        {name: 'class', value: 'standard'},
        {name: 'power', value: '59W'},
        {name: 'luminous', value: '3434Lm'},
        {name: 'warranty', value: '3 year'},
        {name: 'mounting', value: 'yes'},
        {name: 'total', value: '23321 rub'},
    ].map(d => {

        return (
            <div key={d.name} className={styles.description}>
                <div className={styles.descriptionItem}>
                    {d.name}
                </div>

                <div className={styles.descriptionItem}>
                    {d.value}
                </div>
            </div>
        )

    })

    return (
        <div className={styles.descriptionWrap}>
            {descriptionItems}
        </div>
    );
}

export default MainDescription;