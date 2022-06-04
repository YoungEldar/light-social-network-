import React from 'react';
import classes from './Post.module.css';

const Post = (props) =>{
    return(
        <div className={classes.item}>
            <img src='https://sun9-60.userapi.com/c847218/v847218959/748a/A-Dlp5RYorQ.jpg' />
            <span>{props.message}</span>
            <p >like {props.like}</p>       
        </div>
    );
}

export default Post;
