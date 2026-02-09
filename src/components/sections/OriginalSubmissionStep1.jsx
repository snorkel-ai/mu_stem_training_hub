import './Section.css'
import domainSample from '../../../images/domain_sample.png'
import subdomainSample from '../../../images/subdomain_sample.png'
import modalitySample from '../../../images/modality_sample.png'

function OriginalSubmissionStep1() {
  return (
    <section className="section">
      <h2>Original Submission - Step 1</h2>
      <div className="section-card section-card--step">
        <h3 className="step-title">✅ Category & Modality</h3>
        <div className="step-subsection">
          <h4 className="step-subtitle">1. Select a Domain</h4>
          <p>
            For each task you will be assigned a Domain based on your background knowledge.
            Select this same Domain in <strong>Annotations → Domain</strong>.
          </p>
          <div className="image-card">
            <img src={domainSample} alt="Domain selection example" />
            <div className="image-caption">Domain selection panel.</div>
          </div>
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">2. Select a Sub Domain</h4>
          <p>
            Once you’ve selected a domain, choose a subdomain. This is a free choice—select
            what you feel most comfortable with.
          </p>
          <div className="image-card">
            <img src={subdomainSample} alt="Subdomain selection example" />
            <div className="image-caption">Subdomain list example.</div>
          </div>
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">3. Confirm Modality</h4>
          <p>Your task modality indicates whether a data file is required or optional.</p>
          <div className="image-card">
            <img src={modalitySample} alt="Modality selection example" />
            <div className="image-caption">Modality setting in the task panel.</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OriginalSubmissionStep1
