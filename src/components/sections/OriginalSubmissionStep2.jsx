import './Section.css'
import { InlineMath, BlockMath } from 'react-katex'
import modalitySample from '../../../images/modality_sample.png'
import datasetSample from '../../../images/dataset_sample.png'
import questionSample from '../../../images/question_sample.png'

function OriginalSubmissionStep2() {
  return (
    <section className="section">
      <h2>Step 2: Multimodal File & Question</h2>
      <div className="section-card section-card--step step2-images">
        <h3 className="step-title">🧾 Multimodal File & Question</h3>
        <div className="step-subsection">
          <h4 className="step-subtitle">1. Confirm Modality</h4>
          <p>For each task you will be assigned a <strong>Modality</strong>, this indicates whether it&apos;s mandatory or optional to upload a file.</p>
          <img src={modalitySample} alt="Modality selection example" />
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">2. Upload your data file (if required)</h4>
          <p>
            <strong>Your data file must be in .csv or .jpg/.png format.</strong> For the data, you
            can either create a data file yourself, or you can find an open source data file for use.
          </p>
          <p>
            Open source data files must have an explicit CC0 license. This{' '}
            <a
              className="inline-link"
              href="https://dataverse.harvard.edu/dataverse/harvard?q=&fq1=license%3A%22CC0+1.0%22&fq0=dvObjectType%3A%28dataverses+OR+datasets%29&types=dataverses%3Adatasets&sort=dateSort&order="
              target="_blank"
              rel="noreferrer"
            >
              database
            </a>{' '}
            is a good source, but please ensure that the &quot;CC0 1.0&quot; License filter is selected.
          </p>
          <img src={datasetSample} alt="Dataset upload example" />
        </div>
        <div className="step-subsection">
          <h4 className="step-subtitle">3. Write your question</h4>
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
                <ol type="a">
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
          <div className="callout callout--highlight">
            ⚠️ <strong>Multi-Part Questions vs. Multi-Part Reasoning</strong>
            <p><strong>What we want:</strong> Questions that require multi-step reasoning to solve a single problem.</p>
            <p><strong>What we don&apos;t want:</strong> Multi-part questions that ask for multiple separate answers.</p>
            <p><strong>Good example (multi-step reasoning):</strong></p>
            <p>&quot;Calculate the growth rate of the bacterial population using the provided OD measurements and the logistic growth model.&quot;</p>
            <p>This is one question that requires multiple steps: transforming the data, applying the model, and calculating the final rate.</p>
            <p><strong>Bad example (multi-part question):</strong></p>
            <p>&quot;Calculate the mean, median, and standard deviation of the dataset. Then determine if the distribution is normal. Finally, identify any outliers.&quot;</p>
            <p>This asks for three separate calculations/analyses, not one problem that requires multiple steps.</p>
            <p><strong>Key distinction:</strong> Your question should ask for <strong>one answer or explanation</strong> that requires multiple reasoning steps to reach, not multiple separate answers.</p>
          </div>
          <img src={questionSample} alt="Question example" />
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
