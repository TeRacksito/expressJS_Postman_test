const tbody = document.querySelector('tbody');

fetch('/api/user')
    .then(res => res.json())
    .then(data => {
        data.forEach(client => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${client.name}</td>
                <td>${client.surname}</td>
                <td>${client.email}</td>
            `;
            tr.dataset.id = client.id;
            tbody.appendChild(tr);
        });
    });

tbody.addEventListener('click', e => {
    const tr = e.target.closest('tr');
    if (tr) {
        const id = tr.dataset.id;
        fetch(`/api/user/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
    }
});