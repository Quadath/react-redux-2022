import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import { id } from "date-fns/locale";

const initialState = [
    { id: '1', title: 'Learning Redux Toolkit', content: "I 've heard good thing", date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0
    }},
    { id: '2', title: 'Slices...', content: "The more i say Slice, the more i", date: sub(new Date(), { minutes: 15 }).toISOString(),
    reactions: {
        thumbsUp: 4,
        wow: 0,
        heart: 2,
        rocket: 0,
        coffee: 1
    }}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer (state, action) {
                state.unshift(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title, 
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }
            }
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload;
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++  
            }
        }
    }
})
export const selectAllPosts = (state) => state.posts;
export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer
