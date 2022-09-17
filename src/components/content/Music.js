import React from "react";
import DocumentTitle from 'react-document-title';
import 'assets/css/music.css';

// TODO(akrentsel): Considering adding info about the masterclasses I've been in.
// Also perhaps finding info about the Cal Performances Takacs documentary?

const Music = () => (
    <DocumentTitle title='Music'>
      <article className="post">
        <header>
          <div className="title">
            <h2>Music</h2>
          </div>
        </header>
        <p>I started playing violin in elementary school and quickly fell in love.
        I played bassoon for a year, saxaphone for two years, and a bit of piano,
        but ultimately violin was the instrument for me. I am very grateful for the
        wonderful teachers I've gotten to study with: <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Vaghy_String_Quartet">Dezso Vaghy</a>, Peter McHugh, and <a target="_blank" rel="noopener noreferrer" href="https://music.berkeley.edu/people/dan-flanagan-2/">Dan Flanagan</a>.</p>
		<p>
			You're likely to find me playing in an orchestra wherever I'm living. Most recently, I've played in...
			<ul>
				<li>Howard University Orchestra, Fall 2021</li>
				<li>Googler Orchestra, Fall 2019 - Present</li>
				<li>UC Berkeley Symphony Orchestra, Fall 2015 - Spring 2019</li>
				<li>Youth Performing Arts School, Fall 2013 - Spring 2015</li>
				<li>Louisville Youth Orchestra, Spring 2015</li>
			</ul>
		</p>
        <p>Below is a selection of recordings of solo, chamber, and symphonic works I've performed.</p>
        <section>
			<div className="mini-posts">
				<article className="mini-post">
					<header>
						<h3>Dvorak Piano Quartet in E flat Major, Mvmt. 1 & 2</h3>
						<time className="published" dateTime="">UC Berkeley Noon Concert</time>
					</header>
<iframe title="Dvorak Piano Quartet in E flat Major, Mvmt. 1 & 2" src="https://www.youtube.com/embed/no2wYng-kWA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</article>

				<article className="mini-post">
					<header>
						<h3>Brahms Scherzo in C Minor, "Sonatensatz"</h3>
						<time className="published" dateTime="">UC Berkeley Noon Concert</time>
						<a href="#" className="author"><img src="images/avatar.jpg" alt="" /></a>
					</header>
					<iframe title="Brahms Scherzo in C Minor, Sonatensatz" src="https://www.youtube.com/embed/BdPG-LcNGOw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</article>

				<article className="mini-post">
					<header>
						<h3>Mendelssohn Violin Concerto, Mvmt. 1</h3>
						<time className="published" dateTime="">Univ. of Louisville String Academy</time>
						<a href="#" className="author"><img src="images/avatar.jpg" alt="" /></a>
					</header>
					<iframe title="Mendelssohn Violin Concerto, Mvmt. 1" src="https://www.youtube.com/embed/PvJAmDdTtuE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</article>

				<article className="mini-post">
					<header>
						<h3>Beethoven "Grosse Fuga" String Quartet, Op. 133</h3>
						<time className="published" dateTime="">Cal Fundraiser, Lafayette Retirement Home</time>
						<a href="#" className="author"><img src="images/avatar.jpg" alt="" /></a>
					</header>
					<iframe title="Beethoven Grosse Fuga String Quartet, Op. 133" src="https://www.youtube.com/embed/-0E_OXQLBw4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</article>

				<article className="mini-post">
					<header>
					<h3>Tchaikovsky Serenade for Strings, Mvmt. 3</h3>
					<time className="published" dateTime="">Youth Performing Arts School, Philharmonia</time>
					<a href="#" className="author"><img src="images/avatar.jpg" alt="" /></a>
					</header>
					<iframe title="Tchaikovsky Serenade for Strings, Mvmt. 3" src="https://www.youtube.com/embed/0xqngsKcEho" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</article>

				<article className="mini-post">
					<header>
					<h3>Beethoven "Spring" Sonata in F Major, Op. 24</h3>
					<time className="published" dateTime="">UC Berkeley Noon Concert</time>
					<a href="#" className="author"><img src="images/avatar.jpg" alt="" /></a>
					</header>
					<iframe title="Beethoven Spring Sonata in F Major, Op. 24" src="https://www.youtube.com/embed/7YLEnRD0VDQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</article>
			</div>
		</section>
      </article>
    </DocumentTitle>
);

export default Music;
