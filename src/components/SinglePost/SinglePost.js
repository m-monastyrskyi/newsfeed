import React from 'react'
import { parseISO, format } from 'date-fns'
import { pl } from 'date-fns/locale'
import ReadMoreButton from '../ReadMoreButton'
import './SinglePost.styles.scss'

const SinglePost = ({ post }) => {
    const { title, thumb, date, excerpt, url } = post
    const formattedDate = format(parseISO(date), 'dd MMMM yyyy', {
        locale: pl,
    });

    return (
        <article className="post">
            <a href={url} className="post__link"/>
            <img src={thumb}
                 alt={title}
                 className={'post__image'}/>
            <div className={'post__text-wrapper'}>
                <h2 className={'post__title'}>{title}</h2>
                <div className={'post__date'}>{formattedDate}</div>
                <div className={'post__details-wrapper'}>
                    <p className={'post__excerpt'}>{excerpt}</p>
                    <ReadMoreButton url={url}/>
                </div>
            </div>
        </article>
    )
}

export default SinglePost