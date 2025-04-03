import './App.css';
import { FaHome, FaUsers, FaTools, FaMoneyBillWave, FaFileAlt, FaBell, FaExclamationTriangle } from 'react-icons/fa';
import { MdAnnouncement } from 'react-icons/md';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Apartment Management System</h1>
        <nav>
          <ul>
            <li><a href="#home"><FaHome /> Home</a></li>
            <li><a href="#committee"><FaUsers /> Committee Members</a></li>
            <li><a href="#maintenance"><FaTools /> Maintenance</a></li>
            <li><a href="#finance"><FaMoneyBillWave /> Financial Management</a></li>
            <li><a href="#documents"><FaFileAlt /> Document Management</a></li>
          </ul>
        </nav>
      </header>
      <main className="App-main">
        <section id="home">
          <h2>Welcome to Apartment Management System</h2>
          <div className="dashboard-grid">
            <div className="dashboard-item">
              <MdAnnouncement className="dashboard-icon" />
              <h3>Latest Announcements</h3>
              <ul>
                <li>Notice on Property Fee Payment This Month</li>
                <li>Annual Elevator Maintenance Plan Announcement</li>
                <li>Community Landscaping Project Launch</li>
              </ul>
            </div>
            <div className="dashboard-item">
              <FaBell className="dashboard-icon" />
              <h3>To-Do List</h3>
              <ul>
                <li>Building No.3 Fire Safety Annual Inspection</li>
                <li>Underground Parking Lot Lighting Repair</li>
                <li>Monthly Owners Committee Meeting</li>
              </ul>
            </div>
            <div className="dashboard-item">
              <FaExclamationTriangle className="dashboard-icon" />
              <h3>Emergency Notices</h3>
              <ul>
                <li>Typhoon Warning: Please Prepare for Prevention</li>
                <li>Building No.6 Water Pipe Repair Notice</li>
                <li>Temporary Parking Area Adjustment Notice</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
