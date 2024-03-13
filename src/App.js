import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import AccommodationPage from './pages/AccommodationPage'

function App() {
  return (
    <div className="App">
    <Container>
      <AccommodationPage />
    </Container>
  </div>
  );
}

export default App;
