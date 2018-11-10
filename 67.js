const openFile = function (event) {
    const input = event.target;
    const reader = new FileReader();
    reader.onload = function () {
        return getDataFromTextFile(reader.result)
    };
    reader.readAsText(input.files[0]);
};

function getDataFromTextFile(text) {
    const data = [[]];
    let i = 0;
    let line = 0;
    let currentValue = '';
    while (i < text.length) {
        if (text[i] === ' ') {
            data[line].push(parseInt(currentValue));
        }
        if (text[i] === '\n') {
            data[line].push(parseInt(currentValue));
            i !== text.length - 1 && data.push([]);
            line += 1;
        }
        if (text[i] === '\n' || text[i] === ' ') {
            currentValue = '';
        } else {
            currentValue += text[i];
        }
        i += 1;
    }
    return data;
}

function readTextFile(file) {
    const handler = resolve => {
        const rawFile = new XMLHttpRequest();
        rawFile.open("GET", file);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status === 0) {
                    resolve(rawFile.responseText);
                }
            }
        };
        rawFile.send(null);
    }
    return new Promise(handler);
}