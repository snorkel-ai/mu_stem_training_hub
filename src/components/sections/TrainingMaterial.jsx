import './Section.css'

function TrainingMaterial() {
  return (
    <section className="section">
      <h2>Useful Resources</h2>
      <div className="section-card">
        <ul className="sample-list">
          <li>
            <a className="inline-link"
              href="https://dataverse.harvard.edu/dataverse/harvard?q=&fq1=license%3A%22CC0+1.0%22&fq0=dvObjectType%3A%28dataverses+OR+datasets%29&types=dataverses%3Adatasets&sort=dateSort&order="
              target="_blank"
              rel="noreferrer">
              Harvard Dataverse
            </a>
          </li>
          <li>
            <a
              className="inline-link"
              href="https://docs.google.com/document/d/1XLnoZRM5wXWNWp_8PtHQNFntOykjFwrNR2M8rQPqOF8/edit?tab=t.4fr5gdls7wir"
              target="_blank"
              rel="noreferrer"
            >
              [EXTERNAL] Einstein STEM Guidelines
            </a>
          </li>
          <li>
            <a className="inline-link" href="https://latexeditor.lagrida.com/" target="_blank" rel="noreferrer">
              LaTeX Equation Editor
            </a>
          </li>
          <li>
            <a className="inline-link" href="https://www.text2latex.com/" target="_blank" rel="noreferrer">
              Text2LaTeX
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default TrainingMaterial
