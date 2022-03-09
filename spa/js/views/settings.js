import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Settings");
    }

    async getHtml() {
        return `
        <h1>Program settings</h1>
        <p>
            Aliquam erat volutpat. Nullam condimentum nisl eu semper vehicula. Vivamus nibh urna, ultrices eu arcu at, consequat facilisis arcu. Nam ullamcorper ultrices scelerisque. Morbi accumsan et nisi id convallis. Phasellus pharetra ultricies risus quis pulvinar. Duis eros sem, pretium id urna in, convallis vestibulum purus. Nulla eget posuere dolor, et suscipit quam. Etiam porttitor, justo sed efficitur porta, urna nisi consequat nisi, in pulvinar leo nulla at ex. Aenean id pulvinar nibh.
        </p>  
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique ullamcorper lectus ut pulvinar. Sed porttitor augue non enim sagittis bibendum. Aenean vitae vulputate erat. Etiam ultricies leo id urna congue, finibus rhoncus ipsum cursus.
        </p>
        <p>
            <a href="/posts" data-link> View recent posts</a>.
        </p>     
        `;
    }
}