# Week 1 JavaScript Practice

## Overview
This repository contains solutions for the Week 1 JavaScript Practice assignment. The solutions are implemented in JavaScript, with each challenge placed in its own file.

## Repository Structure
```
📂 wk1-js-practice
│── 📂 grade-generator
│   ├── gradeGenerator.js
│── 📂 speed-detector
│   ├── speedDetector.js
│── 📂 net-salary-calculator
│   ├── netSalaryCalculator.js
│── 📂 sorting-algorithms
│   ├── bubbleSort.js
│── 📂 staircase
│   ├── staircase.js
│── 📂 cylinder-volume
│   ├── cylinderVolume.js
│── README.md
```

## Challenges & Solutions

### 1. Student Grade Generator
**File:** `gradeGenerator.js`
- Prompts the user to enter student marks (0-100).
- Outputs the corresponding grade:
  - A: >79
  - B: 60-79
  - C: 50-59
  - D: 40-49
  - E: <40

### 2. Speed Detector
**File:** `speedDetector.js`
- Takes car speed as input.
- Prints "Ok" if speed is below 70.
- Adds 1 demerit point for every 5 km/s above 70.
- Suspends the license if demerit points exceed 12.

### 3. Net Salary Calculator
**File:** `netSalaryCalculator.js`
- Calculates Net Salary based on:
  - Basic salary & benefits
  - PAYE Tax, NHIF, NSSF deductions

### 4. Bubble Sort
**File:** `bubbleSort.js`
- Sorts an array of numbers in ascending order.
- Implements the Bubble Sort algorithm.

### 5. Staircase Problem
**File:** `staircase.js`
- Prints a staircase pattern using `#`.
- Example for `n=3`:
  ```
  #
  ##
  ###
  ```

### 6. Cylinder Volume Calculator
**File:** `cylinderVolume.js`
- Calculates the volume of a cylinder using `V = πr²h`.
- Outputs result with 4 decimal places.

## How to Run the Scripts
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/wk1-js-practice.git
   ```
2. Navigate to the folder:
   ```sh
   cd wk1-js-practice
   ```
3. Run a script using Node.js:
   ```sh
   node grade-generator/gradeGenerator.js
   ```
   (Replace with the appropriate script file.)

## Author
**Dominic Kipkorir**

