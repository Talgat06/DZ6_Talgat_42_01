    function todo() {
        const reverseInput = document.getElementById("reverseInput");
        const reverseButton = document.getElementById("reverseButton");
        const reversedText = document.getElementById("reversedText");
        const arrayButton = document.getElementById("arrayButton");
        const arrayInput = document.getElementById("arrayInput");
        const arrayText = document.getElementById("arrayText");

        reverseButton.onclick = () => {
            const inputValue = reverseInput.value;
            const reversed = inputValue.split('').reverse().join('');
            reversedText.innerText = reversed;
        };
        arrayButton.onclick = () => {
            const inputValue = arrayInput.value;
            const array = inputValue.split(',');
            arrayText.innerHTML = ''

            array.forEach(item => {
                const paragraph = document.createElement('p');
                paragraph.innerText = item.trim();
                arrayText.append(paragraph);
            });

        };
    }

    todo();