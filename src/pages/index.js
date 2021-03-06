import React from "react";
import Link from "gatsby-link";
import { sortBy } from "lodash";
import InstagramEmbed from "react-instagram-embed";

import Swizec from "../images/swizec.jpg";
import MortyMindblowers from "../images/mortysmindblowers.mp4";
import Olympics from "../images/olympics.gif";
import { Video, Signature } from "../elements";

const MDLink = ({ node }) => (
    <div key={node.id}>
        <h2>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </h2>
        <div dangerouslySetInnerHTML={{ __html: node.tableOfContents }} />
    </div>
);

const ListContentPages = ({ data }) => {
    const pages = data.allMarkdownRemark.edges;

    return (
        <div>
            <h1>Setlist - Day 1</h1>

            {_.sortBy(pages, ({ node }) => node.fields.slug)
                .slice(0, 4)
                .map(MDLink)}

            <h1>Setlist - Day 2</h1>

            {_.sortBy(pages, ({ node }) => node.fields.slug)
                .slice(4, pages.length)
                .map(MDLink)}
        </div>
    );
};

const Welcome = () => (
    <div>
        <a href="https://swizec.com">
            <img src={Swizec} title="Swizec at Write the Docs Prague in 2014" />
        </a>
        <h1>Hello new friend 👋</h1>

        <p>Welcome to Swizec's Data visualization with React & D3v4. </p>
        <p>
            Today we're going to build your first webapp with React and Friends.
            We're going to use React to build components, React Router for
            routing, styled components for styling, and Redux for state
            management.
        </p>
        <p>
            {`<Tomorrow>`} we're going to learn the basics of D3v4, look at
            several strategies for integration with React, then build a gorgeous
            visualization or two.
        </p>
        <p>
            Your 1st day starts at the very beginning:{" "}
            <em>
                Why React? What problem does it solve? What makes it tick?
                What's the ecosystem like? Why are components the future?
            </em>
        </p>
        <p>
            But fear not, we won't get stuck on the basics. By the end of your
            first, you'll have built a full webapp and understand how it works.
        </p>
        <p>An infinite series of fun gifs like this 👇</p>
        <p>
            <Video src={MortyMindblowers} autoPlay loop />
        </p>
        <p>
            Your 2nd day starts with the idea that you magically remember
            everything and are now a pro. Don't worry if you're not, Swizec is
            here to help and he's going to code everything with you. If you get
            lost, sit back and observe. Checkout the example repo at key points
            so you can catch up.
        </p>
        <p>By the end of the day you'll have built your first React app.</p>
        <p>Something like this 👇</p>

        <p>
            <img src={Olympics} />
        </p>
        <p>
            It's not fancy or super colorful, but it's a good way to learn about
            building reusable dataviz components, making them play together, and
            adding some interactivity. We can always add more together :)
        </p>
    </div>
);

const WhoSwiz = () => (
    <div>
        <h2>Swizec Teller</h2>
        <InstagramEmbed
            url="https://www.instagram.com/p/Bd_SGSzlBrb/"
            maxWidth={480}
            hideCaption
        />
        <p>
            Hi, I’m Swizec Teller, a geek with a hat. I help coders become
            software engineers. Through this workshop I'm going to teach you all
            I know about building data visualization with React & D3v4.
        </p>
        <p>
            You can find out stuff about me, if you ask Google. But generally
            speaking I have:
        </p>
        <ul>
            <li>been coding for over 20 years</li>
            <li>
                published{" "}
                <a href="http://nightowlsbook.com/">
                    Why Programmers Work at Night
                </a>, that was fun
            </li>
            <li>
                published{" "}
                <a href="https://www.packtpub.com/web-development/data-visualization-d3js">
                    Data Visualization with D3.js
                </a>, dare ask me about publishers
            </li>
            <li>
                published 3 editions of{" "}
                <a href="https://www.swizec.com/reactd3js/">React + D3</a>,
                that's been great
            </li>
            <li>helped over 10,000 people become better engineers</li>
            <li>
                made this{" "}
                <a href="https://es2017.io">
                    interactive ES6+ cheatsheet &mdash; es2017.io
                </a>
            </li>
        </ul>
    </div>
);

const Start = () => (
    <div>
        <h1>Let's get down to business</h1>
        <p>
            This is an interactive workshop. If you have a question, <b>ask</b>.
            If something doesn't make sense, <b>ask</b>. If something is
            confusing, <b>ask</b>. If I'm not making sense, <b>ask</b>. If your
            code doesn't work, <b>ask</b>.
        </p>
        <p>You will write code today. The code will live on your computer.</p>
        <p>We will take breaks.</p>
        <h2>But first ask yourself this: Why are you here?</h2>
        <p>
            Answering that question will help you get the most out of this
            workshop. You can call your answer out to the group, or just think
            about it.
        </p>
        <p>
            Code you'll write today works with <b>React 16</b> and uses modern{" "}
            <b>ES6+</b>. We'll assume a development environment created with{" "}
            <code>create-react-app</code>. This gives us some special powers. I
            will point them out.
        </p>
    </div>
);

const ProjectLink = ({ url, children }) => (
    <li>
        <a href={url}>{children}</a>
    </li>
);

const CoolThings = () => (
    <div>
        <h1>Here are some cool things I've built with React</h1>

        <ul>
            <ProjectLink url="http://swizec.github.io/react-d3-enter-exit-transitions/">
                Animated typing
            </ProjectLink>
            <ProjectLink url="https://swizec.github.io/declarative-canvas-react-konva/">
                Canvas billiards game
            </ProjectLink>
            <ProjectLink url="http://swizec.github.io/react-particles-experiment/">
                Particle generator
            </ProjectLink>
            <ProjectLink url="https://swizec.github.io/react-fractals/">
                Pythagorean fractal tree
            </ProjectLink>
            <ProjectLink url="http://swizec.github.io/space-invaders/">
                Space Invaders
            </ProjectLink>
            <ProjectLink url="https://swizec.github.io/h1b-software-salaries/">
                Tech salary visualization
            </ProjectLink>
            <ProjectLink url="https://swizec.github.io/migrations-map/">
                A zoomable pannable map of global migrations
            </ProjectLink>
            <ProjectLink url="/">This page :)</ProjectLink>
        </ul>

        <p>No, these projects are not practical, but they demo well :)</p>
    </div>
);

const IndexPage = ({ data }) => (
    <div>
        <Welcome />
        <WhoSwiz />
        <CoolThings />

        <Start />

        <p>Here's our setlist for today 👇</p>

        <ListContentPages data={data} />

        <h1>Before you leave</h1>
        <p>
            You have reached a relaxing part of this page. Thank you for coming!
        </p>
        <p>
            Please fill out <a href="">this feedback form</a>. It helps me
            calibrate future workshops and optimize what we do tomorrow.
        </p>
        <p>Enjoy this relaxing video of Kiwi</p>
        <InstagramEmbed url="https://www.instagram.com/p/BR9xFYulmiL/" />
        <p>
            <Signature />
        </p>
        <p>
            Cheers,<br />~ Swizec
        </p>
    </div>
);

export const query = graphql`
    query IndexQuery {
        allMarkdownRemark {
            totalCount
            edges {
                node {
                    id
                    timeToRead
                    tableOfContents
                    frontmatter {
                        title
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`;

export default IndexPage;
