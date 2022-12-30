const GuestPostList = ({ posts }) => {
    return (
        <section className="Posts">
            {
                posts.map(({ id, author, description, price, location, willDeliver, title })=> (
                    <div key={id}>
                        <h2>{title}</h2>
                        {description ? <h4>{description}</h4> : null}
                        {price ? <h4>Price: {price}</h4> : null}
                        {author ? <h4>Seller: {author.username}</h4> : null}
                        {location ? <h4>Location: {location}</h4> : null}
                        {willDeliver ? <h4>Willing to Deliver? Yes</h4> : <h4>Willing to Deliver? No</h4>}
                    </div>

                ))
            }
        </section>
    )
}

export default GuestPostList;