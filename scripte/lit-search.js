import { LitElement, html, css } from "https://unpkg.com/lit-element/lit-element.js?module"

class LitSearch extends LitElement {

    static get properties() {
        return {
            persons: { type: Array },
            inputValue: { type: String },
            name: { type: String }

        };
    }

    constructor() {
        super();
        this.inputValue = "";
        this.persons = [{ 'name': "Ulrich" }, { 'name': "Marc" }, { 'name': "Albert" }, { 'name': "Müller" }, { 'name': "Rüdiger" }];
        this.filteredPersons = this.persons;
        console.log("constructor")
    }
    static get styles() {
        return css `
        #searchcomp {
          width: 900px;
          margin: auto;
        }
        `;
    }

    search(e) {
        var newValue = this.shadowRoot.querySelector("input").value;
        this.filteredPersons = this.persons.filter(person => person.name.toLowerCase().includes(newValue.toLowerCase()));
        this.requestUpdate();
    }

    render() {
            console.log(this.filteredPersons)
            return html `
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <div id="searchcomp">
          <h2>Please enter the name you want to search:</h2>
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <input class="form-control" type="text" value="${this.inputValue}" @keyup="${this.search} placeholder="Filter the Output">
            </div>
          </div>
          <ul class="list-group">
            ${this.filteredPersons.map(person => html`<li class="list-group-item list-group-item-secondary">${person.name}</li>`)}
          </ul>
        </div>
        `
    }
}

customElements.define("lit-search", LitSearch)