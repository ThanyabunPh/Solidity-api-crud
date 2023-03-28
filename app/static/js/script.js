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

editData = (ID) => {
    fetch('/get_by_id/' + ID, {
        method: 'GET',
    }).then(response => response.json())
        .then(data => {
            console.log(data);
            if (data) {
                Swal.fire({
                    title: 'Edit Data',
                    html:
                        '<div class="form-group">' +
                        '<label for="ID">ID</label>' +
                        '<input disabled id="ID" type="text" class="form-control" value="' + data.data[0] + '">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="name">Address</label>' +
                        '<input id="name" type="text" class="form-control" value="' + data.data[1] + '">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="surname">Surname</label>' +
                        '<input id="surname" type="text" class="form-control" value="' + data.data[2] + '">' +
                        '</div>' +
                        '<div class="form-group">' +
                        '<label for="GPAX">GPAX</label>' +
                        '<input id="GPAX" type="text" class="form-control" value="' + data.data[3] + '">' +
                        '</div>',
                    focusConfirm: false,
                    showCancelButton: true,
                    confirmButtonText: 'Confirm',
                })
                    .then((result) => {
                        if (result.isConfirmed) {
                            const ID = Swal.getPopup().querySelector('#ID').value;
                            const name = Swal.getPopup().querySelector('#name').value;
                            const surname = Swal.getPopup().querySelector('#surname').value;
                            const GPAX = Swal.getPopup().querySelector('#GPAX').value;

                            if (name === '' || surname === '' || GPAX === '') {
                                toast().fire({
                                    icon: 'error',
                                    title: 'Please fill all fields',
                                })
                            } else {
                                fetch('/update', {
                                    method: 'PUT',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        "id": ID,
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
                                                title: 'Successfully updated data',
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
                                    })
                            }
                        }
                    });
            }
        });

}

deleteData = (ID) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
    }).then((result) => {
        if (result.isConfirmed) {
            fetch('/delete/', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "id": ID
                })
            }).then(response => response.json())
                .then(data => {
                    console.log(data);
                    if (data.result === 'success') {
                        toast().fire({
                            icon: 'success',
                            title: 'Successfully deleted data',
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
                })
        }
    })

}

searchData = () => {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const GPAX = document.getElementById("GPAX").value;

    if (name === '' && surname === '' && GPAX === '') {
        toast().fire({
            icon: 'error',
            title: 'Please fill at least one field',
        })
    } else {
        const List = [];
        const tbody = document.getElementById('myTable');
        const rows = tbody.querySelectorAll('tr');
        for (let i = 0; i < rows.length; i++) {
            const cells = rows[i].querySelectorAll('td');
            if (name === cells[1].innerText || surname === cells[2].innerText || GPAX === cells[3].innerText) {
                List.push(rows[i]);
            }
        }
        if (List.length === 0) {
            toast().fire({
                icon: 'error',
                title: 'No data found',
            })
        } else {
            toast2().fire({
                icon: 'success',
                title: 'Found ' + List.length + ' data',
            }).then(() => {
                tbody.innerHTML = '';
                List.forEach((item) => {
                    tbody.appendChild(item);
                });
            })

        }
    }

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

toast2 = () => {
    const Toast_2 = Swal.mixin({
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

    return Toast_2;
}