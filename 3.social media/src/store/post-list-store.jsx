import { createContext, useReducer } from "react";
export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === "DELETE_POST") {
        newPostList = currPostList.filter((post) => post.id !== action.payload.postId);
    } else if(action.type === "ADD_POST") {
        newPostList = [ action.payload, ...currPostList];
    }
    return newPostList;
};

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

    const addPost = (userId, postTitle, postBody, reactions, tags) => {
      dispatchPostList({
        type: 'ADD_POST',
        payload: {
            id:Date.now(),
            title: postTitle,
            body: postBody, 
            reactions: reactions,
            userId: userId,
            tags: tags,
    }});
    };

    const deletePost = (postId) => {
        dispatchPostList({
            type: 'DELETE_POST',
            payload: {
                postId,
            }
        });
    };


    return (
        <PostList.Provider value={{ postList, addPost, deletePost }}>
            {children}
        </PostList.Provider>
    );
};

const DEFAULT_POST_LIST = [{
    id: "1",
    title: "Going to mumbai",
    body: "Hi friends, I am going to mumbai for a week. Hope to enjoy a lot. Peace out.",
    reactions: 2,
    userId: "user-9",
    tags: ["travel", "mumbai", "vacation"]
},

{
    id: "2",
    title: "Pass ho Bhai",
    body: "4 saal ki masti  k baad bhi ho gye hain pass. hard To Believe.",
    reactions: 15,
    userId: "user-145",
    tags: ["college", "passout", "Graduating"]
},

];

export default PostListProvider;