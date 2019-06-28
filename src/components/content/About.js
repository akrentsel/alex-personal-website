import React from "react";
import DocumentTitle from 'react-document-title';
import NormalPic from 'assets/imgs/alex-normal.jpg';
import TimelineIcon from 'components/aux/TimelineIcon.js';
import $ from "jquery";
import ReactTooltip from 'react-tooltip'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import 'assets/css/timeline.css';

class About extends React.Component {
    constructor(props) {
      super(props);

      var date = new Date();
      var options = { year: 'numeric', month: 'long', day: 'numeric' };
      var viewerTimestamp = date.toLocaleDateString("en-US", options);
      this.state = {
        location: "an unknown city",
        viewerTimestamp: viewerTimestamp
      };
    }

    componentDidMount() {
      var self = this;
      $.ajax('https://ipapi.co/json')
      .then(
          function success(response) {
            var loc = response.city + ", " + response.country_name;
            self.setState( {
              location: loc
            })
          },
          function fail(data, status) {
              console.log('Request failed.  Returned status of',
                          status);
          }
      );
    }

    render() {
      return (
        <DocumentTitle title='About'>
          <article className="post">
            <header>
              <div className="title">
                <h2><a href="single.html">About</a></h2>
              </div>
            </header>
            <p>Below is my timeline.</p>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="timeline-element-custom"
                date="1997"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<TimelineIcon iconClass="fas fa-birthday-cake"/>}
              >
                <h3 className="vertical-timeline-element-title">Born in Missouri</h3>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="timeline-element-custom"
                date="2005"
                iconStyle={{ background: 'rgb(3, 112, 56)', color: '#fff' }}
                icon={<TimelineIcon iconClass="fas fa-apple-alt"/>}
              >
                <h3 className="vertical-timeline-element-title">Moved to Upstate New York</h3>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="timeline-element-custom"
                date="2013"
                iconStyle={{ background: 'rgb(224, 41, 20)', color: '#fff' }}
                icon={<TimelineIcon iconClass="fas fa-horse-head"/>}
              >
                <h3 className="vertical-timeline-element-title">Moved to Kentucky</h3>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="timeline-element-custom"
                date="August 2014 - June 2015"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<TimelineIcon iconClass="fas fa-glasses"/>}
              >
                <h3 className="vertical-timeline-element-title"><a target="_blank" href="https://www.interapt.com/">Interapt</a>, Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">Louisville, KY</h4>
                <p>
                  Co-wrote Google Glass live-streaming app that lead Interapt to be chosen as a <a target="_blank" href="https://insiderlouisville.com/economy/startups/interapt-named-google-glass-work-partners/">Glass at Work partner</a>. Worked on various Android apps.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="timeline-element-custom"
                date="Fall 2015"
                iconStyle={{ background: 'rgb(236, 181, 73)', color: '#133C76' }}
                icon={<TimelineIcon iconClass="fas fa-university"/>}
              >
                <h3 className="vertical-timeline-element-subtitle"><a target="_blank" href="https://www.berkeley.edu/">UC Berkeley</a></h3>
                <h4 className="vertical-timeline-element-subtitle">Started College</h4>
                <p>
                  One of 12 Out-of-State <a target="_blank" href="https://financialaid.berkeley.edu/regents-and-chancellors-scholarship">Regents' & Chancellor's Scholarships</a> of Class of 2019.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="timeline-element-custom"
                date="Summer 2016"
                iconStyle={{ background: 'rgb(80, 133, 236)', color: '#fff' }}
                icon={<TimelineIcon iconClass="fab fa-google"/>}
              >
                <h3 className="vertical-timeline-element-title"><a target="_blank" href="https://www.google.com/">Google</a>, Engineering Practicum Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">Mountain View, CA</h4>
                <p>
                  AdWords Next team, working on the new landing page for AdWords called Overviews.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="timeline-element-custom"
                date="Summer 2017"
                iconStyle={{ background: 'rgb(235, 50, 35)', color: '#fff' }}
                icon={<TimelineIcon iconClass="fab fa-youtube"/>}
              >
                <h3 className="vertical-timeline-element-title"><a target="_blank" href="https://www.facebook.com/">YouTube</a>, Software Engineering Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">Zurich, Switzerland</h4>
                <p>
                  Creator Studio team, YouTube's home for creators. Worked on Translations tab and diagnosing an issue in the Profanity Classifier predictions for gaming videos.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="timeline-element-custom"
                date="Summer 2018"
                iconStyle={{ background: 'rgb(73, 103, 173)', color: '#fff' }}
                icon={<TimelineIcon iconClass="fab fa-facebook-f"/>}
              >
                <h3 className="vertical-timeline-element-title"><a target="_blank" href="https://www.facebook.com/">Facebook</a>, Software Engineering Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">Menlo Park, CA</h4>
                <p>
                  Ads Core Signals team, ensuring data is clean and usable. Wrote Messenger Bot to help developers set up and debug the Facebook SDK.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="timeline-element-custom"
                date="Spring 2019"
                iconStyle={{ background: 'rgb(236, 181, 73)', color: '#133C76' }}
                icon={<TimelineIcon iconClass="fas fa-graduation-cap"/>}
              >
                <h3 className="vertical-timeline-element-title"><a target="_blank" href="https://www.berkeley.edu/">UC Berkeley</a></h3>
                <h4 className="vertical-timeline-element-subtitle">Graduated, <i>Magna Cum Laude</i></h4>
                <p>
                  B.S. in <a target="_blank" href="https://eecs.berkeley.edu">Elec. Eng. & Comp. Sci (EECS)</a>, B.A. in <a target="_blank" href="http://music.berkeley.edu/">Music</a>
                </p>
                <p>
                <ul>
                  <li>TA'd <a target="_blank" href="/teaching">4 classes across 5 semesters</a></li>
                  <li>Organizer for <a target="_blank" href="https://tedxberkeley.org/">TEDxBerkeley</a>, largest university TEDx in world</li>
                  <li>2017-2018 <a target="_blank" href="https://eecs.berkeley.edu/resources/undergrads/accel">Accel Scholar</a></li>
                  <li><a target="_blank" href="https://pbk.berkeley.edu/">Phi Beta Kappa</a> Honor Society</li>
                  <li><a target="_blank" href="https://orchestra.berkeley.edu/">UC Berkeley Symphony Orchestra</a></li>
                  <li><a target="_blank" href="https://eecs.berkeley.edu/resources/undergrads/honors">EECS Honors Program</a></li>
                </ul>
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="timeline-element-custom"
                date="August 2019 - Present"
                iconStyle={{ background: 'rgb(235, 50, 35)', color: '#fff' }}
                icon={<TimelineIcon iconClass="fab fa-youtube"/>}
              >
                <h3 className="vertical-timeline-element-title"><a target="_blank" href="https://www.facebook.com/">YouTube</a>, Software Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">San Bruno, CA</h4>
                <p>
                  Home of cat videos
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="timeline-element-custom"
                date={this.state.viewerTimestamp}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<TimelineIcon iconClass="fas fa-user"/>}
              >
                <div className="tooltip-wrapper">
                  <a data-tip className="location-info-a" >
                    <ReactTooltip className="location-info-tooltip" effect="solid">
                      <p>If you're curious, I get your city from your IP address.
                      It may be a bit off, as IP addresses don't always map to geographic locations.</p>
                    </ReactTooltip>
                    <i className="fas fa-info-circle location-info-tooltip"></i>
                  </a>
                </div>
                <h3 className="vertical-timeline-element-title">A Visitor!</h3>
                <p>
                  Someone from <b><u>{this.state.location}</u></b> read my timeline!
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </article>
        </DocumentTitle>
    );
  }
}

export default About;
