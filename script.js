const candidates = ['Michael', 'raegarn', 'Thomas', 'Peter', 'John', 'chriss'];
const message = document.getElementById("message");
const addCandidate = document.getElementById("addCandidate");
const addNew = document.getElementById("addNew");
const output = document.getElementById("output");

addNew.addEventListener("click", added);
function added() {
    const newCandidate = addCandidate.value;
    adder(newCandidate, candidates.length, 0);
    candidates.push(newCandidate);
}
console.log(candidates.length); //number of candidate in the array

function build() {
    candidates.forEach((item, index) => {
        adder(item, index, 0);
    });
}

function adder(name, index, counter) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.classList.add("box");
    td1.textContent = index + 1;
    const td2 = document.createElement("td");
    td2.textContent = name;
    const td3 = document.createElement("td");
    td3.textContent = counter;
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.onclick = function () {
        console.log(tr.lastChild);
        let value =  Number(tr.lastChild.textContent);
        value++;
        tr.lastChild.textContent = value;
    }
    output.appendChild(tr);
}