import sandwich from "./assets/images/sandwich.png";

export default function App() {
    const year = new Date().getFullYear();

    return (
        <main>
            <h1 className="my-name">Jamie Gattie</h1>
            <div className="inner-content">
                <section>
                    <h2 className="heading-title heading-about">About Me</h2>
                    <p className="about-paragraph">
                        Hi! My name is Jamie and I am an aspiring software engineer. Well, maybe a
                        hardware engineer, or even a systems engineer, a computer engineer, systems
                        architect, golf player, tennis star, blah, blah, blah. I know, that's a lot
                        of words and job titles but in all honesty, I truly don't know what I want
                        to do. There's just a lot of amazing things in this world that I find so
                        interesting that I can't just select one thing and stick with it!
                    </p>
                    <p className="about-paragraph">
                        But apart from that small introduction, I do love coding and user-centric
                        design the most. My current area of focus is honestly full-stack web
                        development with interests in machine learning, systems programming, systems
                        design, developer operations and cybersecurity.
                    </p>
                    <p className="about-paragraph">
                        Apart from technology, I've gotten into reading and researching random
                        things that spark my curiosity! I am also learning how to cook and play
                        badminton.
                    </p>
                </section>
                <section>
                    <h2 className="heading-title heading-projects">Projects</h2>
                    <p>Coming soon!</p>
                    {/*
                <section>
                    <h3>Web</h3>
                    <div>
                        <div className="project-container">
                            <p className="project-title">Vector<span className="project-title__label"> — Student Information System</span></p>
                            <p className="project-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                                ducimus, aliquam consectetur provident beatae et?
                            </p>
                        </div>
                        <div className="project-container">
                            <p className="project-title">jamiegattie.com<span className="project-title__label"> — Personal Portfolio</span></p>
                            <p className="project-description">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
                                neque laboriosam quidem, nostrum quas esse!
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <h3>Systems</h3>
                    <div>
                        <div>
                            <div className="project-container">
                                <p className="project-title">Genesis<span className="project-title__label"> — Programming Language</span></p>
                                <p className="project-description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                                    beatae iure enim, libero dolor quos!
                                </p>
                            </div>
                            <div className="project-container">
                                <p className="project-title">Tiny Triangle<span className="project-title__label"> — Triangle Renderer</span></p>
                                <p className="project-description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Explicabo, impedit. Pariatur excepturi ea placeat dolorum.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <h3>Data & AI/ML</h3>
                    <div>
                        <div className="project-container">
                            <p className="project-title">Tiny Web Scraper<span className="project-title__label"> — Wikipedia Web Scraper</span></p>
                            <p className="project-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nam
                                cumque dolores similique temporibus modi eveniet earum repudiandae
                                quaerat praesentium.
                            </p>
                        </div>
                        <div className="project-container">
                            <p className="project-title">Tumor Detector<span className="project-title__label">— Simple GaussianNB Model</span></p>
                            <p className="project-description">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
                                dolore eius nisi quas facere asperiores.
                            </p>
                        </div>
                    </div>
                </section>
                */}
                </section>
                <section>
                    <h2 className="heading-title heading-contact">Contact</h2>
                    <ul>
                        <li>
                            <a href="https://github.com/sirejamie" target="_blank">
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/jamiegattie" target="_blank">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="/files/Resume.pdf">Resume</a>
                        </li>
                    </ul>
                </section>
                <footer>
                    <div className="footer-text">
                        <p className="footer-my-name">Jamie Gattie</p>
                        <p>&copy; {year}</p>
                    </div>

                    <div className="colourful-sandwich-container">
                        <img src={sandwich} alt="A colourful sandwich." />
                        <p>(for you)</p>
                    </div>
                </footer>
            </div>
        </main>
    );
}
