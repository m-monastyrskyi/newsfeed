import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import axios from 'axios'
import './Homepage.styles.scss'
import SinglePost from '../../components/SinglePost'

const Homepage = () => {
    const [posts, setPosts] = useState([])
    const [hasMoreItems, setHasMoreItems] = useState(true)

    const getPosts = (page) => {
        const limit = 10
        axios(`http://localhost:4000/posts?_page=${page}&_limit=${limit}`)
            .then(res => {
                const isLast = page === Math.ceil(res.headers['x-total-count'] / limit)
                isLast && setHasMoreItems(false)
                setPosts(prevPosts => [...prevPosts, ...res.data])
            })
            .catch(err => {
                alert(err.message)
                console.error(err)
            })
    }

    return (
        <InfiniteScroll
            pageStart={0}
            loadMore={getPosts}
            hasMore={hasMoreItems}
            loader={<div className={'loading'} key={0}/>}>
            <div className={'container'}>
                <main className={'posts'}>
                    {
                        posts.map((post, i) => <SinglePost post={post} key={i}/>)
                    }
                </main>
            </div>
        </InfiniteScroll>
    )
}

export default Homepage