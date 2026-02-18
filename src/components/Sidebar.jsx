import { useState } from 'react'
import './Sidebar.css'

const sections = [
  {
    id: 'welcome',
    label: 'Welcome to Snorkel',
    icon: '👋',
    children: [
      { id: 'experts-portal', label: 'Experts Portal', icon: '🧑‍💻' },
      { id: 'slack', label: 'Slack', icon: '💬' },
      { id: 'pay-at-snorkel', label: 'Pay at Snorkel', icon: '💳' },
    ],
  },
  { id: 'project-overview', label: 'Project Overview', icon: '📋' },
  {
    id: 'tasking-workflow',
    label: 'Tasking Workflow',
    icon: '⚙️',
    children: [
      { id: 'important-revisions', label: 'Important: Revisions', icon: '❗' },
      {
        id: 'original-submission',
        label: 'Original Submission',
        icon: '📝',
        children: [
          { id: 'os-step-1', label: 'Step 1: Category & Modality', icon: '✅' },
          { id: 'os-step-2', label: 'Step 2: File & Question', icon: '🧾' },
          { id: 'os-step-3', label: 'Step 3: Reference Steps', icon: '🧠' },
          { id: 'os-step-4', label: 'Step 4: Answer & References', icon: '📌' },
          { id: 'os-step-5', label: 'Step 5: Tags & Rubrics', icon: '📋' },
          { id: 'os-step-6', label: 'Step 6: Evaluation', icon: '✔️' },
        ],
      },
      { id: 'preference-annotation', label: 'Preference Annotation', icon: '✅' },
      { id: 'adjudication', label: 'Adjudication', icon: '⚖️' },
    ],
  },
  {
    id: 'dos-donts',
    label: "Do's and Dont's",
    icon: '✅',
    children: [
      { id: 'best-practices', label: 'Best Practices', icon: '⭐' },
      { id: 'common-errors', label: 'Common Errors', icon: '⚠️' },
      { id: 'what-to-avoid', label: 'What to Avoid', icon: '🚫' },
    ],
  },
  {
    id: 'sample-problems',
    label: 'Sample Problems',
    icon: '🧪',
    children: [
      { id: 'math', label: 'Mathematics', icon: '➗' },
      { id: 'biology', label: 'Biology', icon: '🧬' },
      { id: 'physics', label: 'Physics', icon: '⚛️' },
      { id: 'chemistry', label: 'Chemistry', icon: '🧪' },
      { id: 'computer-science', label: 'Computer Science', icon: '💻' },
    ],
  },
  { id: 'training-material', label: 'Useful Resources', icon: '📚' },
]

function Sidebar({ activeSection, setActiveSection }) {
  const buildExpandedState = (items, acc = {}) => {
    items.forEach((item) => {
      if (item.children?.length) {
        acc[item.id] = true
        buildExpandedState(item.children, acc)
      }
    })
    return acc
  }

  const [expanded, setExpanded] = useState(() => buildExpandedState(sections))

  const isDescendantActive = (item) =>
    item.children?.some(
      (child) => child.id === activeSection || isDescendantActive(child)
    )

  const handleSectionClick = (item) => {
    if (item.children?.length) {
      setExpanded((prev) => {
        const next = { ...prev }
        Object.keys(next).forEach((key) => {
          next[key] = false
        })
        next[item.id] = !prev[item.id]
        return next
      })
    }
    setActiveSection(item.id)
  }

  const renderItem = (item, depth = 0) => {
    const isActive = activeSection === item.id
    const isExpanded = expanded[item.id] || isDescendantActive(item)
    const hasChildren = item.children?.length
    const subitemClass =
      depth > 0 ? `sidebar-item sidebar-subitem ${depth > 1 ? 'sidebar-subitem--nested' : ''}` : 'sidebar-item'

    return (
      <li key={item.id}>
        <button
          className={`${subitemClass} ${isActive ? 'active' : ''}`}
          onClick={() => handleSectionClick(item)}
        >
          <span className="sidebar-icon">{item.icon}</span>
          <span className="sidebar-label">{item.label}</span>
          {hasChildren ? (
            <span className={`sidebar-caret ${isExpanded ? 'expanded' : ''}`}>▾</span>
          ) : null}
        </button>
        {hasChildren && isExpanded ? (
          <ul className={`sidebar-sublist ${depth >= 1 ? 'sidebar-sublist--nested' : ''}`}>
            {item.children.map((child) => renderItem(child, depth + 1))}
          </ul>
        ) : null}
      </li>
    )
  }

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul className="sidebar-list">
          {sections.map((section) => renderItem(section))}
        </ul>
      </nav>
      <div className="sidebar-footer">
        <div className="support-contacts">
          <h3 className="support-title">Support Contacts</h3>
          <p className="support-text">
            Feel free to use our slack channel <strong>#einstein_submission</strong> for any questions you may have or reach out to Liam Glynn.
          </p>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
