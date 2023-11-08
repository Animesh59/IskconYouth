var btn = document.getElementById('btn');
var search = "all"

btn.addEventListener('click', () => {
    if (search === "all") {
        console.log('DOB seach actived');
        input.removeEventListener('keyup', filter_All);
        input.addEventListener('keyup', filter_DOB);
        input.placeholder = "Search into DOB..."
        search = "DOB"
        filter_DOB();
    } else {
        console.log('All seach actived');
        input.removeEventListener('keyup', filter_DOB);
        input.addEventListener('keyup', filter_All);
        input.placeholder = "Search into whole table..."
        search = "all";
        filter_All();
    }
})
