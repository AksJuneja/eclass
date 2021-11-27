import {
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
  } from "@material-ui/core";
  import React, { useState } from "react";
  import { useLocalContext } from "../../context/context";
  import Form from "./Form";
  import "./style.css";
  const CreateClass = () => {
    const { createClassDialog, setCreateClassDialog } = useLocalContext();
    const [check, setChecked] = useState(false);
    const [showForm, setShowForm] = useState(false);
    return (
      <div>
        <Dialog
          onClose={() => setCreateClassDialog(false)}
          aria-labelledby="customized-dialog-title"
          open={createClassDialog}
          maxWidth={showForm ? "lg" : "xs"}
          className="form__dialog"
        >
          {showForm ? (
            <Form />
          ) : (
            <>
              <div className="class__title">
                Using E-Class for Educational Institutes?
              </div>
              <DialogContent className="class__content">
                <p className="class__text">
                  <p>If so, you must sign up for a free</p>
                  <a href="/help" className="class__link">
                    G Suite for Education
                  </a>
                  account before you can use Classroom
                  <a href="/learn" className="class__link2">
                    Learn More.
                  </a>
                </p>
                <p>
                  G Suite for Education lets institutes provide additional
                  <a href="/privacy" className="class__link2 class__link">
                    privacy and security
                  </a>
                  protections that are important in premises setting. Students
                  cannot use e-Class with personal accounts.
                </p>
  
                <div className="class__checkboxWrapper">
                  <Checkbox color="primary" onChange={() => setChecked(!check)} />
                  <p>
                    I've read and understood the above notice!
                  </p>
                </div>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={() => setCreateClassDialog(false)}>
                  Close
                </Button>
  
                <Button
                  autoFocus
                  color="primary"
                  disabled={!check}
                  onClick={() => setShowForm(true)}
                >
                  Continue
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </div>
    );
  };
  
  export default CreateClass;