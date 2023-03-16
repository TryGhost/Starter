async function getNextPage(url) {
    try {
        const res = await fetch(url);
        
        if (!res.ok) {
            throw new Error('Failed to fetch page')
        }
        
        const nextPageHtml = await res.text();
        const parser = new DOMParser();
        const parsed = parser.parseFromString(nextPageHtml, 'text/html');
        const posts = parsed.querySelectorAll('.post');
        const nextLink = parsed.querySelector('link[rel="next"]')?.getAttribute('href');
        
        return {posts, nextLink}

    } catch (error) {
        throw new Error(error)
    }
}

let link = document.querySelector('link[rel="next"]')?.getAttribute('href');

export default function infiniteScroll() {
    const options = {
       rootMargin: '100px',
    }

    const callback = (entries, observer) => {
        try {
            entries.forEach(entry => {
            
                if (entry.isIntersecting) {
                    
                    if (link) {
                        getNextPage(link).then(({posts, nextLink}) => {
                            posts.forEach(post => {
                                document.querySelector('.gh-postfeed').append(post)
                            })

                            if (nextLink) {
                                link = nextLink;
                                observer.observe(document.querySelector('.post:last-of-type'))
                            } else {
                                observer.disconnect()
                            }
                        })
                    }
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    let observer = new IntersectionObserver(callback, options);

    observer.observe(document.querySelector('.post:last-of-type'))

}