import './App.css';
import InputForm from './components/InputForm';
import Reviews from './components/Reviews';
function App() {
  return (
    <>
    <head>
    </head>
      <div class="logoBanner">
        <h1 class="logo">Tree<span class='ify'>ify</span></h1>
      </div>
      <div class="slogan">Where Business Meets Sustainability.</div>
      <Reviews />
      <InputForm></InputForm>
    </>
  );
}

export default App;
