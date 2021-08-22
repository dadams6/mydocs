# README

Uses Parcel to compile React code and serve on http://localhost:1234 - `npm start`

Uses json-server to mimic a REST API using a json file served on http://localhost:3000/data - `json-server --watch src/data.json`

## To Do:

- catch errors on data responses
- consider making addtional fetch calls to get contents of folder rather than fetching all the data in one go and then hide/showing folder contents
- consider using state to manage onClick event in function component in OutputData
- add onClick event to folder name so "name" and "type" icon can be clicked to open/close folder
- add sort functionality to each column of the table via a clickable arrow that allows the user to sort the documents in an ascending or decending order
- add filter functionality to filter by filename