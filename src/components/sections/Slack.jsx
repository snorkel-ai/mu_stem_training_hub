import './Section.css'
import slackSidebar from '../../../images/einstein_slack.png'

function Slack() {
  return (
    <section className="section">
      <h2>Slack</h2>
      <div className="section-card">
        <p>Slack is the primary communication channel for project updates and support.</p>
        <p>Use it for announcements, feedback, and quick help.</p>
      </div>
      <div className="card-grid">
        <div className="section-card section-card--step">
          <h3 className="step-title">📩 Step 1: Accept your invite</h3>
          <ol>
            <li>Watch for a Slack invite email to the Snorkel Expert Contributors workspace.</li>
            <li>You can use Slack in a browser or the desktop/mobile apps.</li>
            <li>If you are new to Slack, accept the invite and complete setup first.</li>
          </ol>
        </div>
        <div className="section-card section-card--step">
          <h3 className="step-title">#️⃣ Step 2: Find your project channel</h3>
          <ol>
            <li>When assigned, you will be added to the project channel.</li>
            <li>For Einstein STEM, look for the <strong>#einstein_submission</strong> channel.</li>
          </ol>
          <img src={slackSidebar} alt="Slack workspace sidebar with project channel" />
        </div>
      </div>
      <div className="section-card section-card--step">
        <h3 className="step-title">💬 Step 3: Use the channel</h3>
        <ul>
          <li>Check for updates and announcements.</li>
          <li>Ask questions and share blockers early.</li>
          <li>Keep task-specific discussion in the project channel.</li>
        </ul>
      </div>
    </section>
  )
}

export default Slack
