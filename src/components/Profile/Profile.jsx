import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () =>{
    return(
        <div >
           <div>
               <img src="https://lh3.googleusercontent.com/proxy/_XpisXGgRkttj-m2CLml_k92B2sBsqbrIA5NOChppHphKLc2gm9f72PcGZlQcYItBa03hr2xL6KKacxF3GsguRuNqiAFKm3EwxQ1PezZ5iQR8dtKT1g-aCHAi8k" alt=""/>
           </div>
           <div>ava + description</div>
         <MyPosts />
        </div>
    );
}

export default Profile;
