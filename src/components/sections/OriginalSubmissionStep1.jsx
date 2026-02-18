import './Section.css'
import domainSample from '../../../images/domain_sample.png'
import subdomainSample from '../../../images/subdomain_sample.png'

function OriginalSubmissionStep1() {
  return (
    <section className="section">
      <h2>Step 1: Category & Modality</h2>
      <div className="section-card section-card--step step1-images">
        <h3 className="step-title">✅ Category & Modality</h3>
        <div className="step-subsection">
          <h4 className="step-subtitle">1. Select a Domain</h4>
          <p>
            For each task you will be assigned a Domain based on your background knowledge.
            Select this same Domain in <strong>Annotations → Domain</strong>.
          </p>
          <img src={domainSample} alt="Domain selection example" />
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">2. Select a Sub Domain</h4>
          <p>
            Once you’ve selected a domain, choose a subdomain. This is a free choice—select
            what you feel most comfortable with.
          </p>
          <img src={subdomainSample} alt="Subdomain selection example" />
        </div>
      </div>
    </section>
  )
}

export default OriginalSubmissionStep1
