document.write('<h1>九九乘法表</h1>');
document.write('<ul class="table">');
for (i = 1; i < 10; i++) {

    for (j = 1; j < 10; j++) {
        console.log(i * j)
        if (i == 1) {
            bg_color = '#0d2a8a';
        } else if (j == 1) {
            bg_color = "#0d2a8a";
        } else {
            bg_color = '#fff';
        }

        document.write('<li style="background:' + bg_color + '">' + i*j + '</li>');
    }
}

document.write('</ul>');