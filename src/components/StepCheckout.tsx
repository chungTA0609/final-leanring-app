import { useEffect, useState } from "react";
import Step1 from "./Step1";
import Step3 from "./Step3";
import Step2 from "./Step2";

const StepCheckout = () => {
  const [step, setStep] = useState(1);
  const updateStep = (step: number) => {
    console.log(step);

    setStep(step);
  };
  const [stepComp, setStepComp] = useState(
    <Step1 submit={() => updateStep(2)}></Step1>
  );
  useEffect(() => {
    switch (step) {
      case 1:
        setStepComp(<Step1 submit={() => updateStep(2)}></Step1>);
        break;
      case 2:
        setStepComp(<Step2></Step2>);
        break;
      case 3:
        setStepComp(<Step3></Step3>);
        break;

      default:
        setStepComp(<Step1 submit={() => updateStep(2)}></Step1>);
        break;
    }
  }, [step]);

  return (
    <>
      <div className="form-wizard md">
        <div className="wizard-navigation">
          <div className="wizard-tab-content">{stepComp}</div>
        </div>{" "}
        <div className="wizard-card-footer clearfix">
          <div
            className="wizard-footer-left"
            style={{ display: step === 1 ? "none" : "" }}
          >
            <span role="button" onClick={() => updateStep(step - 1)}>
              <button type="button" className="wizard-btn">
                Back
              </button>
            </span>{" "}
          </div>{" "}
          <div className="wizard-footer-right">
            {" "}
            <span role="button">
              <button
                type="submit"
                className="wizard-btn"
                style={{ display: step !== 2 ? "none" : "" }}
                onClick={() => updateStep(step + 1)}
              >
                Next
              </button>
              <button
                type="submit"
                className="wizard-btn"
                style={{ display: step !== 3 ? "none" : "" }}
              >
                Finish
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default StepCheckout;
