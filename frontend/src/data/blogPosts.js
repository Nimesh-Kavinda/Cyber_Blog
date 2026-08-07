// Add future posts here; only drop a new JPG into src/assets/blog/ and add one object below.
const blogImage = (fileName) =>
  new URL(`../assets/blog/${fileName}`, import.meta.url).href;

export const blogPosts = [
  {
    id: 1,
    day: 'Day 01',
    image: blogImage('day01.jpg'),
    description:
      'I started by understanding what cybersecurity actually covers, why it matters, and how different areas like networking, system security, and threat analysis connect to one another. This first step helped me move from vague interest to a more structured learning path. I also wrote down the core terms I kept seeing repeatedly so I could build a stronger foundation before moving into technical practice.',
  },
  {
    id: 2,
    day: 'Day 02',
    image: blogImage('day02.jpg'),
    description:
      'On the second day, I focused on defensive thinking and the habits that support it, including observation, verification, and documenting small wins. I explored how attackers think, how defenders respond, and how to train myself to notice patterns before they become problems. This made the learning process feel more practical and less abstract.',
  },
];
