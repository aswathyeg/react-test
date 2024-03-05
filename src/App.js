
import './App.css';
import Headings from './components/context/withoutContext/Headings';
import Section from './components/context/withoutContext/Section';


function App() {
  return (
 
<Section>
  <Headings level={1}>Title</Headings>
  <Headings level={2}>Heading</Headings>
  <Headings level={3}>Sub-heading</Headings>
  <Headings level={4}>Sub-sub-heading</Headings>
  <Headings level={5}>Sub-sub-sub-heading</Headings>
  <Headings level={6}>Sub-sub-sub-sub-heading</Headings>
</Section>
  
  );
}

export default App;
