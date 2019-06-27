import React from "react";
import DocumentTitle from 'react-document-title';
import 'assets/css/music.css';

const Music = () => (
    <DocumentTitle title='Music'>
      <article className="post">
        <h2> Music Under Construction </h2>
        <section>
								<div className="mini-posts">
										<article className="mini-post">
											<header>
												<h3><a href="single.html">Dvorak Piano Quartet in E flat Major, Mvmt. 1 &  2</a></h3>
												<time className="published" dateTime="">UC Berkeley Noon Concert</time>
											</header>
                      <iframe src="https://www.youtube.com/embed/no2wYng-kWA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
										</article>

										<article className="mini-post">
											<header>
												<h3><a href="single.html">Brahms Scherzo in C Minor, "Sonatensatz"</a></h3>
												<time className="published" dateTime="">Senior Recital</time>
												<a href="#" className="author"><img src="images/avatar.jpg" alt="" /></a>
											</header>
											<iframe src="https://www.youtube.com/embed/n9A7k26YRVs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
										</article>

										<article className="mini-post">
											<header>
												<h3><a href="single.html">Mendelssohn Violin Concerto, Mvmt. 1</a></h3>
												<time className="published" dateTime="">Univ. of Louisville String Academy</time>
												<a href="#" className="author"><img src="images/avatar.jpg" alt="" /></a>
											</header>
											<iframe src="https://www.youtube.com/embed/PvJAmDdTtuE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
										</article>

										<article className="mini-post">
											<header>
												<h3><a href="single.html">Beethoven "Grosse Fuga" String Quartet, Op. 133</a></h3>
												<time className="published" dateTime="">Cal Fundraiser, Lafayette Retirement Home</time>
												<a href="#" className="author"><img src="images/avatar.jpg" alt="" /></a>
											</header>
											<iframe src="https://www.youtube.com/embed/-0E_OXQLBw4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
										</article>

                    <article className="mini-post">
                      <header>
                        <h3><a href="single.html">Tchaikovsky Serenade for Strings, Mvmt. 3</a></h3>
                        <time className="published" dateTime="">Youth Performing Arts School, Philharmonia</time>
                        <a href="#" className="author"><img src="images/avatar.jpg" alt="" /></a>
                      </header>
                      <iframe src="https://www.youtube.com/embed/0xqngsKcEho" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </article>
								</div>
							</section>
      </article>
    </DocumentTitle>
);

export default Music;
