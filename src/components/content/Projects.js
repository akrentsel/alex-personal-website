import React from "react";

import CS61BProjPic from 'assets/imgs/UI_example1.png';
import EntropyExplanationPic from 'assets/imgs/entropy-walkthrough-cs189.png'
import CS189KernelPDF from 'assets/pdfs/dis10-sol.pdf'
import CS189KernelDiscPic from 'assets/imgs/kernel-discussion-img.png'

const Projects = () => (
    <article className="post">
      <h2> Projects Under Construction </h2>
      <article className="mini-post">
				<header>
					<h2><a href="single.html">Multicast Mini-Lecture & Walkthrough</a></h2>
          Hello
					<time className="published" datetime="2018-12-01">December 2018</time>
				</header>
        <iframe height="315" src="https://www.youtube.com/embed/videoseries?list=PLKOGYtAOQFSPPoeqcIJtJI7ri4ZWsvdx_" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
			</article>

      <article className="mini-post">
				<header>
					<h3><a href="single.html">CS61B Project</a></h3>
					<time className="published" datetime="2015-10-20">October 20, 2015</time>
				</header>
				<a target="_blank" href="https://sp18.datastructur.es/materials/proj/proj2/proj2" className="image"><img height="400" src={CS61BProjPic} alt="" /></a>
			</article>

      <article className="mini-post">
        <header>
          <h3><a href="single.html">CS189 Kernelization Discussion Material</a></h3>
          <time className="published" datetime="2015-10-20">October 20, 2015</time>
        </header>
        <a target="_blank" href={CS189KernelPDF} className="image"><img height="400" src={CS189KernelDiscPic} alt="" /></a>
      </article>

      <article className="mini-post">
        <header>
          <h3><a href="single.html">CS189 Entropy Explanation</a></h3>
          <time className="published" datetime="2015-10-20">October 20, 2015</time>
        </header>
        <a target="_blank" href="https://www.desmos.com/calculator/djl212axuk" className="image"><img height="400" src={EntropyExplanationPic} alt="" /></a>
      </article>
    </article>
);

export default Projects;
