const input = document.querySelector('input#artikelTextInput');

        function addNewElement() {

          const input = document.querySelector('input#artikelTextInput');
          const list = document.querySelector('ul#einkaufList');
            const value = input.value;
            const listItem = document.createElement('li');
            listItem.innerHTML = `${value} <button type="button" onclick='deleteElement(this)'>delete</button>`;
            list.appendChild(listItem);
            input.value = "";
        }

        function deleteElement(e) {
          e.parentElement.remove();
        }

        input.onkeydown = function(event) {
            if (event.key === 'Enter') addNewElement()
        }