import WelcomeToSnorkel from './sections/WelcomeToSnorkel'
import ExpertsPortal from './sections/ExpertsPortal'
import Slack from './sections/Slack'
import PayAtSnorkel from './sections/PayAtSnorkel'
import ProjectOverview from './sections/ProjectOverview'
import TaskingWorkflow from './sections/TaskingWorkflow'
import ImportantRevisions from './sections/ImportantRevisions'
import OriginalSubmission from './sections/OriginalSubmission'
import OriginalSubmissionStep1 from './sections/OriginalSubmissionStep1'
import OriginalSubmissionStep2 from './sections/OriginalSubmissionStep2'
import OriginalSubmissionStep3 from './sections/OriginalSubmissionStep3'
import OriginalSubmissionStep4 from './sections/OriginalSubmissionStep4'
import OriginalSubmissionStep5 from './sections/OriginalSubmissionStep5'
import OriginalSubmissionStep6 from './sections/OriginalSubmissionStep6'
import PreferenceAnnotation from './sections/PreferenceAnnotation'
import Adjudication from './sections/Adjudication'
import DosAndDonts from './sections/DosAndDonts'
import BestPractices from './sections/BestPractices'
import CommonErrors from './sections/CommonErrors'
import WhatToAvoid from './sections/WhatToAvoid'
import SampleProblems from './sections/SampleProblems'
import Mathematics from './sections/Mathematics'
import Biology from './sections/Biology'
import Physics from './sections/Physics'
import Chemistry from './sections/Chemistry'
import ComputerScience from './sections/ComputerScience'
import TrainingMaterial from './sections/TrainingMaterial'
import './ContentArea.css'

function ContentArea({ activeSection }) {
  const renderContent = () => {
    switch (activeSection) {
      case 'welcome':
        return <WelcomeToSnorkel />
      case 'experts-portal':
        return <ExpertsPortal />
      case 'slack':
        return <Slack />
      case 'pay-at-snorkel':
        return <PayAtSnorkel />
      case 'project-overview':
        return <ProjectOverview />
      case 'tasking-workflow':
        return <TaskingWorkflow />
      case 'important-revisions':
        return <ImportantRevisions />
      case 'original-submission':
        return <OriginalSubmission />
      case 'os-step-1':
        return <OriginalSubmissionStep1 />
      case 'os-step-2':
        return <OriginalSubmissionStep2 />
      case 'os-step-3':
        return <OriginalSubmissionStep3 />
      case 'os-step-4':
        return <OriginalSubmissionStep4 />
      case 'os-step-5':
        return <OriginalSubmissionStep5 />
      case 'os-step-6':
        return <OriginalSubmissionStep6 />
      case 'preference-annotation':
        return <PreferenceAnnotation />
      case 'adjudication':
        return <Adjudication />
      case 'dos-donts':
        return <DosAndDonts />
      case 'best-practices':
        return <BestPractices />
      case 'common-errors':
        return <CommonErrors />
      case 'what-to-avoid':
        return <WhatToAvoid />
      case 'sample-problems':
        return <SampleProblems />
      case 'math':
        return <Mathematics />
      case 'biology':
        return <Biology />
      case 'physics':
        return <Physics />
      case 'chemistry':
        return <Chemistry />
      case 'computer-science':
        return <ComputerScience />
      case 'training-material':
        return <TrainingMaterial />
      default:
        return <WelcomeToSnorkel />
    }
  }

  return (
    <main className="content-area">
      <div className="content-container">{renderContent()}</div>
    </main>
  )
}

export default ContentArea
