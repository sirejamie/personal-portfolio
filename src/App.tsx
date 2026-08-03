import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

import sandwich from "./assets/images/sandwich.png";
import { contacts, projects } from "./constants/data";

function Header() {
    return (
        <header>
            <div>
                <h1 className="my-name">Jamie Gattie</h1>
            </div>
        </header>
    );
}

function Introduction() {
    return (
        <section>
            <h2 className="heading-title heading-about">About Me</h2>
            <p className="about-paragraph">
                Hi! My name is Jamie and I am an aspiring software engineer. Well, maybe a hardware
                engineer, or even a systems engineer, a computer engineer, systems architect, golf
                player, tennis star, blah, blah, blah. I know, that's a lot of words and job titles
                but in all honesty, I truly don't know what I want to do. There's just a lot of
                amazing things in this world that I find so interesting that I can't just select one
                thing and stick with it!
            </p>
            <p className="about-paragraph">
                But apart from that small introduction, I do love coding and user-centric design the
                most. My current area of focus is honestly full-stack web development with interests
                in machine learning, systems programming, systems design, developer operations and
                cybersecurity.
            </p>
            <p className="about-paragraph">
                Apart from technology, I've gotten into reading and researching random things that
                spark my curiosity! I am also learning how to cook and play badminton.
            </p>
        </section>
    );
}

function Projects() {
    const isHidden = true;

    return (
        <section>
            <h2 className="heading-title heading-projects">Projects</h2>
            {isHidden && <p>Coming soon!</p>}
            {!isHidden &&
                projects.map((project) => (
                    <section>
                        <h3>{project.name}</h3>
                        <div>
                            {project.children.map((child) => (
                                <>
                                    <p className="project-title">
                                        {child.title}
                                        <span className="project-title__label">
                                            {" — "}
                                            {child.subtitle}
                                        </span>
                                    </p>
                                    <p className="project-description">{child.description}</p>
                                </>
                            ))}
                        </div>
                    </section>
                ))}
        </section>
    );
}

function Contact() {
    return (
        <section>
            <h2 className="heading-title heading-contact">Contact</h2>
            <ul>
                {contacts.map((contact) => 
                    <li className="contact-list-element"><a href={contact.link} target="_blank">{contact.title}</a></li>
                )}
            </ul>
        </section>
    );
}

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div>
                <div className="footer-text">
                    <p className="footer-my-name">Jamie Gattie</p>
                    <p>&copy; {year}</p>
                </div>
                <div className="colourful-sandwich-container">
                    <img src={sandwich} alt="A colourful sandwich." />
                    <p>(for you)</p>
                </div>
            </div>
        </footer>
    );
}

function PortfolioPage() {
    return (
        <>
            <Header />
            <main>
                <Introduction />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default function App() {
    return (
        <>
            <PortfolioPage />

            <SpeedInsights />
            <Analytics />
        </>
    );
}
