import AbstractView from "/spa/js/views//AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
        <h1>Our Blog posts: </h1>
        <p>
            Sed sed iaculis est, in accumsan turpis. Proin laoreet ex et ipsum pulvinar convallis. Suspendisse consectetur lacus ac nisl tincidunt molestie. In hac habitasse platea dictumst. Vivamus consequat nisl in mauris facilisis vehicula. Vestibulum a fermentum tellus, sed porttitor velit. Etiam tincidunt posuere ante pharetra fermentum. Integer scelerisque velit eleifend faucibus volutpat. Sed at elit ligula. Integer efficitur vel diam vel ullamcorper. Maecenas id leo vel ante volutpat sollicitudin vitae laoreet quam. Maecenas velit ex, rutrum et tellus ut, luctus pellentesque lacus. Duis lacinia, orci sed varius auctor, justo velit convallis nibh, vulputate ultrices tellus felis nec erat. Duis nunc arcu, lacinia eget viverra ut, tempor quis augue. Nullam facilisis odio eu erat sagittis, eget pellentesque purus dictum.
        </p>  
        <p>
            Integer non lacinia neque, a auctor nunc. Pellentesque quis massa venenatis, aliquet nisi vitae, lacinia sapien. Ut arcu nisi, porttitor placerat tortor porttitor, consequat pulvinar sem. Curabitur at augue vitae dolor eleifend aliquam aliquam feugiat tellus. Integer blandit a metus nec vestibulum. Duis imperdiet neque quis pharetra accumsan. Vivamus aliquet semper congue. Mauris ligula augue, blandit nec orci sit amet, facilisis blandit risus. Aliquam justo sem, sodales id rutrum ac, malesuada eu augue. Vestibulum nibh dui, tristique nec elit id, auctor euismod velit. Fusce posuere tortor sit amet vulputate consectetur. Cras lacinia ut lacus ut lobortis. Fusce a accumsan arcu, posuere consequat metus. Ut imperdiet tellus a metus malesuada fringilla.
        </p>
        <p>
            <a href="/" data-link> View the dashboard</a>.
        </p>     
        `;
    }
}