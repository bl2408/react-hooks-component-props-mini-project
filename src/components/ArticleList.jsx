import Article from "./Article";

function ArticleList({posts}){

    const getPosts = posts.map(post=><Article 
        key={post.title} 
        date={post.date} 
        title = {post.title}
        preview = {post.preview}
        minutes = {post.minutes}
        />
    );

    return (
        <main>
            {getPosts}
        </main>
    );
}

export default ArticleList;