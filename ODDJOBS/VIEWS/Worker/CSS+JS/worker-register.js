    // Function to update label text with selected file name
    function updateFileName(inputId, labelId) {
        const input = document.getElementById(inputId);
        const label = document.getElementById(labelId);

        input.addEventListener("change", function () {
            if (input.files.length > 0) {
                label.textContent = input.files[0].name;
            } else {
                label.textContent = "Choose File";
            }
        });
    }

    updateFileName("fileInput1", "label1");
    updateFileName("fileInput2", "label2");
    updateFileName("fileInput3", "label3");
    updateFileName("fileInput4", "label4");
    // Add similar calls for other file inputs