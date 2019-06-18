import React from 'react';

import NormalPic from '../alex-normal.jpg';
import NaturePic from '../alex-nature.jpg';
import SillyPic from '../alex-silly.jpg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ToggleImage from './ToggleImage.js';

// TODO(akrentsel): Make the Read More button scroll to the top!

const BriefAboutInsert = () => (
  <section id="sidebar">
      <section id="intro">
        <ToggleImage defaultImage={NormalPic} clickedImage={SillyPic} mouseOverImage={NaturePic}/>
        <header>
          <h2>Alex Krentsel</h2>
          <p><a target="_blank" rel="noopener noreferrer" href="mailto:alex@krentsel.com">alex@krentsel.com</a></p>
        </header>
      </section>
      <section>
        <h3>Brief About</h3>
        <p>Hi! I'm Alex. I graduated from UC Berkeley with a B.S. in EECS and a B.A. in Music. I work as a Software Engineer at <a href="https://www.youtube.com/">YouTube</a>. I enjoy travel, playing violin, and looking at art.</p>

        <Link to="/about/" className="button large">Read More</Link>
      </section>
      <section id="footer">
        <ul className="icons">
          <li>LinkedIn</li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/alex.krentsel" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
          <li>Github</li>
          <li><a target="_blank" rel="noopener noreferrer" href="mailto:alex@krentsel.com" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
        </ul>
        <p className="copyright">&copy; Alex Krentsel 2019. Design based on <a href="http://html5up.net">HTML5 UP</a> and <a href="https://mldangelo.com/">https://mldangelo.com/</a>.</p>
      </section>

  </section>

);

export default BriefAboutInsert;

// <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
// <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
// <li><a href="#" class="icon solid fa-rss"><span class="label">RSS</span></a></li>


// Removed from this sidebar.
    //   <section>
    //     <div class="mini-posts">
    //
    //       <!-- Mini Post -->
    //         <article class="mini-post">
    //           <header>
    //             <h3><a href="single.html">Vitae sed condimentum</a></h3>
    //             <time class="published" datetime="2015-10-20">October 20, 2015</time>
    //             <a href="#" class="author"><img src="images/avatar.jpg" alt="" /></a>
    //           </header>
    //           <a href="single.html" class="image"><img src="images/pic04.jpg" alt="" /></a>
    //         </article>
    //
    //       <!-- Mini Post -->
    //         <article class="mini-post">
    //           <header>
    //             <h3><a href="single.html">Rutrum neque accumsan</a></h3>
    //             <time class="published" datetime="2015-10-19">October 19, 2015</time>
    //             <a href="#" class="author"><img src="images/avatar.jpg" alt="" /></a>
    //           </header>
    //           <a href="single.html" class="image"><img src="images/pic05.jpg" alt="" /></a>
    //         </article>
    //
    //       <!-- Mini Post -->
    //         <article class="mini-post">
    //           <header>
    //             <h3><a href="single.html">Odio congue mattis</a></h3>
    //             <time class="published" datetime="2015-10-18">October 18, 2015</time>
    //             <a href="#" class="author"><img src="images/avatar.jpg" alt="" /></a>
    //           </header>
    //           <a href="single.html" class="image"><img src="images/pic06.jpg" alt="" /></a>
    //         </article>
    //
    //       <!-- Mini Post -->
    //         <article class="mini-post">
    //           <header>
    //             <h3><a href="single.html">Enim nisl veroeros</a></h3>
    //             <time class="published" datetime="2015-10-17">October 17, 2015</time>
    //             <a href="#" class="author"><img src="images/avatar.jpg" alt="" /></a>
    //           </header>
    //           <a href="single.html" class="image"><img src="images/pic07.jpg" alt="" /></a>
    //         </article>
    //
    //     </div>
    //   </section>
    //
    // <!-- Posts List -->
    //   <section>
    //     <ul class="posts">
    //       <li>
    //         <article>
    //           <header>
    //             <h3><a href="single.html">Lorem ipsum fermentum ut nisl vitae</a></h3>
    //             <time class="published" datetime="2015-10-20">October 20, 2015</time>
    //           </header>
    //           <a href="single.html" class="image"><img src="images/pic08.jpg" alt="" /></a>
    //         </article>
    //       </li>
    //       <li>
    //         <article>
    //           <header>
    //             <h3><a href="single.html">Convallis maximus nisl mattis nunc id lorem</a></h3>
    //             <time class="published" datetime="2015-10-15">October 15, 2015</time>
    //           </header>
    //           <a href="single.html" class="image"><img src="images/pic09.jpg" alt="" /></a>
    //         </article>
    //       </li>
    //       <li>
    //         <article>
    //           <header>
    //             <h3><a href="single.html">Euismod amet placerat vivamus porttitor</a></h3>
    //             <time class="published" datetime="2015-10-10">October 10, 2015</time>
    //           </header>
    //           <a href="single.html" class="image"><img src="images/pic10.jpg" alt="" /></a>
    //         </article>
    //       </li>
    //       <li>
    //         <article>
    //           <header>
    //             <h3><a href="single.html">Magna enim accumsan tortor cursus ultricies</a></h3>
    //             <time class="published" datetime="2015-10-08">October 8, 2015</time>
    //           </header>
    //           <a href="single.html" class="image"><img src="images/pic11.jpg" alt="" /></a>
    //         </article>
    //       </li>
    //       <li>
    //         <article>
    //           <header>
    //             <h3><a href="single.html">Congue ullam corper lorem ipsum dolor</a></h3>
    //             <time class="published" datetime="2015-10-06">October 7, 2015</time>
    //           </header>
    //           <a href="single.html" class="image"><img src="images/pic12.jpg" alt="" /></a>
    //         </article>
    //       </li>
    //     </ul>
    //   </section>
    //
    // <!-- About -->
    //   <section class="blurb">
    //     <h2>About</h2>
    //     <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod amet placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at phasellus sed ultricies.</p>
    //     <ul class="actions">
    //       <li><a href="#" class="button">Learn More</a></li>
    //     </ul>
    //   </section>
    //
    // <!-- Footer -->