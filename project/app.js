let students = JSON.parse(localStorage.getItem("students")) || [];
let sections = JSON.parse(localStorage.getItem("sections")) || [];
let results = JSON.parse(localStorage.getItem("results")) || [];

let editingStudent = null;
let editingSection = null;
let editingResult = null;

function saveLS() {
    localStorage.setItem("students", JSON.stringify(students));
    localStorage.setItem("sections", JSON.stringify(sections));
    localStorage.setItem("results", JSON.stringify(results));
}

/* -------------------- STUDENTS ---------------------- */

function refreshStudents() {
    let tbody = document.getElementById("studentTable");
    tbody.innerHTML = "";

    if (students.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="text-center">No students found.</td></tr>`;
        return;
    }

    students.forEach((s, i) => {
        tbody.innerHTML += `
            <tr>
                <td>${s.name}</td>
                <td>${s.email}</td>
                <td>${s.section}</td>
                <td>${s.date}</td>
                <td>
                    <button class="btn btn-sm btn-secondary me-2" onclick="editStudent(${i})">Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteStudent(${i})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function saveStudent() {
    let name = document.getElementById("studentName").value;
    let email = document.getElementById("studentEmail").value;
    let section = document.getElementById("studentSection").value;
    let date = document.getElementById("studentDate").value;

    let obj = { name, email, section, date };

    if (editingStudent !== null) students[editingStudent] = obj;
    else students.push(obj);

    editingStudent = null;
    saveLS();
    refreshStudents();
    location.reload();
}

function editStudent(i) {
    editingStudent = i;
    let s = students[i];

    studentName.value = s.name;
    studentEmail.value = s.email;
    studentSection.value = s.section;
    studentDate.value = s.date;

    new bootstrap.Modal("#studentModal").show();
}

function deleteStudent(i) {
    students.splice(i, 1);
    saveLS();
    refreshStudents();
}

/* -------------------- SECTIONS ---------------------- */

function refreshSections() {
    let tbody = document.getElementById("sectionTable");
    tbody.innerHTML = "";

    sections.forEach((s, i) => {
        let count = students.filter(st => st.section === s.name).length;

        tbody.innerHTML += `
            <tr>
                <td>${s.name}</td>
                <td>${s.desc}</td>
                <td>${count}</td>
                <td>
                    <button class="btn btn-sm btn-secondary me-2" onclick="editSection(${i})">Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteSection(${i})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function saveSection() {
    let name = sectionName.value;
    let desc = sectionDesc.value;

    let obj = { name, desc };

    if (editingSection !== null) sections[editingSection] = obj;
    else sections.push(obj);

    editingSection = null;
    saveLS();
    location.reload();
}

function editSection(i) {
    editingSection = i;
    let s = sections[i];

    sectionName.value = s.name;
    sectionDesc.value = s.desc;

    new bootstrap.Modal("#sectionModal").show();
}

function deleteSection(i) {
    sections.splice(i, 1);
    saveLS();
    location.reload();
}

/* -------------------- RESULTS ---------------------- */

function gradeFromMarks(m) {
    if (m >= 90) return "A+";
    if (m >= 75) return "A";
    if (m >= 60) return "B";
    if (m >= 45) return "C";
    if (m >= 35) return "D";
    return "F";
}

function refreshResults() {
    renderFilteredResults(results);
}

function saveResult() {
    let obj = {
        student: resultStudent.value,
        subject: resultSubject.value,
        marks: Number(resultMarks.value),
        date: resultDate.value
    };

    if (editingResult !== null) results[editingResult] = obj;
    else results.push(obj);

    editingResult = null;
    saveLS();
    location.reload();
}

function editResult(i) {
    editingResult = i;
    let r = results[i];

    resultStudent.value = r.student;
    resultSubject.value = r.subject;
    resultMarks.value = r.marks;
    resultDate.value = r.date;

    new bootstrap.Modal("#resultModal").show();
}

function deleteResult(i) {
    results.splice(i, 1);
    saveLS();
    refreshResults();
}

/* -------------------- FILTERS ADDED HERE ---------------------- */

filterStudent.onchange = filterResults;
filterSubject.onchange = filterResults;

function filterResults() {
    let fs = filterStudent.value;
    let sub = filterSubject.value;

    let filtered = results.filter(r => {
        return (fs === "all" || r.student === fs) &&
               (sub === "all" || r.subject === sub);
    });

    renderFilteredResults(filtered);
}

function renderFilteredResults(list) {
    let tbody = resultTable;
    tbody.innerHTML = "";

    if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center">No results found</td></tr>`;
        return;
    }

    list.forEach((r, i) => {
        tbody.innerHTML += `
            <tr>
                <td>${r.student}</td>
                <td>${r.subject}</td>
                <td>${r.marks}</td>
                <td><span class="badge bg-dark">${gradeFromMarks(r.marks)}</span></td>
                <td>${r.date}</td>
                <td>
                    <button class="btn btn-sm btn-secondary me-2" onclick="editResult(${i})">Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteResult(${i})">Delete</button>
                </td>
            </tr>
        `;
    });
}

/* -------------------- INITIAL LOAD ---------------------- */

function loadDropdowns() {
    studentSection.innerHTML = "";
    resultStudent.innerHTML = "";

    sections.forEach(s => {
        studentSection.innerHTML += `<option>${s.name}</option>`;
    });

    students.forEach(s => {
        resultStudent.innerHTML += `<option>${s.name}</option>`;
    });

    filterStudent.innerHTML = `<option value="all">All Students</option>`;
    students.forEach(s => {
        filterStudent.innerHTML += `<option value="${s.name}">${s.name}</option>`;
    });

    filterSubject.innerHTML = `<option value="all">All Subjects</option>`;
    let uniqueSubjects = [...new Set(results.map(r => r.subject))];
    uniqueSubjects.forEach(sub => {
        filterSubject.innerHTML += `<option value="${sub}">${sub}</option>`;
    });
}

refreshStudents();
refreshSections();
refreshResults();
loadDropdowns();
