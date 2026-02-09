import './Section.css'
import { InlineMath, BlockMath } from 'react-katex'
import datasetSample from '../../../images/dataset_sample.png'
import questionSample from '../../../images/question_sample.png'

function OriginalSubmissionStep2() {
  return (
    <section className="section">
      <h2>Original Submission - Step 2</h2>
      <div className="section-card section-card--step">
        <h3 className="step-title">🧾 Multimodal File & Question</h3>
        <div className="step-subsection">
          <h4 className="step-subtitle">1. Upload your data file (if required)</h4>
          <p>
            Data files must be <strong>CSV</strong>. Create your own or use open-source data with a
            <strong> CC0 license</strong>.
          </p>
          <div className="image-card">
            <img src={datasetSample} alt="Dataset upload example" />
            <div className="image-caption">Dataset upload example.</div>
          </div>
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">2. Write your question</h4>
          <p>Write a self‑contained question aligned to the chosen domain and subdomain.</p>
          <ul>
            <li>Require multi‑step reasoning (≥ 3 steps).</li>
            <li>Specify the required derivation/computation and the output format.</li>
          </ul>
          <div className="callout callout--highlight">
            ⚠️ <strong>Important guidelines for each question</strong>
            <ol>
              <li>Adhere to the chosen Domain and Sub Domain.</li>
              <li>Be fully self‑contained (solvable with your knowledge and uploaded data).</li>
              <li>If needed, format your question using <strong>RegEx</strong>.</li>
              <li>Require multi‑step reasoning (≥ 3 steps).</li>
              <li>
                Must specify:
                <ol>
                  <li>Required derivation or computation</li>
                  <li>Expected output form (symbolic, numeric, or descriptive)</li>
                </ol>
              </li>
            </ol>
          </div>
        <div className="callout callout--info">
          RegEx example:{' '}
          <InlineMath
            math={'\\texttt{\\\\b[A-Z]\\{3\\}-\\\\d\\{4\\}\\\\b}'}
          />
        </div>
          <div className="image-card">
            <img src={questionSample} alt="Question example" />
            <div className="image-caption">Question example.</div>
          </div>
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">Sample question: Mathematics</h4>
          <div className="code-block">
            <p>
              Let{' '}
              <InlineMath math={'A \\in \\mathbb{R}^{m \\times n}'} /> be a real matrix with singular
              values:
            </p>
            <BlockMath math={'\\sigma_1 \\ge \\sigma_2 \\ge \\cdots \\ge \\sigma_r > 0, \\quad r = \\operatorname{rank}(A).'} />
            <p>
              Fix an integer <InlineMath math={'k'} /> with <InlineMath math={'0 \\le k < r'} />.
              Consider the optimization problem:
            </p>
            <BlockMath math={'\\min_{X \\in \\mathbb{R}^{m \\times n},\\ \\operatorname{rank}(X) \\le k} \\ \\|A - X\\|_F.'} />
            <p><strong>Task:</strong></p>
            <p>Prove that every minimizer <InlineMath math={'X^\\star'} /> satisfies</p>
            <BlockMath math={'\\|A - X^\\star\\|_F^2 = \\sum_{i=k+1}^{r} \\sigma_i^2,'} />
            <p>
              and that one minimizer is obtained by truncating the SVD of{' '}
              <InlineMath math={'A'} /> to its top <InlineMath math={'k'} /> singular values.
            </p>
          </div>
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">Sample question: Biology</h4>
          <div className="code-block">
            <p>
              A microbial population is grown in batch culture and measured via{' '}
              <InlineMath math={'\\mathrm{OD}_{600}'} />. The population follows logistic growth:
            </p>
            <BlockMath math={'N(t) = \\frac{K}{1 + \\left(\\frac{K - N_0}{N_0}\\right)e^{-rt}}'} />
            <p>
              where <InlineMath math={'N(t)'} /> is proportional to{' '}
              <InlineMath math={'\\mathrm{OD}_{600}'} />, <InlineMath math={'K'} /> is the carrying
              capacity, <InlineMath math={'N_0'} /> is the initial population size, and{' '}
              <InlineMath math={'r'} /> is the intrinsic growth rate.
            </p>
            <p>You are provided with the dataset. Assume:</p>
            <ul>
              <li><InlineMath math={'\\mathrm{OD}_{600}'} /> is directly proportional to population size.</li>
              <li>Measurement noise is negligible.</li>
              <li><InlineMath math={'K = 0.450'} />.</li>
            </ul>
            <p><strong>Task:</strong></p>
            <p>
              Estimate the intrinsic growth rate <InlineMath math={'r'} /> (hr
              <InlineMath math={'^{-1}'} />).
            </p>
            <p>Expected output format: a single numeric value for <InlineMath math={'r'} />, rounded to three decimals.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OriginalSubmissionStep2
