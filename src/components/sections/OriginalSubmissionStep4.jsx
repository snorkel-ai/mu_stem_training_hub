import './Section.css'
import answerTypeSample from '../../../images/answer_type_sample.png'
import answerReferenceSample from '../../../images/answer_reference_sample.png'

function OriginalSubmissionStep4() {
  return (
    <section className="section">
      <h2>Step 4: Final Answer & References</h2>
      <div className="section-card section-card--step step4-images">
        <h3 className="step-title">✅ Final Answer & References</h3>
        <div className="step-subsection">
          <h4 className="step-subtitle">1. Select answer type</h4>
          <p>Select short‑form or long‑form.</p>
          <ul>
            <li><strong>Short-form:</strong> enter the final answer in the new text box.</li>
            <li><strong>Long-form:</strong> no final answer box is shown.</li>
          </ul>
          <img className="image-wide" src={answerTypeSample} alt="Answer type selection example" />
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">2. Add references</h4>
          <p>
            Add one or more citations in <strong>APA</strong> format with a brief relevance summary
            describing how each reference informs the problem or solution.
          </p>
          <img className="image-wide" src={answerReferenceSample} alt="Reference and relevance input fields example" />
          <div className="callout callout--info">
            <div className="callout-heading">Reference samples</div>
            <div className="sample-block">
              <h5 className="sample-section-title">Mathematics</h5>
              <pre className="code-block">{`Reference 1: Horn, R. A., & Johnson, C. R. (2013). Matrix analysis (2nd ed.). Cambridge University Press.

Reference 2: Golub, G. H., & Van Loan, C. F. (2013). Matrix computations (4th ed.). Johns Hopkins University Press.`}</pre>
            </div>
            <div className="sample-block">
              <h5 className="sample-section-title">Biology</h5>
              <pre className="code-block">{`Reference 1: Zwietering, M. H., Jongenburger, I., Rombouts, F. M., & van ’t Riet, K. (1990). Modeling of the bacterial growth curve. Applied and Environmental Microbiology, 56(6), 1875–1881.

Reference 2: Seber, G. A. F., & Wild, C. J. (2003). Nonlinear regression. Wiley.`}</pre>
            </div>
          </div>
          <div className="callout callout--info">
            <div className="callout-heading">Relevance samples</div>
            <div className="sample-block">
              <h5 className="sample-section-title">Mathematics</h5>
              <pre className="code-block">{`Reference 1 Relevance: Singular value theory, orthogonal invariance of norms, and matrix optimization foundations.

Reference 2 Relevance: Classical treatment of the Eckart–Young theorem and optimal low-rank approximations.`}</pre>
            </div>
            <div className="sample-block">
              <h5 className="sample-section-title">Biology</h5>
              <pre className="code-block">{`Reference 1 Relevance: Logistic growth models and parameter estimation from microbial OD data.

Reference 2 Relevance: Mathematical foundations for linearization and estimation in nonlinear biological models.`}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OriginalSubmissionStep4
