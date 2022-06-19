import React from 'react'
import user1 from '../../assets/anime-boy-1.gif'
import user2 from '../../assets/anime-boy-2.gif'
import './Info.css'

const Info = () => {
    // const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non neque eu orci congue lobortis et non mi. Donec sed ante neque. Donec nec enim tortor. Vivamus finibus tellus tortor, quis egestas arcu rhoncus a. Vestibulum metus libero, finibus eu orci vel, sollicitudin condimentum nisl. Donec non leo et nunc ultricies consequat sit amet eget nibh. Vestibulum vehicula leo mattis pretium vehicula. Sed mollis viverra sagittis. Sed ac velit massa. Ut quis tristique mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";
    const basilText = "I picked up a book on programming at the age of 14 and I was fascinated with the power programming gave me. I was amazed by the idea of creating something with knowledge alone. The power to start companies without investing anything. All of these factors got me hooked to the programming world. I have experience in HTML, CSS, JavaScript, and various open-source frameworks such as NodeJS and ReactJS. I am skilled in the use of these frameworks to develop web applications based on Single Page Applications (SPA) architectures. I also possess skills in React dependencies. I used Redux, Hooks to build a Full Stack Project.";
    const zainText = "A student at NUST, Islamabad pursuing a major in Software Engineering currently exploring different fields in Computer Science such as Web Development and Machine Learning as well as learning creative skills such as Video Editing and Graphic Design. I try to find the opportunity to learn in every situation and strongly believe that learning is a continuous process. I love networking and collaborating with people as it allows me learn from them and grow as a person. I am gay I am gay I am gay I am gay I am gay I am gay I am gay I am gay I am gay I am gay I am gay I am gay I am gay I am gay I am gay I am gay I am gay I."
    return (
        <div className="info-container">
            <div className="info-user-container">
                <img className="info-animated-img-1" src={user1} alt="User1"/>
                <h4>Zain Sajid</h4><p>{zainText}</p>
            </div>
            <div className="info-user-container">
                <img className="info-animated-img-2" src={user2} alt="User2"/>
                <h4>Basil Yusuf</h4><p>{basilText}</p>
            </div>
        </div>
    )
}

export default Info;