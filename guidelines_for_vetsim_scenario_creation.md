# Guidelines for VetSim Scenario Creation

Dear Colleague,

Thank you for contributing a clinical scenario to our Open VetSim training platform! 

To ensure a seamless integration of your medical expertise with our tablet-based interactive dashboard, please follow this simple, two-step process.

---

## 🟢 STEP 1: Physiological Setup (Open VetSim Editor)

You will use the official **Open VetSim Scenario Editor** to build the patient's physiological responses.

1.  **Patient & Vitals:** Set up the patient's initial state (Heart Rate, Respiratory Rate, BP, ECG rhythm, etc.).
2.  **Events & Triggers:** Create the specific events (e.g., *give_dobutamine*, *bolus_ringer*) and link them to physiological changes (e.g., *increase BP by 20*).
3.  **Save:** Save your work. This will generate a **`main.xml`** file.

*Note: Please focus ONLY on the physiology here. Do not worry about laboratory results or images in this software.*

---

## 🔵 STEP 2: Clinical & Didactic Data (The "Scenario Kit")

Because Open VetSim does not handle complex medical records (like PDF lab results or ultrasound images) or evaluate the student's final performance, we handle this through our Interactive Tablet Dashboard.

Please compile the following information and send it to me along with your `main.xml` file. I will use our custom interface builder to integrate these into your scenario in just a few minutes.

### A. Media & Diagnostics
Please attach to your email any images or text you want the students to receive when they request a diagnostic test.
*   **Examples:** `xray_abdomen.jpg`, `blood_gas_results.txt`, `ultrasound_tfast.png`.
*   *Please specify which event ID triggers which result (e.g., "When they click 'US Abdomen', show them ultrasound_tfast.png").*

### B. Didactic Logic (Win/Loss Conditions)
Please fill out the following logic gates so the tablet can evaluate the students:

**🏆 The Win Condition**
*   **Required Actions:** What specific actions MUST the student perform to successfully stabilize the patient? *(e.g., They must give Ringer Lactate AND Dobutamine).*
*   **Success Message:** What text should appear on the tablet when they win? *(e.g., "Congratulations! Hemodynamic stability achieved. Patient ready for surgery.")*

**☠️ Fatal Errors (Bivi Fatali)**
Are there any actions that result in immediate patient death or case failure if done incorrectly or out of sequence?

*   **Fatal Error 1:**
    *   **Action taken:** *(e.g., Sending the patient to X-Ray)*
    *   **Without having done:** *(e.g., Giving IV Fluids first)*
    *   **Failure Message:** *(e.g., "CRITICAL ERROR: Patient collapsed in the radiology department due to unmanaged hypovolemia. Case Failed.")*

*   **Fatal Error 2:** (Optional)
    *   **Action taken:**
    *   **Without having done:**
    *   **Failure Message:**

---

### What to send me:
Please send an email containing:
1.  Your **`main.xml`** file.
2.  Any **images/texts** for diagnostic reports.
3.  This completed **Didactic Logic** checklist.

I will take care of the technical integration and prepare the final scenario for the iPads. 

Thank you for your invaluable contribution to the ECEIM wetlab!