import './App.css';
import newImg from './assets/img.png';
import { Signup } from './components/Signup';

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={newImg} alt=""/>
          <div className="text_1">
          <h4>Choose a date range</h4>
          <p>Lorem ipsum dolor sit amet conse aperiam vero fuga ipsa magni aut eligendi. Et explicabo adipisci amet pariatur?</p>
          </div>
        </div>
        <div className="col-md-5">
          <Signup />
        </div>
      </div>
    </div>
  );
}

export default App;
