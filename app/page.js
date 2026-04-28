import GoodButton from './like-button';

function Header({ title }) {
  return <h1>{title ? title : 'Default Title'}</h1>;
}
  
const names = ['こぶた', 'たぬき', 'きつね'];
  
function Namelist() {
 return (
  <div>
   <ul>
    {names.map((name) => (
     <li key={name}>{name}</li>
    ))}
   </ul>
  </div>
 );
}

export default function HomePage() {
 return (
  <div>
   <Header title="React"/>
   <Namelist />
   <GoodButton />
  </div>
 );
}