document.getElementById('hitung').addEventListener('click', function() {
    // Ambil semua checkbox ibadah
    const ibadahCheckboxes = document.querySelectorAll('input[type="checkbox"].ibadah');
    let totalIbadah = 0;

    // Loop melalui semua checkbox ibadah
    ibadahCheckboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            totalIbadah += parseInt(checkbox.value);
        }
    });

    // Ambil semua checkbox maksiat
    const maksiatCheckboxes = document.querySelectorAll('input[type="checkbox"].maksiat');
    let totalMaksiat = 0;

    // Loop melalui semua checkbox maksiat
    maksiatCheckboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            totalMaksiat += parseInt(checkbox.value);
        }
    });

    // Hitung selisih
    const selisih = totalIbadah - totalMaksiat;

    // Tampilkan selisih di elemen dengan ID 'selisih'
    document.getElementById('selisih').textContent = selisih;
});