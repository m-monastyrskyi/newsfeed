import React from 'react'
import './ReadMoreButton.styles.scss'

const ReadMoreButton = ({ url }) => {
    return (
        <div className={"read-more"}>
            <a href={url} className={'button'}>
                Czytaj dalej
            </a>
        </div>
    )
}

export default ReadMoreButton