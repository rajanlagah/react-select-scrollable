import React from 'react'

import styles from './styles.css'

const SimpleModal = ({ visibleData, classNameForModal,handleItemClick, setModelClose, data }) => (

    <div className={classNameForModal}>
        <select value={visibleData} disabled />
        <div>
            <div className={`${styles.inputModal}  ${styles.outterContiner}`}>
                <div className={styles.optionsContiner} id='modal' >
                    <span className={styles.listOfOptions}>
                        {data && data.map((item, index) => <a className="elemets" href='#' value={item.value} onClick={handleItemClick}>{item.displayName}</a>)}
                    </span>
                </div>
                <button onClick={() => setModelClose(false)} className={`${styles.modalCloseButton}`}>cancel</button>
            </div>
        </div>
    </div>
)

export default SimpleModal