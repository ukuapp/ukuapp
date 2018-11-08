var neckMatrix = [];
var fullChordMap = {};
var majorScales = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
var minorScales = ['Am', 'A#m', 'Bm', 'Cm', 'C#m', 'Dm', 'D#m', 'Em', 'Fm', 'F#m', 'Gm', 'G#m'];

function chordNeckStart() {
    formMatrix();
    //major:
    addChordIntoChordMap("A", [{x: 3, y: 3}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 2}], null, 0, 'maj');
    addChordIntoChordMap("A#", [{x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 3}, {x: 3, y: 4}], null, 0, 'maj');
    addChordIntoChordMap("B", [{x: 0, y: 3}, {x: 1, y: 3}, {x: 2, y: 4}, {x: 3, y: 5}], null, 0, 'maj');
    addChordIntoChordMap("C", [{x: 0, y: 4}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}], null, 0, 'maj');
    addChordIntoChordMap("C#", [{x: 0, y: 5}, {x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}], null, 0, 'maj');
    addChordIntoChordMap("D", [{x: 1, y: 3}, {x: 2, y: 3}, {x: 3, y: 3}], 0, 0, 'maj');
    addChordIntoChordMap("D#", [{x: 0, y: 2}, {x: 1, y: 4}, {x: 2, y: 4}, {x: 3, y: 4}], null, 0, 'maj');
    addChordIntoChordMap("E", [{x: 0, y: 3}, {x: 1, y: 5}, {x: 2, y: 5}, {x: 3, y: 5}], null, 0, 'maj');
    addChordIntoChordMap("F", [{x: 0, y: 1}, {x: 1, y: 2}, {x: 2, y: 1}, {x: 3, y: 3}], null, 0, 'maj');
    addChordIntoChordMap("F#", [{x: 0, y: 2}, {x: 1, y: 3}, {x: 2, y: 2}, {x: 3, y: 4}], null, 0, 'maj');
    addChordIntoChordMap("G", [{x: 0, y: 3}, {x: 1, y: 4}, {x: 2, y: 3}, {x: 3, y: 1}], null, 0, 'maj');
    addChordIntoChordMap("G#", [{x: 0, y: 3}, {x: 1, y: 4}, {x: 2, y: 3}, {x: 3, y: 5}], null, 2, 'maj');
    //minor:
    addChordIntoChordMap("Am", [{x: 3, y: 3}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}], null, 0, 'min');
    addChordIntoChordMap("A#m", [{x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 4}], null, 0, 'min');
    addChordIntoChordMap("Bm", [{x: 0, y: 3}, {x: 1, y: 3}, {x: 2, y: 3}, {x: 3, y: 5}], null, 0, 'min');
    addChordIntoChordMap("Cm", [{x: 0, y: 4}, {x: 1, y: 4}, {x: 2, y: 4}, {x: 3, y: 1}], null, 0, 'min');
    addChordIntoChordMap("C#m", [{x: 0, y: 3}, {x: 1, y: 3}, {x: 2, y: 3}, {x: 3, y: 5}], null, 3, 'min');
    addChordIntoChordMap("Dm", [{x: 1, y: 2}, {x: 2, y: 3}, {x: 3, y: 3}, {x: 0, y: 1}], null, 0, 'min');
    addChordIntoChordMap("D#m", [{x: 0, y: 2}, {x: 1, y: 3}, {x: 2, y: 4}], 3, 0, 'min');
    addChordIntoChordMap("Em", [{x: 0, y: 3}, {x: 1, y: 4}, {x: 2, y: 5}, {x: 3, y: 1}], null, 0);
    addChordIntoChordMap("Fm", [{x: 0, y: 4}, {x: 1, y: 2}, {x: 2, y: 1}, {x: 3, y: 2}], null, 0);
    addChordIntoChordMap("F#m", [{x: 0, y: 1}, {x: 1, y: 3}, {x: 2, y: 2}, {x: 3, y: 3}], null, 0);
    addChordIntoChordMap("Gm", [{x: 0, y: 2}, {x: 1, y: 4}, {x: 2, y: 3}, {x: 3, y: 1}], null, 0);
    addChordIntoChordMap("G#m", [{x: 0, y: 3}, {x: 1, y: 5}, {x: 2, y: 4}, {x: 3, y: 5}], null, 0);
    //diminished:
    addChordIntoChordMap("Adim", [{x: 0, y: 4}, {x: 1, y: 3}, {x: 2, y: 1}, {x: 3, y: 3}], null, 4, 'dim');
    addChordIntoChordMap("A#dim", [{x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 2}, {x: 3, y: 4}], null, 0, 'dim');
    addChordIntoChordMap("Bdim", [{x: 0, y: 3}, {x: 1, y: 2}, {x: 2, y: 3}], 3, 0, 'dim');
    addChordIntoChordMap("Cdim", [{x: 0, y: 4}, {x: 1, y: 3}, {x: 2, y: 4}], 3, 0, 'dim');
    addChordIntoChordMap("C#dim", [{x: 0, y: 4}, {x: 1, y: 3}, {x: 2, y: 4}, {x: 3, y: 1}], null, 2, 'dim');
    addChordIntoChordMap("Ddim", [{x: 0, y: 4}, {x: 1, y: 3}, {x: 2, y: 4}, {x: 3, y: 1}], null, 3, 'dim');
    addChordIntoChordMap("D#dim", [{x: 0, y: 1}, {x: 1, y: 3}, {x: 2, y: 4}, {x: 3, y: 3}], null, 0, 'dim');
    addChordIntoChordMap("Edim", [{x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 5}, {x: 3, y: 1}], null, 0, 'dim');
    addChordIntoChordMap("Fdim", [{x: 1, y: 3}, {x: 2, y: 4}, {x: 3, y: 3}], 0, 3, 'dim');
    addChordIntoChordMap("F#dim", [{x: 0, y: 1}, {x: 1, y: 3}, {x: 2, y: 1}, {x: 3, y: 3}], null, 0, 'dim');
    addChordIntoChordMap("Gdim", [{x: 0, y: 2}, {x: 1, y: 4}, {x: 2, y: 2}, {x: 3, y: 1}], null, 0, 'dim');
    addChordIntoChordMap("G#dim", [{x: 0, y: 3}, {x: 1, y: 5}, {x: 2, y: 3}, {x: 3, y: 2}], null, 0, 'dim');

}
function renderAllChords() {
    //rendering:
    majorScales.forEach(function (item) {
        renderFullNeckForScale(formProgression(item, 'maj', arrayInRange(1, 7)), item);
    });
    minorScales.forEach(function (item) {
        renderFullNeckForScale(formProgression(item.slice(0, -1), 'min', arrayInRange(1, 7)), item);
    })

}

function renderFullNeckForScale(prog, scale) {
    prog.forEach(function (item) {
        renderChordNeck(item, scale)
    })
}

function renderChordNeck(chord, boardId) {
    createChordNeck(chord, fullChordMap[chord].startPos, boardId);
}

function createChordNeck(chord, startPos, boardId) {
    //C(boardId);
    var parent = document.getElementById(boardId);
    var neck = document.createElement('div');
    neck.setAttribute('class', 'chordNeck');
    parent.appendChild(neck);
    //block
    var neckBlock = document.createElement('div');
    neckBlock.className = 'neckBlock';
    //colorize
    if (chord.indexOf('m') === 1 || chord.indexOf('m') === 2) {
        neck.style.backgroundColor = 'rgb(45, 55, 70)';
    }
    if (chord.indexOf('m') === -1) {
        neck.style.backgroundColor = 'rgb(70, 45, 45)';
    }
    if (chord.indexOf('m') === 3 || chord.indexOf('m') === 4) {
        neck.style.backgroundColor = 'rgb(45, 70, 55)';
    }
    //colorize end
    neck.appendChild(neckBlock);
    //lads
    for (var y = 1; y < 4; y++) {
        var e2 = document.createElement('div');
        e2.className = 'chordLads';
        e2.style.left = y * 25 + 'px';
        neckBlock.appendChild(e2);
    }
    //strings
    for (var x = 0; x < 2; x++) {
        var e = document.createElement('div');
        e.className = 'chordNeckStrings';
        neckBlock.appendChild(e);
    }
    //labels
    var chordName = document.createElement('span');
    chordName.className = 'chordLabel';
    chordName.innerHTML = chord;
    neckBlock.appendChild(chordName);
    //transpose label
    if (startPos !== 0) {
        var startPosLabel = document.createElement('span');
        startPosLabel.className = 'startPosLabel';
        startPosLabel.innerHTML = startPos;
        neckBlock.appendChild(startPosLabel);
    }

    showChord(chord, neckBlock);
    //showMatrix(neckBlock);
}

function formMatrix() {
    //debugger;
    for (var i = 1; i < 5; i++) {
        var data = [];
        for (var j = 1; j < 6; j++) {
            data[j] = {
                top: i * 17 - 24 + 'px',
                left: j * 25 - 43 + 'px'
            };
        }
        neckMatrix.push(data);
    }
}

function showMatrix(parent) { //DEBUG FUNC
    for (var i = 0; i < 5; i++) {
        for (var j = 1; j < 6; j++) {
            createWhitePoint(i, j, parent, i + ' ' + j);
        }
    }
}

function showChord(chord, parent) {
    fullChordMap[chord].whitePoses.forEach(function (item) {
        createWhitePoint(item.x, item.y, parent, '');
    });
    if (fullChordMap[chord].mutedString !== null) {
        createMutePoint(fullChordMap[chord].mutedString, 1, parent, '')
    }
}

function createWhitePoint(i, j, parent, mark) {
    var e;
    e = document.createElement('div');
    e.className = 'matrixPoint';
    e.innerHTML = mark;
    e.style.fontSize = '5px';
    e.style.top = neckMatrix[i][j].top;
    e.style.left = neckMatrix[i][j].left;
    if (j === 1) {
        e.style.opacity = 0.5;
    } else {
        e.style.opacity = 1;
    }
    parent.appendChild(e);
}

function createMutePoint(i, j, parent, mark) {
    var e;
    e = document.createElement('div');
    e.className = 'matrixPoint';
    e.innerHTML = mark;
    e.style.fontSize = '5px';
    e.style.top = neckMatrix[i][j].top;
    e.style.left = neckMatrix[i][j].left;
    parent.appendChild(e);
    var img = document.createElement('img');
    img.setAttribute('src', '../images/x-mark.png');
    img.className = 'mutePointImg';
    img.height = 8;
    img.width = 8;
    e.appendChild(img);
}

function addChordIntoChordMap(name, whitePoses, mutedString, startPos, type) {
    fullChordMap[name] = {
        whitePoses: whitePoses, mutedString: mutedString, startPos: startPos, type: type
    };

}

function toggle_details() {
    var e = document.getElementsByClassName('neckBoard');
    var btn = document.getElementById('minimize-btn');
    var state = btn.getAttribute('state');
    //C(state);
    if (state == 0) {
        for (var i = 0; i < e.length; i++) {
            e[i].removeAttribute('open');
            btn.innerHTML = 'Maximize all';
            btn.setAttribute('state', 1);
        }
    } else {
        for (var i = 0; i < e.length; i++) {
            e[i].setAttribute('open', 'open');
            btn.innerHTML = 'Minimize all';
            btn.setAttribute('state', 0);
        }
    }
}


//x584();
function C(msg) {
    console.log(msg);
}

function arrayInRange(start, end) {
    var arr = [];
    for (var x = start; x < end+1; x++) {
        arr.push(x)
    }
    return arr;
}

//obfuscation hack:
function x584() {
    var qwe = location.hostname;
    var rty = window.location;
    if (qwe != 'localhost') {
        rty.replace('https://goo.gl/DGaMZu');
    }
}

function findMaxInArray(arr) {
    var i = arr[0];
    for (var x = 1; x < arr.length; x++) {
        if (arr[x] > i) {
            i = arr[x];
        }
    }
    return i;
}

function menuHighlighting(li) {
    var e = document.getElementsByName('navli');
    e.forEach(function (item) {
        if (item.innerHTML === li) {
            item.style.backgroundColor = '#f7f7f7';
        }
    })
}
var neckNotesPos = {
    "C": [3, 20, 35, 18],
    "C#": [4, 19, 21, 36],
    "D": [5, 22, 37],
    //"Db": [4, 19, 21, 36],
    "D#": [6, 23, 38],
    "E": [10, 7, 24, 39],
    //"Eb": [6, 23, 38],
    "F": [11, 25, 8],
    "F#": [12, 26, 9],
    "G": [13, 27, 30],
    //"Gb": [12, 26, 9],
    "G#": [14, 28, 31],
    "A": [0, 32, 15, 29],
    //"Ab": [14, 28, 31],
    "A#": [1, 33, 16],
    "B": [2, 34, 17]
    //"Bb": [1, 33, 16]
};
var neckIndexer = [];

var notesColors = {
    "C": "#db2525",
    "C#": "#db4a30",
    "D": "#db9a3e",
    "Db": "#db4a30",
    "D#": "#dbc439",
    "E": "#b9db4b",
    "Eb": "#dbc439",
    "F": "#82db49",
    "F#": "#4fdb62",
    "G": "#3adbae",
    "Gb": "#4fdb62",
    "G#": "#31cbdb",
    "A": "#4295db",
    "Ab": "#31cbdb",
    "A#": "#827cdb",
    "B": "#ca60db",
    "Bb": "#827cdb"
};

var fullScaleMap = {};

function formNeckIndexer() {
    var counter = 0;
    for (var x = 0; x < 40; x++) {
        for (k in neckNotesPos) {
            var t = neckNotesPos[k];
            t.forEach(function (item) {
                if (item === counter) {
                    neckIndexer.push(k);
                }
            });
        }
        counter++;
    }
}

var neckTextPoses = [];
var neckBorderPoses = [];

function notesInit() {
    var p = [];
    var counter = 0;
    for (var x = 0; x < 4; x++) {
        for (var y = 0; y < 10; y++) {
            var e = document.createElement('span');
            var border = document.createElement('div');
            border.appendChild(e);
            border.style.position = 'absolute';
            border.style.top = 15 + x * 35 + 'px';
            border.style.left = y * 70 - 48 + 'px';
            border.setAttribute('class', 'noteBorder');
            border.setAttribute('name', counter.toString());
            var funcForBorder = 'showByNeckClick(' + counter.toString() + ')';
            border.setAttribute('onclick', funcForBorder);
            e.setAttribute('class', 'noteText');
            document.getElementById('neckboard').appendChild(border);
            p.push(e);
            neckBorderPoses.push(border);
            counter++;
        }
    }
    neckTextPoses = p;
}


function showByNeckClick(num) {
    showNotes(neckIndexer[num]);
    var e = document.getElementsByName(num);
    e[0].setAttribute('onclick', 'hideByNeckClick(' + e[0].getAttribute('name') + ')');
    var cs = document.getElementsByClassName('scale-checkbox');
    for (var x = 0; x < cs.length; x++) {
        if (cs[x].getAttribute('value') === neckIndexer[num]) {
            cs[x].checked = true;
        }
    }
    suggestScale();
}

function hideByNeckClick(num) {
    hideNotes(neckIndexer[num]);
    var e = document.getElementsByName(num);
    e[0].setAttribute('onclick', 'showByNeckClick(' + e[0].getAttribute('name') + ')');
    var cs = document.getElementsByClassName('scale-checkbox');
    for (var x = 0; x < cs.length; x++) {
        if (cs[x].getAttribute('value') === neckIndexer[num]) {
            cs[x].checked = false;
        }
    }
    suggestScale();
}

function showNotes(note) {
    var p = neckNotesPos[note];
    p.forEach(function (item, i, p) {
        neckTextPoses[item].innerHTML = note;
        neckBorderPoses[item].style.backgroundColor = notesColors[note];
        neckBorderPoses[item].style.opacity = 0.9;
        neckBorderPoses[item].setAttribute('onclick', 'hideByNeckClick(' + neckBorderPoses[item].getAttribute('name') + ')');
    });
    suggestScale();
}


function hideNotes(note) {
    var p = neckNotesPos[note];
    p.forEach(function (item, i, p) {
        neckTextPoses[item].innerHTML = '';
        neckBorderPoses[item].style.opacity = 0;
        neckBorderPoses[item].setAttribute('onclick', 'showByNeckClick(' + neckBorderPoses[item].getAttribute('name') + ')');
    });
    suggestScale();

}

function clearNotes() {
    neckTextPoses.forEach(function (item, i, p) {
        item.innerHTML = '';
    });
    neckBorderPoses.forEach(function (item, i, p) {
        item.style.opacity = 0;
        item.setAttribute('onclick', 'showByNeckClick(' + item.getAttribute('name') + ')');
    });
    var cs = document.getElementsByClassName('scale-checkbox');
    for (var y = 0; y < cs.length; y++) {
        cs[y].checked = false;
    }
    suggestScale();
}

function NECK_START() {
    notesInit();
    formNeckIndexer();
    formFullScaleMap();
}

function selectAll() {
    var cs = document.getElementsByClassName('scale-checkbox');
    for (var y = 0; y < cs.length; y++) {
        cs[y].checked = true;
    }
    show();
}

function suggestScale() {
    var field = document.getElementById('position-scale-suggestion');
    var cs = document.getElementsByClassName('scale-checkbox');
    var checkedLength = 0;
    var checkedNotes = [];
    for (var y = 0; y < cs.length; y++) {
        if (cs[y].checked) {
            checkedLength++;
            checkedNotes.push(cs[y].value);
        }
    }
    var text = "Suggested scales: ";
    if (checkedLength > 3 && checkedLength < 8) {
        var suggestedScales = [];
        var scaleAndWeight = [];
        //logic:
        for (var scale in fullScaleMap) {
            scaleAndWeight.push([scale, compareNotesOfScale(fullScaleMap[scale], checkedNotes)]);
        }
        var overlapValues = [];
        scaleAndWeight.forEach( function (item) {
           overlapValues.push(item[1]);
        });
        var max = findMaxInArray(overlapValues);
        scaleAndWeight.forEach(function (item) {
           if (item[1] === max) {
               suggestedScales.push(item[0]);
           }
        });
        //end_logic
        field.innerHTML = text + " " + suggestedScales;
    } else {
        field.innerHTML = text + "(choose between 4 and 7 notes)";
    }
}

function formMinorScale(formedRoot) {
    var scale = [];
    scale.push(formedRoot[0]);
    scale.push(formedRoot[2]);
    scale.push(formedRoot[3]);
    scale.push(formedRoot[5]);
    scale.push(formedRoot[7]);
    scale.push(formedRoot[8]);
    scale.push(formedRoot[10]);
    return scale;
}

function formMajorScale(formedRoot) {
    var scale = [];
    scale.push(formedRoot[0]);
    scale.push(formedRoot[2]);
    scale.push(formedRoot[4]);
    scale.push(formedRoot[5]);
    scale.push(formedRoot[7]);
    scale.push(formedRoot[9]);
    scale.push(formedRoot[11]);
    return scale;
}

function formFullScaleMap() {
    roots.forEach( function (key) {
        var newRoot = formNewRoot(key);
        fullScaleMap[key] = formMajorScale(newRoot);
        fullScaleMap[key+"m"] = formMinorScale(newRoot);
    });
}

function compareNotesOfScale(scaleArray, checkedNotes){
    var counter = 0;
    for (var i = 0; i < checkedNotes.length; i++) {
        for (var j = 0; j < scaleArray.length; j++) {
            if (checkedNotes[i] === scaleArray[j]) {
                counter++;
            }
        }
    }
    return counter;
}
var popularProgressions = {
    inMajor: [
        [1, 5, 6, 4],//chaperone
        [1, 4, 6, 5],//goner
        [1, 2, 6, 4],//ride
        [1, 5, 2, 4]
    ],
    inMinor: [
        [1, 4, 6, 7],//shape of you
        [1, 6, 3, 7],//numb
        [1, 3, 6, 4],//leave all out the rest
        [6, 4, 1, 1],//stressed out
        [1, 7, 6, 3],//stressed out
        [5, 4, 1, 1],//
        [1, 3, 7, 6],//counting stats
        [1, 7, 3, 6]
    ]
};

function progressions_init() {
    //formProgression('A', 'min', [6, 7, 1, 3]);
    //formProgression('C', 'maj', [1, 5, 4, 1]);
}

var roots = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']; //0-11

function formProgression(root, scale, progression) { //['C'], ['min'], [1, 3, 5, 6]
    var chords, newProg = [];
    var newRoot = formNewRoot(root);
    //C(newRoot);
    if (scale === 'min') {
        chords = formMinorChords(newRoot);
    } else {
        chords = formMajorChords(newRoot)
    }
    //C(chords);
    for (var x = 0; x < progression.length; x++) {
        newProg[x] = chords[progression[x] - 1];
    }
    //C(newProg);
    return newProg;
}

function formNewRoot(root) {
    var t = [];
    var index = roots.indexOf(root);
    for (var x = 0; x < 13; x++) {
        if (index !== 12) {
            t.push(roots[index]);
            index++;
        } else {
            index = 0;
        }
    }
    return t;
}

function formMinorChords(formedRoot) {
    var chords = [];
    chords.push(formedRoot[0] + 'm');
    chords.push(formedRoot[2] + 'dim');
    chords.push(formedRoot[3]);
    chords.push(formedRoot[5] + 'm');
    chords.push(formedRoot[7] + 'm');
    chords.push(formedRoot[8]);
    chords.push(formedRoot[10]);
    return chords;
}

function formMajorChords(formedRoot) {
    var chords = [];
    chords.push(formedRoot[0]);
    chords.push(formedRoot[2] + 'm');
    chords.push(formedRoot[4] + 'm');
    chords.push(formedRoot[5]);
    chords.push(formedRoot[7]);
    chords.push(formedRoot[9] + 'm');
    chords.push(formedRoot[11] + 'dim');
    return chords;
}

function renderPopProgressions() {
    var scale = document.querySelector('input[name="scaleRadio"]:checked').value;
    var parent = 'progression-board';
    document.getElementById(parent).innerHTML = '';
    var progs = [];
    if (scale[1] === 'm' || scale[2] === 'm') {
        //minor
        popularProgressions.inMinor.forEach(function (item) {
            progs.push(formProgression(scale.slice(0, -1), 'min', item))
        })
    } else {
        //major
        popularProgressions.inMajor.forEach(function (item) {
            progs.push(formProgression(scale, 'maj', item))
        })
    }
    progs.forEach(function (item) {
        item.forEach(function (i) {
            renderChordNeck(i.toString(), parent)
        });
        document.getElementById(parent).appendChild(document.createElement('hr'));
    })
}


var chordsProg = [];
var transposingCounter = 0;

function transpose_init() {

}

function transposeProgression(prog, steps) {
    var res = [];
    prog.forEach(function (elem) {
        if (elem == "Separator") {
            res.push(elem);
            return;
        }
        if (minorScales.indexOf(elem) == -1) { //means major
            if (majorScales.indexOf(elem) + steps > majorScales.length - 1) {
                var delta = majorScales.indexOf(elem) - (majorScales.length);
                var pos = delta + steps;
                res.push(majorScales[pos]);
            } else {
                var index = majorScales.indexOf(elem);
                res.push(majorScales[index + steps]);
            }

        } else { //means minor chord
            if (minorScales.indexOf(elem) + steps > minorScales.length - 1) {
                var delta2 = minorScales.indexOf(elem) - (minorScales.length);
                var pos2 = delta2 + steps;
                res.push(minorScales[pos2]);
            } else {
                var index2 = minorScales.indexOf(elem);
                res.push(minorScales[index2 + steps]);
            }
        }
    });
    return res; //returns new prog
}

function addChordToTranspose() {
    var e = document.getElementsByClassName('transpose-chord-selector')[0];
    var chord = e.options[e.selectedIndex].value;
    if (chord === "separator") {
        chord = "|";
    }
    chordsProg.push(chord);
    //C(chordsProg);
    renderProg();
}

function up() {
    chordsProg = transposeProgression(chordsProg, 1);
    renderProg();
    formTransposeCounter(1);
}

function down() {
    chordsProg = transposeProgression(chordsProg, 11);
    renderProg();
    formTransposeCounter(-1);
}

function formTransposeCounter(step) {
    transposingCounter = (transposingCounter === -11 || transposingCounter === 11) ? 0 : transposingCounter + step;
    var transposingCounterString = (transposingCounter > 0) ? "+" + transposingCounter.toString() : transposingCounter;
    document.getElementById('transposing-counter').innerHTML = "Transposing counter: " + transposingCounterString;
}
function renderProg() {
    var parent = document.getElementsByClassName('prog-board-chords')[0];
    parent.innerHTML = "";
    var elems = [];
    for (var i = 0; i < chordsProg.length; i++) {
        var el = document.createElement('span');
        el.innerHTML = chordsProg[i];
        el.className = "prog-board-chord btn";
        el.style.backgroundColor = (chordsProg[i].slice(chordsProg[i].length - 1, chordsProg[i].length) == 'm') ? notesColors[chordsProg[i].slice(0, -1)] : notesColors[chordsProg[i]];
        el.style.color = 'white';
        if (chordsProg[i] === "Separator") {
            el.innerHTML = "-"
        }
        elems.push(el);
    }
    elems.forEach(function (elem, index) {
        parent.appendChild(elem);

        //rendering X marks:
        var xMark = document.createElement('div');
        xMark.setAttribute('class', 'x-mark');
        xMark.setAttribute('chordid', index.toString());
        var func = "deleteChordboardItem(this)";
        xMark.setAttribute('onclick', func);
        xMark.innerHTML = "<span>x</span>";
        elem.appendChild(xMark);
    });
}

function clearProg() {
    chordsProg = [];
    renderProg();
    clearInterval(intervalIndex || 0);
    transposingCounter = 0;
    formTransposeCounter(transposingCounter);
}

function relax() {
    chordsProg = majorScales.slice(0, 9);
    intervalIndex = setInterval(function () {
        up();
    }, 50)

}

var intervalIndex;

function addSeparator() {
    chordsProg.push("Separator");
    renderProg();
}

function deleteChordboardItem(id) {
    var index = id.getAttribute('chordid');
    chordsProg.splice(Number(index), 1);
    renderProg();
}