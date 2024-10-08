import { mount, unmount, type Component } from "svelte";
import { writable } from "svelte/store";

const instanceStore = writable<Component>();
let opened = false;

function handleKeyDown(event: KeyboardEvent) {
  if (event.key === "Escape") {
    commandoClose();
  }
};

function handleCtrlK(event: KeyboardEvent) {
  if (event.ctrlKey && event.key === "k") {
    console.log("Ctrl + K pressed");
    // Add your desired functionality here
  }
}

export const commandoListen = () => {
  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keydown", handleCtrlK);
}

export const commandoOpen = (component: Component) => {
  if (opened) {
    console.log("Commando is already opened");
    return;
  }

  opened = true;
  window.addEventListener("keydown", handleKeyDown);
  const instance = mount(component, {
    target: document.body,
  })
  instanceStore.set(instance as Component);
}

export const commandoClose = () => {
  opened = false;
  window.removeEventListener("keydown", handleKeyDown);
  instanceStore.subscribe((instance) => {
    if (instance) {
      unmount(instance);
    }
  });
}
