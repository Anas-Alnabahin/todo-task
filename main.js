const todoPage = document.getElementById('todoPage');
const addPage = document.getElementById('addPage');
const addBtn = document.getElementById('vector');
const main = document.querySelector('main');

let counter = 0;

let outerDiv = `  
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 26px 34px;
gap: 12px;
width: 445px;
height: 171px;
background: #ffffff;
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
border-radius: 8px;
flex: none;

flex-grow: 0;`;

let innerDiv = `  
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 12px;
width: 377px;
height: 119px;
flex: none;
order: 0;
flex-grow: 0;`;

let theH4 = `  
width: 221px;
height: 29px;
font-family: "Inter";
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 29px;
color: #374151;
flex: none;
order: 0;
flex-grow: 0;`;

let theP = `  
width: 377px;
height: 41px;
font-family: "Inter";
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #6b7280;
flex: none;
order: 1;
flex-grow: 0;`;
addBtn.onclick = () => {
    document.documentElement.scrollTop = 1000000;
    addBtn.style.display = 'none';
    addPage.style.display = 'flex';
    main.innerHTML += `<img src="images/xmark.png" id="xMark">
    <img src="images/6a7mark.png" id="tMark">`;
    const xBtn = document.getElementById('xMark');
    const tBtn = document.getElementById('tMark');
    const in1 = document.getElementById('input1');
    const in2 = document.getElementById('input2');
    in1.onclick = () => {
        in1.innerText = "";
    }

    in2.onclick = () => {
        in2.textContent = "";
    }

    xBtn.onclick = () => {
        location.reload();
    };

    tBtn.onclick = () => {
        let myPost = {
            userId: 5,
            title: in1.textContent,
            body: in2.textContent
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(myPost),
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => {
            console.log(error);
        });
    };
};


window.onload = () => {
    let req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200){
            const res = JSON.parse(req.responseText);
            for(let x = 0; x < res.length; x++){
                console.log(res[x].id);
                todoPage.innerHTML += `<div style='${outerDiv} order: ${counter};'>
                                            <div style='${innerDiv}'>
                                                <h4 style='${theH4} overflow: hidden;'>
                                                    ${res[x].title}
                                                </h4>
                                                <p style='${theP}'>
                                                    ${res[x].body}
                                                </p>
                                            </div>
                                      </div>`
                counter++;
            }
        }
    }
        req.open('GET', 'https://jsonplaceholder.typicode.com/posts');
        req.send();
};