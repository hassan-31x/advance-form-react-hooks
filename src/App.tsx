import { useMultiStepForm } from "./useMultiStepForm"
import UserForm from "./UserForm"
import EducationForm from "./EducationForm"
import AddressForm from "./AddressForm"
import { FormEvent } from "react"

function App() {

  const { steps, currentStepIndex, currentStep, back, next } = useMultiStepForm([<UserForm />, <AddressForm />, <EducationForm />])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    next()
  }
  
  return (
    <div className="relative bg-white border border-black p-10 m-5 rounded-lg">
      <form onSubmit={handleSubmit}>

        <div className="absolute top-2 right-2">
          {currentStepIndex + 1} / {steps.length}
        </div>
        {currentStep}

        <div className="mt-4 flex gap-2 justify-end">
          {currentStepIndex != 0 && <button type="button" className="border" onClick={back}>Back</button>}
          <button type="submit" className="border">{currentStepIndex != steps.length-1 ? 'Next' : 'Submit'}</button>
        </div>
      </form>
    </div>
  )
}

export default App
