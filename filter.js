var input = document.getElementById("myInput");
var filter, trs, tr, tds, td;
trs = stuData.getElementsByTagName('tr');

input.addEventListener('keyup', filter_All);



function filter_All() {
    filter = input.value.toUpperCase();

    function isMatching(tds, filter) {
        for (j = 0; j < 2; j++) {
            td = tds[j].innerHTML.toUpperCase();
            if (td.indexOf(filter) > -1) {
                tr.classList.remove('hide');
                return 0;
            }
            else {
                tr.classList.add('hide');
            }
        }
    }

    for (i = 0; i < trs.length; i++) {
        tr = trs[i];
        tds = tr.children;
        isMatching(tds, filter);
    }
}








function filter_DOB() {
    filter = input.value.toUpperCase();

    function isMatching(td, filter) {
        td = td.innerHTML.toUpperCase();
        if (td.indexOf(filter) > -1) {
            tr.classList.remove('hide');
        }
        else {
            tr.classList.add('hide');
        }
        return 0;
    }

    for (i = 0; i < trs.length; i++) {
        tr = trs[i];
        td = tr.children[1];
        isMatching(td, filter);
    }
}
