import React from "react";
import DocumentTitle from 'react-document-title';
import 'assets/css/teaching.css';

import CS61BProjPic from 'assets/imgs/UI_example1.png';
import EntropyExplanationPic from 'assets/imgs/entropy-walkthrough-cs189.png'
import CS189KernelPDF from 'assets/pdfs/dis10-sol.pdf'
import CS189KernelDiscPic from 'assets/imgs/kernel-discussion-img.png'

const Teaching = () => (
    <DocumentTitle title='Teaching'>
      <article className="post">
        <header>
          <div className="title">
            <h2>Teaching</h2>
          </div>
        </header>
        <p>While at UC Berkeley, I worked as a TA for 5 semesters, teaching
        I taught
        <ul style={{listStylePosition: "inside"}}>
          <li><a target="_blank" rel="noopener noreferrer" href="https://inst.eecs.berkeley.edu/~ee16a/fa16/">EE16A: Introduction to Electrical Engineering</a>, Fall 2016</li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://inst.eecs.berkeley.edu/~ee16a/sp17/">EE16A: Introduction to Electrical Engineering</a>, Spring 2017</li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://sp18.datastructur.es/">CS61B: Data Structures and Algorithms</a>, Spring 2018</li>
          <li><a target="_blank" rel="noopener noreferrer" href="http://cs168.io/">CS168: Internet Architecture</a>, Fall 2018</li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://people.eecs.berkeley.edu/~jrs/189s19/">CS189/CS289: Machine Learning</a>, Spring 2019</li>
        </ul>
        As a TA, I taught discussion sections of 20-40 students, wrote discussion sheets, wrote exams, wrote homeworks, graded exams, held office hours, and proctored exams.
        </p>
        <p>
        During this time, I made a variety of teaching materials for my sections.
        Below is a selection of some of the teaching materials that I created.
        </p>
        <article className="mini-post">
          <header>
            <h2>Decision Tree - Entropy Explanation</h2>
            <time className="published" datetime="2019-04-15">April 2019</time>
            <p>This is an interactive visualization of "Information Gain" and entropy change during the splitting phase of training a decision tree. Originally I made just the visualization to provide visual intuition to my section and aid in my explanation, then I added annotations and shared the interactive demo with the entire class. Created for Spring 2019's <a target="_blank" rel="noopener noreferrer" href="https://people.eecs.berkeley.edu/~jrs/189s19/">CS189/CS289: Machine Learning</a>.</p>
          </header>
          <a target="_blank" rel="noopener noreferrer" href="https://www.desmos.com/calculator/djl212axuk" className="image"><img height="400" src={EntropyExplanationPic} alt="" /></a>
        </article>

        <article className="mini-post">
  				<header>
  					<h2>Multicast Mini-Lecture & Walkthrough</h2>
  					<time className="published" datetime="2018-12-01">November 2018</time>
            <p>A 4-video series of videos teaching about the motivation and ideas behind Multicast, going over the details of DVMRP and CBT (Core-Based Trees) Multicast, and walking through the solutions to 3 practice problems. Created for <a target="_blank" rel="noopener noreferrer" href="http://cs168.io/">CS168: Internet Architecture</a> to make up for a week of class <a target="_blank" rel="noopener noreferrer" href="https://www.washingtonpost.com/education/2018/11/16/camp-fire-smoke-closes-uc-berkeley-other-bay-area-colleges/?noredirect=on&utm_term=.5004ec151007">cancelled due to smoke from the Camp Fire</a>.</p>
  				</header>
          <iframe title="Multicast Mini-Lecture & Walkthrough" height="315" src="https://www.youtube.com/embed/videoseries?list=PLKOGYtAOQFSPPoeqcIJtJI7ri4ZWsvdx_" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  			</article>

        <article className="mini-post">
  				<header>
  					<h2>Build Your Own Game (BYOG): CS61B Project</h2>
  					<time className="published" datetime="2018-12-10">December 2018 - February 2019</time>
            <p>Co-wrote new project for the Spring offering of CS61B. Wrote the skeleton code structure, as well as the working prototypes and staff solution, and helped develp the project spec. Project implemented by ~1400 students. The skeleton code for the project can be found on <a target="_blank" rel="noopener noreferrer" href="https://github.com/Berkeley-CS61B/skeleton-sp18/tree/master/proj2/byog">GitHub</a>.</p>
  				</header>
  				<a target="_blank" rel="noopener noreferrer" href="https://sp18.datastructur.es/materials/proj/proj2/proj2" className="image"><img height="400" src={CS61BProjPic} alt="" /></a>
  			</article>

        <article className="mini-post">
          <header>
            <h2>CS189 Kernels Discussion Material</h2>
            <time className="published" datetime="2019-04-09">April 2019</time>
            <p>Course material written for a discussion section on Kernels. Some problems written entirely by me, others edited from previous semesters. Taught to ~750 students in discussion sections by ~15 TAs. Created for Spring 2019's <a target="_blank" rel="noopener noreferrer" href="https://people.eecs.berkeley.edu/~jrs/189s19/">CS189/CS289: Machine Learning</a>.</p>
          </header>
          <a target="_blank" rel="noopener noreferrer" href={CS189KernelPDF} className="image"><img height="400" src={CS189KernelDiscPic} alt="" /></a>
        </article>
      </article>
    </DocumentTitle>
);

export default Teaching;
