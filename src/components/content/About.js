import React from "react";
import DocumentTitle from 'react-document-title';
import NormalPic from 'assets/imgs/alex-normal.jpg';
import TimelineIcon from 'components/aux/TimelineIcon.js';
import $ from "jquery";

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
      $.ajax('http://ip-api.com/json')
      .then(
          function success(response) {
            var loc = response.city + ", " + response.country;
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
      console.log(this.location);
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
                <h4 className="vertical-timeline-element-subtitle">Born in Missouri</h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="timeline-element-custom"
                date="2005"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<TimelineIcon iconClass="fas fa-apple-alt"/>}
              >
                <h3 className="vertical-timeline-element-title">Moved to Upstate New York</h3>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="timeline-element-custom"
                date="2013"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
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
                <h3 className="vertical-timeline-element-title">Intern at Interapt</h3>
                <h4 className="vertical-timeline-element-subtitle">Louisville, KY</h4>
                <p>
                  Google Glass
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="timeline-element-custom"
                date="2015-2019"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<TimelineIcon iconClass="fas fa-university"/>}
              >
                <h4 className="vertical-timeline-element-subtitle">UC Berkeley Begins</h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="timeline-element-custom"
                date="Summer 2016"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<TimelineIcon iconClass="fab fa-google"/>}
              >
                <h3 className="vertical-timeline-element-title">Intern at Google</h3>
                <h4 className="vertical-timeline-element-subtitle">Mountain View, CA</h4>
                <p>
                  ...
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="timeline-element-custom"
                date="Summer 2017"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<TimelineIcon iconClass="fab fa-youtube"/>}
              >
                <h3 className="vertical-timeline-element-title">YouTube, Software Engineering Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">Zurich, Switzerland</h4>
                <p>
                  ...
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="timeline-element-custom"
                date="Summer 2018"
                iconStyle={{ background: 'rgb(73, 103, 173)', color: '#fff' }}
                icon={<TimelineIcon iconClass="fab fa-facebook-f"/>}
              >
                <h3 className="vertical-timeline-element-title">Facebook, Software Engineering Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">Menlo Park, CA</h4>
                <p>
                  ...
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="timeline-element-custom"
                date="2019"
                iconStyle={{ background: 'rgb(73, 103, 173)', color: '#fff' }}
                icon={<TimelineIcon iconClass="fas fa-graduation-cap"/>}
              >
                <h3 className="vertical-timeline-element-title">Graduated from UC Berkeley</h3>
                <h4 className="vertical-timeline-element-subtitle"></h4>
                <p>
                  ...
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="timeline-element-custom"
                date="August 2019 - Present"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<TimelineIcon iconClass="fab fa-youtube"/>}
              >
                <h3 className="vertical-timeline-element-title">YouTube, Software Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">San Bruno, CA</h4>
                <p>
                  ...
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="timeline-element-custom"
                date={this.state.viewerTimestamp}
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<TimelineIcon iconClass="fas fa-user"/>}
              >
                <h4 className="vertical-timeline-element-subtitle">Someone from {this.state.location} read my About page</h4>
                <p>
                  ...
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </article>
        </DocumentTitle>
    );
  }
}

export default About;
