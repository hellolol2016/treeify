import './App.css';
import InputForm from './components/InputForm';
import Reviews from './components/Reviews';
function App() {
  return (
    <>
      <div className="header">
        <div className="logoBanner">
          <h1 className="logo">Tree<span className='ify'>ify</span></h1>
        </div>
        <div className="slogan">Where Business Meets Sustainability.</div>
      </div>
      <div className="businessReviews">
      </div>
      <Reviews />
      <div className="inputGroup">
        <InputForm></InputForm>
      </div>
    </>
  );
}

export default App;
