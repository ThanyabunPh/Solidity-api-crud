AddData = () => {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const GPAX = document.getElementById("GPAX").value;

    if (name === '' || surname === '' || GPAX === '') {
        toast().fire({
            icon: 'error',
            title: 'Please fill all fields',
        })
    } else {
        fetch('/insert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": name,
                "surname": surname,
                "GPAX": GPAX
            })
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.result === 'success') {
                    toast().fire({
                        icon: 'success',
                        title: 'Successfully added data',
                    }).then(() => {
                        window.location.reload();
                    })
                }
            })
            .catch(error => {
                toast().fire({
                    icon: 'error',
                    title: 'Something went wrong',
                })
            });
        document.getElementById("name").value = "";
        document.getElementById("surname").value = "";
        document.getElementById("GPAX").value = "";
    }
}

editData = () => {
    Swal.fire({
        title: 'Edit Data',
        html: '<input id="name" class="swal2-input" placeholder="Name">' +
            '<input id="surname" class="swal2-input" placeholder="Surname">' +
            '<input id="GPAX" class="swal2-input" placeholder="GPAX">',
        focusConfirm: false,
    })
}

deleteData = () => {
    alert("Delete Data");
}

toast = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-right',
        iconColor: 'white',
        customClass: {
            popup: 'colored-toast'
        },
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
    })

    return Toast;
}