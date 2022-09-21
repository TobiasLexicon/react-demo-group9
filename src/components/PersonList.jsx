import { persons } from '../data/persons';

export const PersonList = () => {
  return (
    <div>
      <h1>Person list</h1>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>
            <ul className='dataLine'>
              <li>{person.id}</li>
              <li>{person.firstName}</li>
              <li>{person.lastName}</li>
              <li>{person.email}</li>
              <li>{person.role}</li>
              <li>{person.trade}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
