

(function () {
    const form = document.querySelector(`#form`);

    form.addEventListener(`submit`, function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        let values = Object.fromEntries(formData.entries());
        console.log(values);
        form.reset();

        localStorage['value'] = JSON.stringify(values);
    });

})()