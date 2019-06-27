import React from "react";
import DocumentTitle from 'react-document-title';
import 'assets/css/music.css';

const Music = () => (
    <DocumentTitle title='Music'>
      <article className="post">
        <h2> Music Under Construction </h2>
        <section>
								<div class="mini-posts">
										<article class="mini-post">
											<header>
												<h3><a href="single.html">Vitae sed condimentum</a></h3>
												<time class="published" datetime="2015-10-20">October 20, 2015</time>
											</header>
                      <iframe src="https://www.youtube.com/embed/no2wYng-kWA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
										</article>

										<article class="mini-post">
											<header>
												<h3><a href="single.html">Rutrum neque accumsan</a></h3>
												<time class="published" datetime="2015-10-19">October 19, 2015</time>
												<a href="#" class="author"><img src="images/avatar.jpg" alt="" /></a>
											</header>
											<iframe src="https://www.youtube.com/embed/n9A7k26YRVs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
										</article>

										<article class="mini-post">
											<header>
												<h3><a href="single.html">Odio congue mattis</a></h3>
												<time class="published" datetime="2015-10-18">October 18, 2015</time>
												<a href="#" class="author"><img src="images/avatar.jpg" alt="" /></a>
											</header>
											<iframe src="https://www.youtube.com/embed/PvJAmDdTtuE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
										</article>

										<article class="mini-post">
											<header>
												<h3><a href="single.html">Enim nisl veroeros</a></h3>
												<time class="published" datetime="2015-10-17">October 17, 2015</time>
												<a href="#" class="author"><img src="images/avatar.jpg" alt="" /></a>
											</header>
											<iframe src="https://www.youtube.com/embed/-0E_OXQLBw4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
										</article>

                    <article class="mini-post">
                      <header>
                        <h3><a href="single.html">Enim nisl veroeros</a></h3>
                        <time class="published" datetime="2015-10-17">October 17, 2015</time>
                        <a href="#" class="author"><img src="images/avatar.jpg" alt="" /></a>
                      </header>
                      <iframe src="https://www.youtube.com/embed/0xqngsKcEho" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </article>
								</div>
							</section>
      </article>
    </DocumentTitle>
);

export default Music;
