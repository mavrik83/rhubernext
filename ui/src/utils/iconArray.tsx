import {
    SiTypescript,
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiPostgresql,
    SiMongodb,
    SiDocker,
    SiGit,
    SiNextdotjs,
    SiNodedotjs,
    SiRuby,
    SiRust,
    SiAmazonaws,
    SiAdobephotoshop,
    SiAdobeillustrator,
} from 'react-icons/si';

const icons = [
    {
        icon: SiTypescript,
        title: 'Typescript',
        confidence: 9,
        interest: 10,
        description:
            'Typescript is my go-to language for web development and I have experience with both React and Node.js using Typescript. Even for smaller projects, I prefer to use Typescript over Javascript because of the sweet DX it provides; the added configuration is worth every minute.',
    },
    {
        icon: SiJavascript,
        title: 'Javascript',
        confidence: 9,
        interest: 5,
        description:
            'Since I started using Typescript, I have not used Javascript much; I much prefer the type safety that Typescript provides. However, I have experience with Javascript and I am familiar with the syntax and the quirks of the language.',
    },
    {
        icon: SiDocker,
        title: 'Docker',
        confidence: 3,
        interest: 7,
        description:
            "I have operational experience with Docker. That is to say, I've used it as part of my workflow, but I don't have experience with Docker's internals.",
    },
    {
        icon: SiReact,
        title: 'React',
        confidence: 8,
        interest: 10,
        description:
            "Can we even be called web developers if we don't know React? I prefer to use React with Typescript, but I have experience with React and Javascript as well. As an aside, Create React App is, in my opinion, a wholly inadequate tool for building a production-ready application (unless you eject!).",
    },
    {
        icon: SiPostgresql,
        title: 'Postgresql',
        confidence: 6,
        interest: 9,
        description:
            "I've spent some time tooling around with Postgres. I'm a big fan of leveraging views and stored procedures to make the database do the heavy lifting.",
    },
    {
        icon: SiTailwindcss,
        title: 'Tailwindcss',
        confidence: 8,
        interest: 10,
        description:
            'I absolutely love Tailwindcss. It is my go-to CSS framework for any project. I have experience with Tailwindcss and I am familiar with the syntax and the quirks of the framework. Full disclosure: vanilla CSS is not my strong suit, but I can crank it out when I need to.',
    },
    {
        icon: SiGit,
        title: 'Git',
        confidence: 8,
        interest: 10,
        description: "Git. Can't do the job without it.",
    },
    {
        icon: SiMongodb,
        title: 'Mongodb',
        confidence: 6,
        interest: 9,
        description:
            'This is my goto database for small, personal projects. Peronally, I love the combo of Mongodb and Prisma.',
    },
    {
        icon: SiNextdotjs,
        title: 'Next.js',
        confidence: 8,
        interest: 10,
        description:
            "Is Next.js the best framework for building a React application? I don't know, but I do know that I love it. I'm currently using Next.js for this website and working on migrating a production CRA app to Next.js.",
    },
    {
        icon: SiNodedotjs,
        title: 'Node.js',
        confidence: 8,
        interest: 10,
        description: 'It runs the modern web, right?',
    },
    {
        icon: SiRuby,
        title: 'Ruby',
        confidence: 6,
        interest: 2,
        description:
            "My first language. I have to confess that I'm not a fan. Sure Ruby on Rails is great for building a quick prototype, but I don't think it's a good choice for a production application.",
    },
    {
        icon: SiRust,
        title: 'Rust',
        confidence: 2,
        interest: 10,
        description:
            "I'm currently learning Rust. I'm a big fan of the language and I'm excited to see where it goes.",
    },
    {
        icon: SiAmazonaws,
        title: 'AWS',
        confidence: 4,
        interest: 7,
        description:
            "My current work involves a fair amount of AWS, so I'm familiar with the basics, but our devops team does most of the heavy lifting.",
    },
    {
        icon: SiAdobephotoshop,
        title: 'Photoshop',
        confidence: 5,
        interest: 6,
        description:
            "I've been tinkering with Photoshop for a while. I'm not a designer, but I can get the job done.",
    },
    {
        icon: SiAdobeillustrator,
        title: 'Illustrator',
        confidence: 5,
        interest: 6,
        description:
            "I feel like I've barely scratched the surface of Illustrator. I'm a big fan of the vector graphics and I'm excited to learn more.",
    },
];

export { icons };
