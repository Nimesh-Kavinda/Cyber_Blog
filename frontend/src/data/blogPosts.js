// Add future posts here; only drop a new JPG into src/assets/blog/ and add one object below.
const blogImage = (fileName) =>
  new URL(`../assets/blog/${fileName}`, import.meta.url).href;

export const blogPosts = [
  {
    id: 1,
    day: 'Day 01',
    title: 'Introduction to Cybersecurity',
    image: blogImage('day01.jpg'),
    description:
      'A first look at the cybersecurity landscape, the major domains, and the mindset needed to learn effectively.',
    readTime: '5 min',
  },
  {
    id: 2,
    day: 'Day 02',
    title: 'Core Concepts and Defensive Thinking',
    image: blogImage('day02.jpg'),
    description:
      'An early breakdown of threat awareness, basic defense principles, and how to turn theory into practical habits.',
    readTime: '6 min',
  },
];
