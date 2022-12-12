import React from 'react';

const Skill = () => {
    return (
        <div className='mt-28'>
            <h2 className='text-4xl text-center text-sky-600 font-bold'>My Skills</h2>

            <div className='container p-10 max-w-[1240px] mx-auto items-center justify-center mt-10 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>
                <h2>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="Javascript" /></a>
                    <p>JavaScript</p>
                </h2>
                <h2>
                    <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a>
                    <p>HTML5</p>
                </h2>
                <h2>
                    <a href="https://developer.mozilla.org/en-US/docs/Glossary/css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS" /></a>
                    <p>CSS</p>
                </h2>

                <h2>
                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
                    <p>React</p>
                </h2>
                <h2>
                    <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" width="36" height="36" alt="Bootstrap" /></a>
                    <p>Bootstarp</p>
                </h2>
                <h2>
                    <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" /></a>
                    <p>Node JS</p>
                </h2>
                <h2>
                    <a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="36" height="36" alt="Express" /></a>
                    <p>Exprss JS</p>
                </h2>

                <h2>
                    <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="36" height="36" alt="MongoDB" /></a>
                    <p>MongoDB</p>
                </h2>

                <h2>
                    <a href="https://www.tailwindcss.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="36" height="36" alt="Tailwind Css" /></a>
                    <p>Tailwind CSS</p>
                </h2>

            </div>
        </div>
    );
};

export default Skill;