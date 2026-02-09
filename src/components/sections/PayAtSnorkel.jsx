import './Section.css'

function PayAtSnorkel() {
  return (
    <section className="section">
      <h2>Pay at Snorkel</h2>
      <div className="section-card">
        <p><strong>Important pay rule for <span>einstein_stem</span></strong></p>
        <div className="callout callout--warn">
          💡 <strong>Only ACCEPTED tasks are paid.</strong> Submitting a task during the tasking
          period does <strong>not</strong> guarantee payment in that cycle.
        </div>
        <ul>
          <li>
            ✅ If a task is <strong>ACCEPTED</strong> (by Snorkel Ops or the Adjudication node), it is
            paid on the pay date for <strong>that acceptance cycle</strong>.
          </li>
          <li>
            ⏳ If a task is <strong>not accepted</strong>, it won’t be paid in the current cycle.
            It will be paid in the cycle when it is accepted.
          </li>
        </ul>
        <div className="callout callout--info">
          📅 This sample timeline shows a single pay cycle with key dates highlighted.
          Assume Friday is the <strong>6th</strong> of the month.
        </div>
      </div>
      <div className="section-card section-card--step">
        <h3 className="step-title">💸 Single pay cycle (sample)</h3>
        <div className="calendar">
          <div className="calendar-title">Single Pay Cycle</div>
          <div className="calendar-grid calendar-grid--header">
            <div className="calendar-day">Sun</div>
            <div className="calendar-day">Mon</div>
            <div className="calendar-day">Tue</div>
            <div className="calendar-day">Wed</div>
            <div className="calendar-day">Thu</div>
            <div className="calendar-day">Fri</div>
            <div className="calendar-day">Sat</div>
          </div>
          <div className="calendar-grid">
            <div className="calendar-cell"><span className="calendar-date">1</span></div>
            <div className="calendar-cell"><span className="calendar-date">2</span></div>
            <div className="calendar-cell"><span className="calendar-date">3</span></div>
            <div className="calendar-cell"><span className="calendar-date">4</span></div>
            <div className="calendar-cell"><span className="calendar-date">5</span></div>
            <div className="calendar-cell range-tasking range-start"><span className="calendar-date">6</span></div>
            <div className="calendar-cell range-tasking"><span className="calendar-date">7</span></div>

            <div className="calendar-cell range-tasking"><span className="calendar-date">8</span></div>
            <div className="calendar-cell range-tasking"><span className="calendar-date">9</span></div>
            <div className="calendar-cell range-tasking"><span className="calendar-date">10</span></div>
            <div className="calendar-cell range-tasking"><span className="calendar-date">11</span></div>
            <div className="calendar-cell range-tasking range-end"><span className="calendar-date">12</span></div>
            <div className="calendar-cell range-validation range-start"><span className="calendar-date">13</span></div>
            <div className="calendar-cell range-validation"><span className="calendar-date">14</span></div>

            <div className="calendar-cell range-validation"><span className="calendar-date">15</span></div>
            <div className="calendar-cell range-validation range-end">
              <span className="calendar-date">16</span>
              <span className="calendar-badge badge-pay-sent">$ Pay sent</span>
            </div>
            <div className="calendar-cell"><span className="calendar-date">17</span></div>
            <div className="calendar-cell"><span className="calendar-date">18</span></div>
            <div className="calendar-cell range-payday">
              <span className="calendar-date">19</span>
              <span className="calendar-badge badge-pay-received">✔ Pay received</span>
            </div>
            <div className="calendar-cell"><span className="calendar-date">20</span></div>
            <div className="calendar-cell"><span className="calendar-date">21</span></div>

            <div className="calendar-cell"><span className="calendar-date">22</span></div>
            <div className="calendar-cell"><span className="calendar-date">23</span></div>
            <div className="calendar-cell"><span className="calendar-date">24</span></div>
            <div className="calendar-cell"><span className="calendar-date">25</span></div>
            <div className="calendar-cell"><span className="calendar-date">26</span></div>
            <div className="calendar-cell"><span className="calendar-date">27</span></div>
            <div className="calendar-cell"><span className="calendar-date">28</span></div>

            <div className="calendar-cell"><span className="calendar-date">29</span></div>
            <div className="calendar-cell"><span className="calendar-date">30</span></div>
            <div className="calendar-cell calendar-cell--empty" />
            <div className="calendar-cell calendar-cell--empty" />
            <div className="calendar-cell calendar-cell--empty" />
            <div className="calendar-cell calendar-cell--empty" />
            <div className="calendar-cell calendar-cell--empty" />
          </div>
          <div className="calendar-legend">
            <span className="legend-item">
              <span className="legend-swatch legend-tasking" />
              Tasking period (6–12)
            </span>
            <span className="legend-item">
              <span className="legend-swatch legend-validation" />
              Validation period (13–16)
            </span>
            <span className="legend-item">
              <span className="legend-swatch legend-pay" />
              Pay sent (16) / Pay received (18)
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PayAtSnorkel
