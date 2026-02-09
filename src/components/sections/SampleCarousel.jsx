import { useEffect, useMemo, useState } from 'react'
import Papa from 'papaparse'
import { InlineMath, BlockMath } from 'react-katex'
import './Section.css'

function SampleCarousel({ domain, subdomain }) {
  const [samples, setSamples] = useState([])
  const [index, setIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let mounted = true
    const load = async () => {
      try {
        const response = await fetch('/csv_samples/sample_questions.csv')
        if (!response.ok) {
          throw new Error('Failed to load sample questions')
        }
        const csvText = await response.text()
        const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true })
        if (parsed.errors?.length) {
          console.warn('CSV parse warnings', parsed.errors)
        }
        const rows = parsed.data
          .filter((row) => row.domain)
          .map((row) => ({
            question: (row.question || '').trim(),
            domain: (row.domain || '').trim(),
            subdomain: (row.sub_domain || '').trim(),
            answer: (row.answer || '').trim(),
            references: (row.reference || '').split(/\n+/).map((ref) => ref.trim()).filter(Boolean),
          }))
        if (mounted) {
          setSamples(rows)
          setLoading(false)
        }
      } catch (err) {
        if (mounted) {
          setError(err.message || 'Failed to load samples')
          setLoading(false)
        }
      }
    }
    load()
    return () => {
      mounted = false
    }
  }, [])

  const filtered = useMemo(() => {
    return samples.filter((sample) => {
      if (domain && sample.domain !== domain) return false
      if (subdomain && sample.subdomain !== subdomain) return false
      return true
    })
  }, [samples, domain, subdomain])

  useEffect(() => {
    setIndex(0)
  }, [domain, subdomain])

  const current = filtered[index]
  const isUrl = (value) => value.startsWith('http')
  const renderWithLatex = (text) => {
    if (!text) return null
    const parts = []
    let remaining = text

    const pushText = (value) => {
      if (!value) return
      parts.push(
        <span key={`text-${parts.length}`} className="sample-text">
          {value}
        </span>
      )
    }

    while (remaining.length) {
      const blockMatch = remaining.match(/\\\[(.+?)\\\]/s)
      const inlineMatch = remaining.match(/\\\((.+?)\\\)/s)

      const blockIndex = blockMatch ? blockMatch.index : -1
      const inlineIndex = inlineMatch ? inlineMatch.index : -1

      if (blockIndex === -1 && inlineIndex === -1) {
        pushText(remaining)
        break
      }

      const useBlock = blockIndex !== -1 && (inlineIndex === -1 || blockIndex < inlineIndex)
      const match = useBlock ? blockMatch : inlineMatch
      const matchIndex = useBlock ? blockIndex : inlineIndex

      pushText(remaining.slice(0, matchIndex))

      const latex = match[1]
      if (useBlock) {
        parts.push(<BlockMath key={`block-${parts.length}`} math={latex} />)
      } else {
        parts.push(<InlineMath key={`inline-${parts.length}`} math={latex} />)
      }

      remaining = remaining.slice(matchIndex + match[0].length)
    }

    return parts
  }

  if (loading) {
    return <div className="section-card">Loading sample questions...</div>
  }

  if (error) {
    return <div className="section-card">Unable to load samples: {error}</div>
  }

  if (!filtered.length) {
    return <div className="section-card">No samples found for this domain.</div>
  }

  return (
    <div className="section-card section-card--step">
      <div className="sample-nav">
        <button
          className="sample-nav-button"
          onClick={() => setIndex((prev) => Math.max(prev - 1, 0))}
          disabled={index === 0}
          aria-label="Previous sample"
        >
          ←
        </button>
        <div className="sample-nav-label">
          Sample {index + 1} of {filtered.length}
        </div>
        <button
          className="sample-nav-button"
          onClick={() => setIndex((prev) => Math.min(prev + 1, filtered.length - 1))}
          disabled={index === filtered.length - 1}
          aria-label="Next sample"
        >
          →
        </button>
      </div>

      <div className="sample-meta">
        <div className="sample-field">
          <div className="sample-label">Domain</div>
          <div className="sample-value">{current.domain}</div>
        </div>
        <div className="sample-field">
          <div className="sample-label">Subdomain</div>
          <div className="sample-value">{current.subdomain}</div>
        </div>
      </div>

      <div className="step-subsection">
        <h4 className="step-subtitle">Question</h4>
        <div className="sample-text">{renderWithLatex(current.question)}</div>
      </div>

      <div className="step-subsection">
        <h4 className="step-subtitle">Answer</h4>
        <div className="sample-text">{current.answer}</div>
      </div>

      <div className="step-subsection">
        <h4 className="step-subtitle">References</h4>
        <ul className="sample-list">
          {current.references.map((ref, idx) => (
            <li key={`${ref}-${idx}`}>
              {isUrl(ref) ? (
                <a className="inline-link" href={ref} target="_blank" rel="noreferrer">
                  {ref}
                </a>
              ) : (
                ref
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SampleCarousel
