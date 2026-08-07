// Add future posts here; only drop a new JPG into src/assets/blog/ and add one object below.
const blogImage = (fileName) =>
  new URL(`../assets/blog/${fileName}`, import.meta.url).href;

export const blogPosts = [
  {
    id: 1,
    day: 'Day 01',
    image: blogImage('day01.png'),
    description: `Day 01 - Cybersecurity Self-Learning Journey

Today I started my cybersecurity learning journey through self-study and research.

Topics Covered:
• Ransomware
• Malware
• Virus vs. Trojan Horse

Key Takeaway:
Understanding the differences between viruses, Trojan horses, and ransomware builds a strong cybersecurity foundation.`,
  },
  //   {
  //     id: 2,
  //     day: 'Day 02',
  //     image: blogImage('day02.jpg'),
  //     description:
  //       'On the second day, I focused on defensive thinking and the habits that support it, including observation, verification, and documenting small wins. I explored how attackers think, how defenders respond, and how to train myself to notice patterns before they become problems. This made the learning process feel more practical and less abstract.',
  //   },
];
