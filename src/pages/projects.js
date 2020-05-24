import React from 'react'

import devNews from '../assets/devnews.jpg'
import dateNight from '../assets/date-night.jpg'
import devSkills from '../assets/devskills.jpg'

export default function Projects() {
    return <div className="main-text">
        <h1>Here are some recent projects I've worked on.</h1>
        <div className="project">
            <div className="project-content">
                <h3>Dev News</h3>
                <p>DevNews is a news aggregator that takes the top stories from HackerNews, various tech Medium publications and a few subreddits so I don't have to switch between tabs on my mobile during my commute to work.</p>
                <a className="link" target="_blank" rel="noopener noreferrer" href="http://devnews.cameocodes.com/">See it live here.</a>
            </div>
            <img className="project-img" src={devNews} alt="DevNews Screenshot"></img>
        </div>
        <div className="project">
            <div className="project-content">
                <h3>Date Night Idea Generator</h3>
                <p>After constantly running out of ideas for things to do on date night with my husband, I created a generator to take the thinking out of it.</p>
                <a className="link" target="_blank" rel="noopener noreferrer" href="http://datenight.cameocodes.com/">See it live here.</a>
            </div>
            <img className="project-img" src={dateNight} alt="Date Night Idea Generator screenshot"></img>
        </div>
        <div className="project">
            <div className="project-content">
                <h3>Skills Assessor</h3>
                <p>DevSkills is my attempt at replicating a physical goal setting and planning exercise.</p>
                <a className="link" target="_blank" rel="noopener noreferrer" href="https://devskills.cameocodes.com/">See it live here.</a>
            </div>
            <img className="project-img" src={devSkills} alt="Skills Assessor screenshot"></img>
        </div>
    </div>

}