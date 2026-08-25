

export function buatPlayer() {
    // Fungsi ini akan merakit karakter dan mengembalikannya ke main.js
    const player = add([
        rect(40, 40),
        color(0, 0, 255),
        pos(center()), // Posisi di tengah layar
        area(),
        anchor("center"),
        "player"       // Tag agar dikenali oleh musuh/EXP
    ]);

    return player;
}

