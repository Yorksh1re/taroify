import { default as StepperElement, StepperProps } from "./stepper"
import StepperButton from "./stepper-button"
import StepperInput from "./stepper-input"

interface StepperInterface {
  (props: StepperProps): JSX.Element

  Input: typeof StepperInput
  Button: typeof StepperButton
}

const Stepper = StepperElement as StepperInterface

Stepper.Input = StepperInput
Stepper.Button = StepperButton

export default Stepper