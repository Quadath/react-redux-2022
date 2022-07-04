import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import { ListGroup, ListGroupItem } from "reactstrap";
import PostAuthor from "./postAuthor";
import TimeAgo from "./timeAgo";
import ReactionButtons from "./reactionButtons";

const PostsList = () => {
    const posts = useSelector(selectAllPosts)
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map(post => (
        <ListGroupItem key={post.id}>
        <article>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId}/>
                <TimeAgo timestamp={post.date}/>
            </p>
            <ReactionButtons post={post}/>
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