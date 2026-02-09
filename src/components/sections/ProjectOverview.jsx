import './Section.css'
import projectFlow from '../../../images/project_flow.png'

function ProjectOverview() {
  return (
    <section className="section">
      <h2>Project Overview</h2>
      <div className="section-card">
        <h3>Workflow overview</h3>
        <p>The diagram below shows how tasks move through the Einstein STEM workflow.</p>
        <img className="image-wide" src={projectFlow} alt="Einstein STEM tasking workflow diagram" />
      </div>
      <div className="card-grid card-grid--two">
        <div className="section-card">
          <h3>Target distribution</h3>
          <table className="info-table">
            <thead>
              <tr>
                <th>Tier</th>
                <th>Target distribution</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Frontier</td>
                <td>~ 20 - 30%</td>
              </tr>
              <tr>
                <td>Advanced</td>
                <td>~ 30 - 40%</td>
              </tr>
              <tr>
                <td>Core</td>
                <td>~ 20 - 30%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="section-card">
          <h3>Short-form vs. long-form distribution</h3>
          <table className="info-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Distribution</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Short-form verifiable final answer</td>
                <td>(~50%)</td>
                <td>Numeric, symbolic, categorical, or otherwise deterministically checkable final answers.</td>
              </tr>
              <tr>
                <td>Long-form answer</td>
                <td>(~50%)</td>
                <td>Multi-step scientific explanations, derivations, or analyses.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="section-card">
        <h3>Domain and subdomain taxonomy</h3>
        <table className="info-table info-table--wide">
          <thead>
            <tr>
              <th>Domain</th>
              <th>Subdomains</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mathematics</td>
              <td>
                Algebra, Calculus, Linear Algebra, Number Theory, Probability, Statistics,
                Geometry, Discrete Mathematics, Applied Mathematics
              </td>
            </tr>
            <tr>
              <td>Physics</td>
              <td>
                Classical Mechanics, Electromagnetism, Thermodynamics, Quantum Physics,
                Relativity, Astrophysics, Optics, Particle Physics, Applied Physics
              </td>
            </tr>
            <tr>
              <td>Chemistry</td>
              <td>
                Physical Chemistry, Organic Chemistry, Inorganic Chemistry, Analytical Chemistry,
                Biochemistry, Environmental Chemistry
              </td>
            </tr>
            <tr>
              <td>Biology</td>
              <td>
                Biophysics, Computational Biology, Genetics, Molecular & Cellular Biology,
                Physiology, Ecology & Environmental Biology, Microbiology, Biotechnology,
                Developmental Biology, Evolutionary Biology, Immunology
              </td>
            </tr>
            <tr>
              <td>Computer Science</td>
              <td>
                Algorithms & Data Structures, Computer Systems & Architecture, Software Engineering,
                Artificial Intelligence & Machine Learning, Databases & Information Systems,
                Networking & Cybersecurity, Human Computer Interaction & Graphics, Theory of Computation,
                Data Science
              </td>
            </tr>
            <tr>
              <td>Engineering</td>
              <td>
                Mechanical Engineering, Electrical Engineering, Computer Engineering, Civil Engineering,
                Chemical Engineering, Materials Engineering, Biomedical Engineering, Industrial Engineering
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="section-card">
        <h3>Pay rates by role and tier</h3>
        <table className="info-table">
          <thead>
            <tr>
              <th>Role / Tier</th>
              <th>Short Answer (No Data)</th>
              <th>Short Answer (Data)</th>
              <th>Long Answer (No Data)</th>
              <th>Long Answer (Data)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Core (OA - Accepted)</td>
              <td>$189</td>
              <td>$252</td>
              <td>$252</td>
              <td>$315</td>
            </tr>
            <tr>
              <td>Advanced (OA - Accepted)</td>
              <td>$252</td>
              <td>$347</td>
              <td>$347</td>
              <td>$410</td>
            </tr>
            <tr>
              <td>Frontier (OA - Accepted)</td>
              <td>$315</td>
              <td>$410</td>
              <td>$410</td>
              <td>$504</td>
            </tr>
            <tr>
              <td>Independent Submitter</td>
              <td>$63</td>
              <td>$63</td>
              <td>$126</td>
              <td>$126</td>
            </tr>
            <tr>
              <td>Preference Annotator</td>
              <td>$32</td>
              <td>$32</td>
              <td>$32</td>
              <td>$32</td>
            </tr>
            <tr>
              <td>Adjudication</td>
              <td>$95</td>
              <td>$95</td>
              <td>$189</td>
              <td>$189</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ProjectOverview
