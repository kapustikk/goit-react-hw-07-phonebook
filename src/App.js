import { useSelector } from 'react-redux';
import { getLoading } from './redux/phonebook-selectors';
import ContactForm from './components/СontactForm/ContactForm';
import ContactList from './components/ContactList/ContactList.js';
import Filter from './components/Filter/Filter';
import Container from './components/Container/Container';

function App() {
  const loader = useSelector(getLoading);

  return (
    <Container>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        {loader && <p>Loading...</p>}
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Container>
  );
}

export default App;
