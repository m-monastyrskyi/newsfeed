import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import SinglePost from '../../components/SinglePost'

const IsoHomepage = () => {
    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [loading, setLoading] = useState(true)
    const [hasMoreItems, setHasMoreItems] = useState(true)
    const [loader, setLoader] = useState(null)
    const observerOptions = {
        root: null,
        rootMargin: '20px',
        threshold: 1
    }

    const handleObserver = (entities) => {
        const target = entities[0]
        target.isIntersecting && hasMoreItems && setCurrentPage(page => page + 1)
    }
    const observer = useRef(new IntersectionObserver(handleObserver, observerOptions))

    useEffect(() => {
        const limit = 10
        const url = `http://localhost:4000/posts?_page=${currentPage}&_limit=${limit}`
        if ( currentPage ) {
            setLoading(true)
            axios(url)
                .then(res => {
                    const isLast = currentPage === Math.ceil(res.headers['x-total-count'] / limit)
                    isLast && setHasMoreItems(false)
                    setPosts(prevPosts => [...prevPosts, ...res.data])
                    setLoading(false)
                })
                .catch(err => {
                    alert(err.message)
                    console.error(err)
                    setLoading(false)
                })
        }
    }, [currentPage])

    useEffect(() => {
        const currentElement = loader
        const currentObserver = observer.current

        currentElement && currentObserver.observe(currentElement)

        return () => {
            currentElement && currentObserver.unobserve(currentElement)
        }
    }, [loader])

    return (
        <div className={'container'}>
            <h1 className={'page-description'}>Newsfeed wykorzystujący Intersection Observer</h1>
            <main className={'posts'}>
                {
                    posts.map((post, i) => <SinglePost post={post} key={i}/>)
                }
            </main>
            {
                hasMoreItems && <div ref={setLoader}/>
            }
            {
                loading && <div className={'loading'}/>
            }
        </div>
    )
}

export default IsoHomepage