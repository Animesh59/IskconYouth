
var stuData = document.getElementsByClassName('stuData')[0];
var trs = stuData.getElementsByTagName('tr');

function myFunction() {
    var input, filter, tr, tds;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    // console.log(filter);

    function filterTrData(tds) {
        for (j = 0; j < tds.length; j++) {
            if (tds[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                console.log(tds[j].innerHTML);
                // console.log(tr);
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
        filterTrData(tds);
    }

}

