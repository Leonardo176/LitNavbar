import { LitElement, css, html } from "lit";

export class mynavbar extends LitElement {
	//global variables

	//the pages to show on the navbar
	//key: page redirect
	//value: page label
	static pages = new Map([
		["home", "Home"],
		["visitor", "Visitor"],
		["users", "Users"],
	]);

	//properties

	static properties = {
		activepage: "",
	};

	//css

	static styles = css``;

	//constructor

	constructor() {
		super();
		this.activepage = "home";
	}

	//functions

	#element(page, label) {
		let active = "";

		if (this.activepage === page) {
			active = " active";
		}

		return html`
			<li class="nav-item">
				<a class="nav-link${active}" aria-current="page" href="${page}"
					>${label}</a
				>
			</li>
		`;
	}

	//HTML

	render() {
		const htmlElements = [];

		mynavbar.pages.forEach((label, key) => {
			htmlElements.push(this.#element(key, label));
		});

		return html`<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<div class="container-fluid">
				<a class="navbar-brand">Visitors</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav">
						${htmlElements}
					</ul>
				</div>
			</div>
		</nav>`;
	}

	//disable shadow DOM

	createRenderRoot() {
		return this;
	}
}
