import './Section.css'
import answerTypeSample from '../../../images/answer_type_sample.png'

function OriginalSubmissionStep4() {
  return (
    <section className="section">
      <h2>Original Submission - Step 4</h2>
      <div className="section-card section-card--step">
        <h3 className="step-title">✅ Final Answer & References</h3>
        <div className="step-subsection">
          <h4 className="step-subtitle">1. Select answer type</h4>
          <ul>
            <li>Select short‑form or long‑form.</li>
            <li>Short‑form: enter the final answer in the new text box.</li>
            <li>Long‑form: no final answer box is shown.</li>
          </ul>
          <div className="image-card">
            <img className="image-wide" src={answerTypeSample} alt="Answer type selection example" />
            <div className="image-caption">Answer type selection.</div>
          </div>
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">2. Add references</h4>
          <p>
            Add one or more citations in <strong>APA</strong> format with a brief relevance summary
            describing how each reference informs the problem or solution.
          </p>
          <div className="callout callout--info">
            Reference samples
            <pre className="code-block">{`Mathematics
Horn, R. A., & Johnson, C. R. (2013). Matrix analysis (2nd ed.). Cambridge University Press.
Relevance: Singular value theory, orthogonal invariance of norms, and matrix optimization foundations.

Golub, G. H., & Van Loan, C. F. (2013). Matrix computations (4th ed.). Johns Hopkins University Press.
Relevance: Classical treatment of the Eckart–Young theorem and optimal low-rank approximations.

Biology
Zwietering, M. H., Jongenburger, I., Rombouts, F. M., & van ’t Riet, K. (1990).
Modeling of the bacterial growth curve. Applied and Environmental Microbiology, 56(6), 1875–1881.
Relevance: Logistic growth models and parameter estimation from microbial OD data.

Seber, G. A. F., & Wild, C. J. (2003). Nonlinear regression. Wiley.
Relevance: Mathematical foundations for linearization and estimation in nonlinear biological models.`}</pre>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OriginalSubmissionStep4
