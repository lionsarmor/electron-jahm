<template>
	<nav class="z-10">
		<div>
			<button class="mr-2" aria-label="Open Menu" @click="drawer">
				<svg
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					viewBox="0 0 24 24"
					class="w-8 h-8"
				>
					<path d="M4 6h16M4 12h16M4 18h16"></path>
				</svg>
			</button>
		</div>
		<transition
			enter-class="opacity-0"
			enter-active-class="ease-out transition-medium"
			enter-to-class="opacity-0"
			leave-class="opacity-100"
			leave-active-class="ease-out transition-medium"
			leave-to-class="opacity-0"
		>
			<div
				@keydown.esc="isOpen = false"
				v-show="isOpen"
				class="z-10 fixed inset-0 transition-opacity"
			>
				<div
					@click="isOpen = false"
					class="absolute inset-0 bg-black opacity-50"
					tabindex="0"
				></div>
			</div>
		</transition>
		<aside
			class="nav-position transform top-0 right-0 w-72 bg-jhamNav fixed h-full overflow-auto ease-in-out transition-all duration-300"
			:class="isOpen ? '-translate-x-0' : 'translate-x-full'"
		>
			<div class="ml-1 flex flex-wrap overflow-hidden sm:-mx-2">
				<div>
					<button class="mr-2" aria-label="Open Menu" @click="drawer">
						<svg
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							class="w-8 h-8"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					<div>
						<p class="navigation-title">NAVIGATION</p>
					</div>
					<Button class="nav-text-monitor"
						><img class="monitor" src="../assets/img/monitor.svg" />Your Home
						Search</Button
					>
					<Button class="nav-text-ticket"
						><img class="ticket" src="../assets/img/create-ticket.svg" />Create a
						Ticket</Button
					>
					<Button class="nav-text-settings"
						><img class="settings" src="../assets/img/settings.svg" />Your Device
						Settings</Button
					>
				</div>
			</div>
		</aside>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			isOpen: false
		};
	},
	methods: {
		drawer() {
			this.isOpen = !this.isOpen;
		}
	},
	watch: {
		isOpen: {
			immediate: true,
			handler(isOpen) {
				if (process.client) {
					if (isOpen) document.body.style.setProperty("overflow", "hidden");
					else document.body.style.removeProperty("overflow");
				}
			}
		}
	},
	mounted() {
		document.addEventListener("keydown", e => {
			if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
		});
	}
};
</script>
