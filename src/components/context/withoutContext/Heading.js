export default function Heading({ level, children }) {
    switch (level) {
      case 1:
        return <h1>{children}</h1>;
      case 2:
        return <h2>{children}</h2>;
      case 3:
        return <h3>{children}</h3>;
      case 4:
        return <h4>{children}</h4>;
      case 5:
        return <h5>{children}</h5>;
      case 6:
        return <h6>{children}</h6>;
      default:
        throw Error('Unknown level: ' + level);
    }
  }
  //notes to explain propdrilling without context
  //Let’s say you want multiple headings within the same Section to always have the same size:
  //Currently, you pass the level prop to each <Heading> separately:
  //It would be nice if you could pass the level prop to the <Section> component instead and remove it from the <Heading>.
  // This way you could enforce that all headings in the same section have the same size:

//But how can the <Heading> component know the level of its closest <Section>? 
//That would require some way for a child to “ask” for data from somewhere above in the tree.
//solution:context
//Context lets a parent—even a distant one!—provide some data to the entire tree inside of it.
