import './Section.css'
import platformLogin from '../../../images/platform_login.png'
import projectPage from '../../../images/einstein_project_page.jpg'

function ExpertsPortal() {
  return (
    <section className="section">
      <h2>Experts Portal</h2>
      <div className="section-card">
        <p>Use the Snorkel Expert Platform to access your assigned Einstein STEM tasks.</p>
        <p>Follow the steps below to get set up quickly.</p>
      </div>
      <div className="section-card">
        <h3>Platform access</h3>
        <p>
          Go to{' '}
          <a className="inline-link" href="https://experts.snorkel-ai.com/home" target="_blank" rel="noreferrer">
            https://experts.snorkel-ai.com/home
          </a>{' '}
          and sign in with the email address that received your project invite.
        </p>
      </div>
      <div className="card-grid">
        <div className="section-card section-card--step">
          <h3 className="step-title">✅ Step 1: Sign in</h3>
          <ol>
            <li>Check your invite email for login credentials and a temporary password.</li>
            <li>The temporary password may include punctuation or special characters.</li>
            <li>You will be prompted to change your password after your first login.</li>
          </ol>
          <div className="callout callout--warn">🔒 If you don’t receive a temporary password, contact the support team.</div>
          <img src={platformLogin} alt="Snorkel platform login screen" />
        </div>
        <div className="section-card section-card--step">
          <h3 className="step-title">🗂️ Step 2: Open your project</h3>
          <ol>
            <li>On the home screen you will see project task options.</li>
            <li>Select the task you are assigned to begin.</li>
          </ol>
          <div className="callout callout--info">At project start, only Original Submission may be enabled.</div>
          <img className="image-small" src={projectPage} alt="Einstein STEM project list view" />
        </div>
      </div>
      <div className="section-card">
        <h3>First-time user sign-in (reference table)</h3>
        <table className="info-table">
          <thead>
            <tr>
              <th>Topic</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Invite email</td>
              <td>You will receive login credentials and a temporary password.</td>
            </tr>
            <tr>
              <td>Temporary password</td>
              <td>
                The password may include punctuation at the end. Include all letters, numbers,
                punctuation, and special characters.
              </td>
            </tr>
            <tr>
              <td>Password update</td>
              <td>You will be asked to change your password once you log in.</td>
            </tr>
            <tr className="highlight-row">
              <td>Need help?</td>
              <td>If you don’t receive a temporary password, contact the support team.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ExpertsPortal
