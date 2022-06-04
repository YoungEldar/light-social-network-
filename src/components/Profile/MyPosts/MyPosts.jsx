import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () =>{
    return(
        <div>
            <div>my post</div>
           <div>
               <textarea></textarea>
               <button>add post</button>
           </div>
           <div className={classes.post}>
                <Post  message='hi , bich' like='166' />
                <Post message='fuck you niga, this my dog bich' like='12' />

           </div>         
        </div>       
    );
}

export default MyPosts;
