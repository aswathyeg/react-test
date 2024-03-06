import Section from './components/context/withContext/Section.js';

import Heading from './components/context/withContext/Heading.js';

export default function App() {
  
  return (
    <Section >
      <Heading >Title</Heading>
      <Section >
        <Heading >Heading</Heading>
        <Heading >Heading</Heading>
        <Heading>Heading</Heading>

        <Section >
          <Heading >Sub-heading</Heading>
          <Heading >Sub-heading</Heading>
          <Heading >Sub-heading</Heading>

          <Section >
            <Heading >Sub-sub-heading</Heading>
            <Heading >Sub-sub-heading</Heading>
            <Heading >Sub-sub-heading</Heading>

          </Section>
        </Section>
      </Section>
    </Section>
  );
}
