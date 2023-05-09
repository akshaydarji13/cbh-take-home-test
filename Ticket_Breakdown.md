# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

- Ticket-1: New columns `id_by_facility` in Agents table
  Implementation details:
- Add a column in Agents table with name `id_by_facility` default `NULL`
- Create a function to generate and store custom ids for each agent in Agents table in `id_by_facility` column. Function should take Agent id as input

Acceptance criteria

- each value of `id_by_facility` should be unique with respect to facility id
- Function should generate a unique id for an Agent and store it in Agents table

Time/effort
4 hrs

- Ticket-2: Return `id_by_facility` in `getShiftsByFacility`
  Implementation details:
- Return `id_by_facility` for each Agent getting it from Agents table in the return value of `getShiftsByFacility`

Acceptance criteria

- `getShiftsByFacility` function should return `id_by_facilty` value for each agent along with other details

Time/effort
1 hrs

- Ticket-3: Use `id_by_facility` in `generateReport`
  Implementation details:
- Function `generateReport` should use `id_by_facility` instead of Agnet id to generate report for Facility's shifts

Acceptance criteria

- Function `generateReport` should use `id_by_facility` instead of Agnet id to generate report for Facility's shifts

Time/effort
1 hrs
