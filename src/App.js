import './styles/index.scss';
import DesktopNavigation from './components/DesktopNavigation';
import MobileNavigation from './components/MobileNavigation';
import Earnings from './components/Earnings';
import Expenses from './components/Expenses';
import Stats from './components/Stats';
import DateSearch from './components/DateSearch';
import RevenueChart from './components/RevenueChart';
import Feed from './components/Feed';
import UserCard from './components/UserCard';

function App() {
  return (
    <div className="App">
      <DesktopNavigation />
      <MobileNavigation />
      <div id="home-grid">
        <h1 className="greeting">Good morning, Luis!</h1>
        <UserCard />
        <Feed />
        <DateSearch />
        <div className="flex">
          <Earnings />
          <Expenses />
        </div>
        <Stats />
        <RevenueChart />
      </div>
    </div>
  );
}

export default App;
