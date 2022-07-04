import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import { ListGroup, ListGroupItem } from "reactstrap";
import PostAuthor from "./postAuthor";

const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const renderedPosts = posts.map(post => (
        <ListGroupItem key={post.id}>
        <article>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId}/>
            </p>
        </article>
        </ListGroupItem>
    ));
    return (
        <ListGroup style={{width: "500px", margin: "0 auto"}}>
            <h2>Posts</h2>
            {renderedPosts}
        </ListGroup>
    )
}

export default PostsList;