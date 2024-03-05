
import './App.css';
import Headings from './components/context/withoutContext/Headings';
import Section from './components/context/withoutContext/Section';


function App() {
  return (
   <div>
<Section>
  <Headings level={1}></Headings>
  <Headings level={2}></Headings>
  <Headings level={3}></Headings>
  <Headings level={4}></Headings>
  <Headings level={5}></Headings>
  <Headings level={6}></Headings>
</Section>
   </div>
  );
}

export default App;
