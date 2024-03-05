import Section from './components/context/withoutContext/Section.js';

import Heading from './components/context/withoutContext/Heading.js';

export default function App() {
  //Let’s say you want multiple headings within the same Section to always have the same size:
  //Currently, you pass the level prop to each <Heading> separately:
  //It would be nice if you could pass the level prop to the <Section> component instead and remove it from the <Heading>.
  // This way you could enforce that all headings in the same section have the same size:

//But how can the <Heading> component know the level of its closest <Section>? 
//That would require some way for a child to “ask” for data from somewhere above in the tree.
//solution:context
  return (
    <Section>
      <Heading level={1}>Title</Heading>
      <Section>
        <Heading level={2}>Heading</Heading>
        <Heading level={2}>Heading</Heading>
        <Heading level={2}>Heading</Heading>
        <Section>
          <Heading level={3}>Sub-heading</Heading>
          <Heading level={3}>Sub-heading</Heading>
          <Heading level={3}>Sub-heading</Heading>
          <Section>
            <Heading level={4}>Sub-sub-heading</Heading>
            <Heading level={4}>Sub-sub-heading</Heading>
            <Heading level={4}>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}
