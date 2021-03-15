
import Album from './components/Album';
import Copyright from './components/Copyright';
import './style.scss';

function App() {
  return (
    <div className="pageWrapper">
      {/* Perker Rap */}
      <Album src="https://open.spotify.com/embed/album/23XWJkbajNgPdvmwHoXeUp"/>
      {/* Country Pis */}
      <Album src="https://open.spotify.com/embed/album/5oH6XhYgqwJ9x6iw6azNiO"/>
      {/* ACTUALLY GODT MUSIk */}
      <Album src="https://open.spotify.com/embed/album/0e1WaSNDZnoPixaxDNdWo4"/>
      {/* Endnu mere godt musik */}
      <Album src="https://open.spotify.com/embed/album/2EadUtQ3hpx3Xt0HKAfOF9"/>

      <Copyright />
    </div>
  );
}

export default App;
