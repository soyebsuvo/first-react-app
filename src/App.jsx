import './App.css'
import "./index.css"
import Head from "./components/Head.jsx"
import Card from "./components/Card"

function App() {
  return <>
  <Head />  
  <Card titleName="Bangladesh" desc="This is description 1 for card 1 . let's go to home"/>
  <Card titleName="England" desc="This is description 2 for card 2 . let's go to home"/>
  <Card titleName="India" desc="This is description 3 for card 3 . let's go to home"/>
  <Card titleName="Pakistan" desc="This is description 4 for card 4 . let's go to home"/>
  <Card titleName="Bhutan" desc="This is description 5 for card 5 . let's go to home"/>
  <Card titleName="Kanada" desc="This is description 6 for card 6 . let's go to home"/>
  <Card titleName="America" desc="This is description 7 for card 7 . let's go to home"/>
  </>      
}
export default App;
