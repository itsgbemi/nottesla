export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h4>Tesla © 2025</h4>
            <ul className="footer-links">
              <li><a href="#">Privacy & Legal</a></li>
              <li><a href="#">Vehicle Recalls</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li><a href="#">News</a></li>
              <li><a href="#">Get Updates</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Locations</h4>
            <ul className="footer-links">
              <li><a href="#">Learn</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Schedule</h4>
            <ul className="footer-links">
              <li><a href="#">Drive Today</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="ask-question">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>
          <path d="M8 4c-1.1 0-2 .9-2 2h2c0-.6.4-1 1-1s1 .4 1 1c0 .6-.3.9-.7 1.2l-.3.3C8.4 7.7 8 8.3 8 9v1h2v-1c0-.6.3-.9.7-1.2l.3-.3C11.6 7.7 12 7.1 12 6c0-2.2-1.8-4-4-4zM9 12H7v-2h2v2z"/>
        </svg>
        Ask a Question
      </div>
    </footer>
  );
}
