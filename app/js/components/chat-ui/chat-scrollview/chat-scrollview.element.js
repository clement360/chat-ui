import './styles.css'

export default class ChatScrollview extends HTMLElement {
  attachedCallback() {
    this.classList.add('loading')
  }

  createdCallback() {
    setTimeout(_ => {
      this.scrollTop = this.scrollHeight
      this.classList.remove('loading')
    }, 1000)
  }
  detachedCallback() {}
  attributeChangedCallback(attr, oldVal, newVal) {}
}

document.registerElement('chat-scrollview', ChatScrollview)